export const capitalizeFirstLetter = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const capilizeOnlyFirstLetter = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
