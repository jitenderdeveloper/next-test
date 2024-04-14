import "./globals.css";
import "./custom.css";
import "./responsive.css";
import Providers from "./redux/providers";
import NextTopLoader from "nextjs-toploader";
import favicon from "../../public/assets/image/favicon.png";

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
        </head>
        <body>
          <NextTopLoader />
          {children}
        </body>
      </html>
    </Providers>
  );
}
