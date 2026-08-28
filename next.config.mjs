/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export estatico: el build deja en out/ el mismo HTML+CSS que habia antes,
  // sin servidor. Se puede alojar en cualquier sitio.
  output: 'export',
  // /Doral -> out/Doral/index.html, para conservar las URLs limpias del sitio viejo
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
