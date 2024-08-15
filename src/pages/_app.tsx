import type { AppProps } from "next/app"
import { Roboto_Flex, Roboto_Mono } from "next/font/google"
import { useRouter } from "next/router"
import { useEffect } from "react"
import "@/globals.css"
import "@/codemirror.less"
import Script from "next/script";
import Head from "next/head";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
})

const gaId = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
function handleRouteChange(url: string) {
  ; (window as any).gtag("config", gaId, { page_path: url })
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    if (!gaId) return
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${robotoFlex.style.fontFamily};
        }

        .roboto-mono {
          font-family: ${robotoMono.style.fontFamily};
        }
      `}</style>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4907197973761221" crossOrigin="anonymous"></script>
      </Head>
      {/* Google Tag Manager */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7P1N0JZ42G"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-7P1N0JZ42G');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
