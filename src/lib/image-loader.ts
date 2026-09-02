export default function imageLoader({ src }: { src: string }) {
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
    return src;
  }
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${src.startsWith("/") ? src : `/${src}`}`;
}
