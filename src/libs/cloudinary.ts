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

// Full photo for the viewer: keeps the aspect ratio, never upscales, keeps the
// original format (no f_auto, so "Save image as" gives a jpg/png, not a jxl), and is
// capped so the huge original is not downloaded.
export const getPhotoUrlForViewer = (url: string, max = 2048) => {
  const [baseUrl, filePath] = url.split("/upload/");
  return `${baseUrl}/upload/c_limit,w_${max},h_${max}/${filePath}`;
};

// Small preview: gives the aspect ratio and a first frame before the full photo loads.
export const getPhotoUrlForViewerPreview = (url: string) =>
  getPhotoUrlForViewer(url, 320);

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
