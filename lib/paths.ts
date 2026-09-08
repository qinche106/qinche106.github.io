const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function internalPath(path: string) {
  return `${basePath}${path}`;
}
