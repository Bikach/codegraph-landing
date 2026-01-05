const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL.slice(0, -1)
  : import.meta.env.BASE_URL;

export function url(path: string): string {
  if (path.startsWith('/')) {
    return `${base}${path}`;
  }
  return path;
}
