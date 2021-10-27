export function CapitalPath(pathName: string) {
  const clearPathName = pathName.replace('/', '');
  const pathNameClear = clearPathName[0].toUpperCase() + clearPathName.slice(1);
  return pathNameClear;
}
