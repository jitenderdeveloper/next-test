import "./globals.css";
import "./custom.css";
import Providers from "./redux/providers";

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  );
}
