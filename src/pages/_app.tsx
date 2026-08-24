import type { AppProps } from "next/app"
import { Roboto_Flex, Roboto_Mono } from "next/font/google"
import { useRouter } from "next/router"
import { useEffect } from "react"
import "@globals.css"
import "@codemirror.less"
import "@styles/generator-tool.css"
import Head from "next/head"
import Script from "next/script"
import VeogenPopup from "@components/veogen-popup/VeogenPopup"

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
})

const gaId = process.env.NEXT_PUBLIC_GA_ID
const siteUrl = "https://randompokegen.cc"

// Keep URL variants out of search while preserving the interactive query-string
// state used by the generator tools.
const canonicalOverrides: Record<string, string> = {
  "/blog/random-shiny-pokemon-generator/":
    "/tools/random-shiny-pokemon-generator/",
}

function getCanonicalPath(asPath: string) {
  const path = asPath.split("?")[0].split("#")[0] || "/"
  if (path === "/") return "/"
  const normalized = `/${path.replace(/^\/+|\/+$/g, "")}/`
  return canonicalOverrides[normalized] ?? normalized
}

function isLowValueArchive(path: string) {
  return (
    path.startsWith("/tags/") ||
    path.startsWith("/chrome-extension/") ||
    path.startsWith("/chrome-extension-intitle-quick-search/")
  )
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
function handleRouteChange(url: string) {
  ;(window as any).gtag("config", gaId, { page_path: url })
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const canonicalPath = getCanonicalPath(router.asPath)
  const canonicalUrl = `${siteUrl}${canonicalPath}`
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
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} key="canonical" />
        {isLowValueArchive(canonicalPath) && (
          <meta name="robots" content="noindex,follow" key="robots" />
        )}

        {/* google adsense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4907197973761221"
          crossOrigin="anonymous"
        ></script>
        <meta name="google-adsense-account" content="ca-pub-4907197973761221" />

        {/* monetag ads - Native Banner (Interstitial) 8833465 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('groleegni.net',8833465,document.createElement('script'))`,
          }}
        ></script>
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

      <VeogenPopup />
      <Component {...pageProps} />
    </>
  )
}
