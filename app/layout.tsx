import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import './globals.css'
import AppProviders from './providers/AppProviders';
import NextTopLoader from 'nextjs-toploader';

const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Documents Universitaires",
    description:
        "Faites la gestion electronique de vos documents universitaires sans peine!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="fr">
          <body className={jost.className + " overflow-x-hidden font-light"}>
              <AppProviders
                  attribute="class"
                  defaultTheme="light"
                  forcedTheme="light"
              >
                  <NextTopLoader
                      color="#006FEE"
                      zIndex={1600}
                      showSpinner={false}
                  />
                  {children}
              </AppProviders>
          </body>
      </html>
  );
}
