export async function uriToFile(url: string): Promise<File> {
  const response = await fetch(url);
  const blob = await response.blob();
  return new File([blob], "image.png", { type: blob.type });
}
