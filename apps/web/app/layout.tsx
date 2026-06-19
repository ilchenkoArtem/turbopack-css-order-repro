import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Turbopack CSS order repro",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="page">
          <nav className="nav">
            <Link href="/catalog">Catalog</Link>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
