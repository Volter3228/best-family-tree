type CloudinaryTransformations = {
  width?: number | string;
  height?: number | string;
};

// Avatar for the canvas: already cropped to a circle (transparent corners, WebP
// keeps the alpha channel small), so no mask has to be rendered per node.
export const getPhotoUrlAsRoundAvatar = (url: string, size = 480) => {
  const [baseUrl, filePath] = url.split("/upload/");
  // The extension decides the delivered format, so it must be one with alpha.
  const webpPath = filePath.replace(/\.\w+$/, ".webp");
  return `${baseUrl}/upload/c_fill,w_${size},h_${size},r_max/${webpPath}`;
};

export const getPhotoUrlAsAvatar = (
  url: string,
  { width = 480, height = 480 }: CloudinaryTransformations = {},
) => {
  const [baseUrl, filePath] = url.split("/upload/");
  return `${baseUrl}/upload/c_fill,w_${width},h_${height}/${filePath}`;
};

// Pre-rounded logo texture for the canvas team badge (`r_` is in delivered px;
// WebP keeps the alpha). Only Cloudinary URLs can be transformed this way.
export const getIconUrlAsRounded = (
  url: string,
  size = 132,
  radius = 36,
): string | null => {
  if (!url.includes("res.cloudinary.com")) return null;
  const [baseUrl, filePath] = url.split("/upload/");
  const webpPath = filePath.replace(/\.\w+$/, ".webp");
  return `${baseUrl}/upload/c_fit,w_${size},h_${size},r_${radius}/${webpPath}`;
};
