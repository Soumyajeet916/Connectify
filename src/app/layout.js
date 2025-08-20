import Providers from "./components/Providers";
import "./globals.css";

export const metadata = {
  title: "Connectify",
  description: "Connect and chat with friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
