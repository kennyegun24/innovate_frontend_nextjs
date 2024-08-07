import NavBar from "@/app/components/navbar/NavBar";
import { ThemeProvider } from "./context/DarkMode";
import "./globals.css";
import { Inter } from "next/font/google";
import { FollowedProvider } from "./context/FollowedContext";
import styles from "./page.module.css";
import { HeightProvider } from "./context/HeightContext";
import { InterractionProvider } from "./context/InterractionContext";
const inter = Inter({ subsets: ["latin"] });
import AuthProvider from "./context/SessionProvider";
import { PostDetailsProvider } from "./context/PostDetailsContext";
import { LanguageProvider } from "./context/LanguageProvider";
import MessageProvider from "./context/MessageNotification";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        <LanguageProvider>
          <ThemeProvider>
            <AuthProvider>
              <HeightProvider>
                <InterractionProvider>
                  <FollowedProvider>
                    <PostDetailsProvider>
                      <MessageProvider>
                        <div className={styles.appLayout}>
                          <div className={styles.navLayoutHeader}>
                            <NavBar />
                          </div>
                          <div
                            className={`${styles.appLayoutChildren} ${styles.width85}`}
                          >
                            {children}
                          </div>
                        </div>
                      </MessageProvider>
                    </PostDetailsProvider>
                  </FollowedProvider>
                </InterractionProvider>
              </HeightProvider>
            </AuthProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
