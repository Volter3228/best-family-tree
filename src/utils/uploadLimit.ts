// Must match MAX_UPLOAD_BYTES on the server. Checked before sending: past this
// size the request stalls for minutes and fails with a confusing 500.
export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;

export const UPLOAD_TOO_LARGE_MESSAGE = "Фото завелике. Максимум 10 МБ.";

export const exceedsUploadLimit = (file: Pick<File, "size">) =>
  file.size > MAX_UPLOAD_BYTES;
