import { useEffect, useState } from "react";
import { fetchFamilyGroups, type FamilyGroupOption } from "@/api";

const EMPTY: FamilyGroupOption[] = [];

// One request per page load, shared by every consumer.
let cached: FamilyGroupOption[] | null = null;
let pending: Promise<FamilyGroupOption[]> | null = null;

const loadFamilyGroups = () => {
  if (cached) return Promise.resolve(cached);
  pending ??= fetchFamilyGroups()
    .then((groups) => {
      cached = groups;
      return groups;
    })
    .catch((error) => {
      console.error(error);
      pending = null;
      return EMPTY;
    });
  return pending;
};

export const useFamilyGroups = (): FamilyGroupOption[] => {
  const [groups, setGroups] = useState<FamilyGroupOption[]>(cached ?? EMPTY);

  useEffect(() => {
    let active = true;
    loadFamilyGroups().then((result) => {
      if (active) setGroups(result);
    });
    return () => {
      active = false;
    };
  }, []);

  return groups;
};
