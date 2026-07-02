import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wildan Ibransyah | Portfolio",
  description:
    "Mechatronics Engineer — Industrial Automation, IoT, Computer Vision",
  openGraph: {
    title: "Wildan Ibransyah | Portfolio",
    description:
      "Mechatronics Engineer yang membangun sistem CV & IoT dari nol",
    url: "https://www.portowildan.web.id", // Ganti dengan domain aslimu jika berbeda
    siteName: "Wildan Ibransyah Portfolio",
    images: [
      {
        url: "/og-image.png", // Pastikan file ini ada di folder public/
        width: 1200,
        height: 630,
        alt: "Wildan Ibransyah Portfolio Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var localTheme = window.localStorage.getItem('theme');
                  var sysTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (localTheme === 'dark' || (!localTheme && sysTheme)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* JSON-LD Person Schema untuk SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Wildan Ibransyah",
              jobTitle: "Mechatronics Engineer",
              url: "https://www.portowildan.web.id", // Sesuaikan domain
              sameAs: [
                "https://www.linkedin.com/in/wildanibransyah/",
                "https://github.com/wilskuyyy",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full font-sans">
        <a href="#main-content" className="skip-link">
          Lewati ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
