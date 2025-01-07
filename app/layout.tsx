import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { siteInfo } from "@/config/site-info"
import Script from "next/script";
import { CSPostHogProvider } from "@/components/posthog-provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: siteInfo.name,
    template: `%s - ${siteInfo.name}`,
  },
  metadataBase: new URL(siteInfo.url),
  description: siteInfo.description,
  keywords: [
    "Next.js",
    "Next.js 15+",
    "React",
    "framer-motion"
  ],
  authors: [
    {
      name: "shapexui",
      url: "https://shapexui.site",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteInfo.url,
    title: siteInfo.name,
    description: siteInfo.description,
    siteName: siteInfo.name,
    images: [
      {
        url: siteInfo.ogImage,
        width: 1200,
        height: 630,
        alt: siteInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteInfo.name,
    description: siteInfo.description,
    images: [siteInfo.ogImage],
    creator: "@im_yogesh88",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteInfo.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YT9RBMY143"></Script>
      <Script id="google-analytics">
        {
          `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YT9RBMY143');
          `
        }
      </Script>
      </head>
      <body
        className={`${geistSans.variable} min-h-svh bg-background font-sans antialiased`}
      >
          <ThemeProvider 
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
          >
            <div className="relative flex flex-col min-h-svh">
              {children}
            </div>
            {/* <TailwindIndicator/> */}
          </ThemeProvider>
        {/* <CSPostHogProvider>
        </CSPostHogProvider> */}
      </body>
    </html>
  );
}
