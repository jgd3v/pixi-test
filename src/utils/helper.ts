export const isEmpty = (value: unknown) => {
  return value === undefined || value === null || value === '';
};

export const loadFileUrl = (route: string) => {
  return new URL(`../assets/${route}`, import.meta.url).href;
};
