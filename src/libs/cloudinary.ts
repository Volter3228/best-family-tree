type CloudinaryTransformations = {
  width?: number | string;
  height?: number | string;
};

export const getPhotoUrlAsAvatar = (
  url: string,
  { width = 480, height = 480 }: CloudinaryTransformations = {}
) => {
  const [baseUrl, filePath] = url.split("/upload/");
  return `${baseUrl}/upload/c_fill,w_${width},h_${height},r_max/${filePath}`;
};
