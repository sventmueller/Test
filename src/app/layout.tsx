export const metadata = {
  title: "evo.fin – Praktische KI für den Mittelstand",
  description: "Unternehmensberatung für umsetzbare KI-Anwendungen in kleinen und mittelständischen Unternehmen.",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        {children}
      </body>
    </html>
  );
}
