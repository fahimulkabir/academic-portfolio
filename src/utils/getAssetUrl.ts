export function getAssetUrl(imagePath: string) {
  if (!imagePath) return "";

  // 1. External links
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  const baseUrl = import.meta.env.BASE_URL; // e.g., "/your-repo-name/"

  // 2. DEFENSIVE CHECK: Did the CMS or another component already add the base URL?
  // If the imagePath already starts with "/your-repo-name", just return it to prevent doubling.
  const strippedBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  if (imagePath.startsWith(baseUrl) || imagePath.startsWith(strippedBase)) {
    return imagePath;
  }

  // 3. Clean and combine safely
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
  return baseUrl.endsWith("/")
    ? `${baseUrl}${cleanPath}`
    : `${baseUrl}/${cleanPath}`;
}
