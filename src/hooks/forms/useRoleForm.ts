import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { createRole, deleteRole, updateRole } from "@/api/fetchMeta";
import { NO_CHANGES_MESSAGE } from "@/constants/form";
import type { Role } from "@/types";
import { useRoles } from "../data/useMeta";
import { useTransientMessage } from "./useTransientMessage";

export interface RoleFormData {
  name: string;
  description: string;
  isLeaderPosition: boolean;
}

const EMPTY_FORM: RoleFormData = {
  name: "",
  description: "",
  isLeaderPosition: false,
};

const toFormData = (role: Role): RoleFormData => ({
  name: role.name,
  description: role.description ?? "",
  isLeaderPosition: role.isLeaderPosition,
});

const isSame = (a: RoleFormData, b: RoleFormData) =>
  a.name.trim() === b.name.trim() &&
  a.description.trim() === b.description.trim() &&
  a.isLeaderPosition === b.isLeaderPosition;

interface Options {
  // Id of the role being edited; undefined while creating.
  roleId?: string;
  onCreated: (role: Role) => void;
  onDeleted: () => void;
  // Shown on the submit button when the form opens (e.g. "Створено").
  initialMessage?: string;
}

export const useRoleForm = ({
  roleId,
  onCreated,
  onDeleted,
  initialMessage,
}: Options) => {
  const [roles, setRoles, reloadRoles] = useRoles();
  const role = useMemo(
    () => roles.find((r) => r.id === roleId) ?? null,
    [roles, roleId],
  );
  const [form, setForm] = useState<RoleFormData>(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, showSuccess, hideSuccess] = useTransientMessage();
  // The role as the server last returned it; edits that match it are not sent.
  const savedRef = useRef<RoleFormData | null>(null);
  const hydratedId = useRef<string | null>(null);

  useEffect(() => {
    if (initialMessage) showSuccess(initialMessage);
  }, [initialMessage, showSuccess]);

  // Hydrate once per role; a list refresh must not wipe in-progress edits.
  useEffect(() => {
    // The form is remounted per view, so create mode starts empty.
    if (!role) return;
    if (hydratedId.current !== role.id) {
      hydratedId.current = role.id;
      setForm(toFormData(role));
    }
    savedRef.current = toFormData(role);
  }, [roleId, role]);

  // Positions block deletion; members are what the editor reports.
  const positionCount = role?._count?.positions ?? 0;
  const memberCount = role?.memberCount ?? 0;

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = form.name.trim();
    if (!name) {
      setError("Назва обов'язкова");
      return;
    }

    if (roleId && savedRef.current && isSame(form, savedRef.current)) {
      setError(null);
      showSuccess(NO_CHANGES_MESSAGE);
      return;
    }

    // Creating with a taken name would silently return the existing role.
    if (
      roles.some(
        (r) => r.id !== roleId && r.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      setError("Посада з такою назвою вже є");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    hideSuccess();
    try {
      const data = {
        name,
        description: form.description.trim(),
        isLeaderPosition: form.isLeaderPosition,
      };
      if (roleId) {
        const updated = await updateRole(roleId, data);
        savedRef.current = toFormData(updated);
        setForm(savedRef.current);
        showSuccess("Збережено");
      } else {
        const created = await createRole(data);
        // In the list before the editor opens, so it never renders blank.
        setRoles([...roles, created]);
        reloadRoles();
        onCreated(created);
        return;
      }
      reloadRoles();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Не вдалося зберегти посаду",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const remove = async () => {
    if (!roleId) return;
    setIsSubmitting(true);
    setError(null);
    try {
      await deleteRole(roleId);
      reloadRoles();
      onDeleted();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Не вдалося видалити посаду",
      );
      setIsConfirmingDelete(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    role,
    form,
    setForm,
    positionCount,
    memberCount,
    isSubmitting,
    isConfirmingDelete,
    setIsConfirmingDelete,
    error,
    success,
    submit,
    remove,
  };
};
