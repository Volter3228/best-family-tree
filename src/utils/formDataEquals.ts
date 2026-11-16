// True when two multipart bodies would send the same request, regardless of
// field order. Files are compared by identity: a newly picked file is a
// different upload even when its bytes match, and an untouched existing photo
// is a plain string.
export const isSameFormData = (a: FormData, b: FormData): boolean => {
  const keys = new Set([...a.keys(), ...b.keys()]);

  for (const key of keys) {
    const valuesA = a.getAll(key);
    const valuesB = b.getAll(key);
    if (valuesA.length !== valuesB.length) return false;
    if (valuesA.some((value, index) => value !== valuesB[index])) return false;
  }
  return true;
};
