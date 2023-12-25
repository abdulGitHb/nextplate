import config from "@/config/config.json";
import theme from "@/config/theme.json";
import NextProgressClient from "@/helpers/NextProgressClient";
import TwSizeIndicator from "@/helpers/TwSizeIndicator";
import ToastProvider from "@/lib/providers/toastProvider";
import Footer from "@/partials/Footer";
import Header from "@/partials/Header";
import Providers from "@/partials/Providers";
import "@/styles/main.scss";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // import google font css
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;

  return (
    <html suppressHydrationWarning={true} lang="en">
      <head>
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* favicon */}
        <link rel="shortcut icon" href={config.site.favicon} />
        {/* theme meta */}
        <meta name="theme-name" content="talentworkx" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />

        {/* google font css */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${pf}${
            sf ? "&family=" + sf : ""
          }&display=swap`}
          rel="stylesheet"
        />
      </head>

      
      <body className="scrollbar scrollbar-rounded-md scrollbar-thumb-[#97144d] scrollbar-track-gray-300" suppressHydrationWarning={true}>
        <NextProgressClient/>
        <TwSizeIndicator />
        <ToastProvider/>
        <Providers>
          <Header />
          <main>            
            {children}
          </main>
          <>
          <Script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "4d7329fbc3a1467a9d7c4784c4fb5f57"}'></Script>
          </>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
