import "./globals.css";

export const metadata = {
  title: "Skillify",
  description: "Your Skills. Your Journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}