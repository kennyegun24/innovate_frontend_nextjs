import NavBar from "@/app/components/navbar/NavBar";
import { ThemeProvider } from "./context/DarkMode";
import "./globals.css";
import { Inter } from "next/font/google";
import { FollowedProvider } from "./context/FollowedContext";
import styles from "./page.module.css";
import { HeightProvider } from "./context/HeightContext";
import { InterractionProvider } from "./context/InterractionContext";

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
          <HeightProvider>
            <InterractionProvider>
              <FollowedProvider>
                <div className={styles.appLayout}>
                  <div className={styles.navLayoutHeader}>
                    <NavBar />
                  </div>
                  <div className={styles.appLayoutChildren}>{children}</div>
                </div>
              </FollowedProvider>
            </InterractionProvider>
          </HeightProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
