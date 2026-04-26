const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function getAssetPath(path) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return `${basePath}${normalizedPath}`
}
