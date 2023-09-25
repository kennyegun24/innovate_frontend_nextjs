import NavBar from "@/app/components/navbar/NavBar";
import { ThemeProvider } from "./context/DarkMode";
import "./globals.css";
import { Inter } from "next/font/google";
import { FollowedProvider } from "./context/FollowedContext";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Innovate Socials",
  description: "Next gen. social media application",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        <ThemeProvider>
          <FollowedProvider>
            <div className={styles.navLayoutHeader}>
              <NavBar />
            </div>
            <div>{children}</div>
          </FollowedProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
