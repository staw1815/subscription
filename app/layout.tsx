import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Inscription Unité Sainte-Anne",
  description: "Unité Guides et Scouts de Waterloo Sainte-Anne",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col">
            <div className="">
              <nav className="w-full flex  border-b border-b-foreground/10 h-20">
                <div className="w-full flex justify-between items-center px-5">
                  <img
                    src="/images/UniteSaintAnne-Logo-vA.png" // Chemin relatif vers l'image dans le dossier public
                    alt="Logo"
                    className="m-2 w-12 h-18" // Utilisation de Tailwind pour définir la largeur et la hauteur
                  />
                  <div className="hidden md:block font-semibold text-3xl">
                    <Link href={"/"}>SAINTE-ANNE WATERLOO</Link>
                  </div>
                  {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                </div>
              </nav>
              <div className="flex ml-5 items-center">{children}</div>
              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-5 py-5">
              <img
                    src="/images/UniteSaintAnne-Logo-vA.png" // Chemin relatif vers l'image dans le dossier public
                    alt="Logo"
                    className="m-2 w-20 h-20" // Utilisation de Tailwind pour définir la largeur et la hauteur
                  />
                <p className="text-xl font-semibold"> Unité Sainte-Anne Waterloo</p>
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
