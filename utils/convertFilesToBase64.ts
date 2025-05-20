// utils/convertFilesToBase64.ts

/**
 * Convert an array of File objects to an array of Base64 strings (data URLs).
 * Useful for uploading files to APIs that require base64 encoding.
 * 
 * @param files - An array of File objects (e.g., from <input type="file" />)
 * @returns Promise<string[]> - An array of base64-encoded data URLs
 */
export const convertFilesToBase64 = async (files: File[]): Promise<string[]> => {
  const base64Files = await Promise.all(
    files.map(
      (file) =>
        new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        })
    )
  );
  return base64Files;
};