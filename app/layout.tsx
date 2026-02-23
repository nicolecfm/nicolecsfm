import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "nicolecsfm",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: "system-ui, sans-serif", maxWidth: 720, margin: "40px auto", padding: 16 }}>
        <nav style={{ display: "flex", gap: 12, marginBottom: 24 }}>
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
          <a href="/reset">Reset senha</a>
          <a href="/dashboard">Dashboard</a>
        </nav>
        {children}
      </body>
    </html>
  );
}