import "./globals.css";
import "./custom.css";
import Providers from "./redux/providers";
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body>
        <NextTopLoader />
        {children}
        </body>
      </html>
    </Providers>
  );
}
