import Providers from "./components/Providers";
import { ThemeProvider } from "./context/ThemeContext"; // Import the new provider
import "./globals.css";

export const metadata = {
  title: "Connectify",
  description: "Connect and chat with friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Wrap the app with the ThemeProvider */}
        <ThemeProvider>
          {/* This is your NextAuth provider */}
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
