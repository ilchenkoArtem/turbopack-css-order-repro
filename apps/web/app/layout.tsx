import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Turbopack CSS order repro",
};

const routes = Array.from({ length: 16 }, (_, i) => `/r${i + 1}`);

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
            <Link href="/">Home</Link>
            <Link href="/catalog">Catalog</Link>
            {routes.map((r) => (
              <Link key={r} href={r}>
                {r}
              </Link>
            ))}
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
