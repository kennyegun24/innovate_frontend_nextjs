import NavBar from "@/app/components/navbar/NavBar";
import { ThemeProvider } from "./context/DarkMode";
import "./globals.css";
import { Inter } from "next/font/google";
import { FollowedProvider } from "./context/FollowedContext";
import styles from "./page.module.css";
import { HeightProvider } from "./context/HeightContext";
import { InterractionProvider } from "./context/InterractionContext";
import { authState } from "./utils/session";
import { headers } from "next/headers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://innovate-frontend-nextjs.vercel.app"),
  title: {
    default: "Innovate Socials",
    template: `%s | Innovate Socials`,
  },
  twitter: {
    title: {
      default: "Innovate Socials",
      template: `%s | Innovate Socials`,
    },
    description: "Next generation social media application",
  },
  description: "Next generation social media application",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

const no_nav_links = ["/", "/about", "/about_creator", "/login", "/register"];

export default function RootLayout({ children }) {
  const headersList = headers();
  const pathname = headersList.get("x-url") || "";
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        <ThemeProvider>
          <HeightProvider>
            <InterractionProvider>
              <FollowedProvider>
                <div className={styles.appLayout}>
                  {!no_nav_links.includes(pathname) && (
                    <div className={styles.navLayoutHeader}>
                      <NavBar />
                    </div>
                  )}
                  <div
                    className={`${
                      !authState ? styles.width100 : styles.width85
                    } ${styles.appLayoutChildren}`}
                  >
                    {children}
                  </div>
                </div>
              </FollowedProvider>
            </InterractionProvider>
          </HeightProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
