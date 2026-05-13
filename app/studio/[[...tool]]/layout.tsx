export const metadata = {
  title: "Affordable GLP-1 CMS",
  description: "Content management for Affordable GLP-1",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
