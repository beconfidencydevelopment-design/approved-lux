import { GeistSans } from "geist/font/sans";
import { Inter, Archivo_Black } from "next/font/google";
import Script from "next/script";
import type React from "react";
import ClientWrapper from "./ClientWrapper";
import "./globals.css";
import FacebookPixel from "@/components/facebook-pixel";
import TermlyCMP from "@/components/TermlyConsent";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-archivo-black",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const WEBSITE_UUID = "a49eec4f-dc60-4345-b485-3c806d054ecd"; // Replace with your Termly website UUID
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivoBlack.variable} ${GeistSans.variable} antialiased`}
    >
      <head>
        <Script
          id="impact-universal-tag"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(a,b,c,d,e,f,g){e['ire_o']=c;e[c]=e[c]||function(){(e[c].a=e[c].a||[]).push(arguments)};f=d.createElement(b);g=d.getElementsByTagName(b)[0];f.async=1;f.src=a;g.parentNode.insertBefore(f,g);})('https://utt.impactcdn.com/A6477190-e994-4812-b281-2b613f0e188b1.js','script','ire',document,window);`,
          }}
        />
        <script
          async
          src="https://tag.pearldiver.io/ldc.js?pid=61672d7dce0af947afcce69b373d23c4&aid=16de03f2"
        ></script>

        {/* IRE Impact Radius Tracking Script */}
        <Script
          id="impact-radius-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){ 
                var ire=window.ire=window.ire||[]; 
                ire.methods=["identify","track","trackConversion","trackLink"]; 
                ire.factory=function(method){ 
                  return function(){ 
                    var args=Array.prototype.slice.call(arguments); 
                    args.unshift(method); 
                    ire.push(args); 
                    return ire; 
                  }; 
                }; 
                for(var i=0;i<ire.methods.length;i++){ 
                  var key=ire.methods[i]; 
                  ire[key]=ire.factory(key); 
                } 
                ire.load=function(config){ 
                  var script=document.createElement("script"); 
                  script.type="text/javascript"; 
                  script.async=true; 
                  script.src=("https:"===document.location.protocol?"https:":"http:")+"//cdn.impactradius.com/scripts/invite.min.js"; 
                  var first=document.getElementsByTagName("script")[0]; 
                  script.onload=function(){ 
                    ire.invoke(["init",config]); 
                  }; 
                  first.parentNode.insertBefore(script,first); 
                }; 
                ire.load({ 
                  campaignId: "YOUR_CAMPAIGN_ID", // Replace with your actual campaign ID
                  templateId: "YOUR_TEMPLATE_ID"  // Replace with your template ID
                }); 
              })();
            `,
          }}
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KSFD9SVG');
            `,
          }}
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KSFD9SVG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ClientWrapper>
          <TermlyCMP
            websiteUUID={WEBSITE_UUID}
            autoBlock={true} // Optional: set to true if you want auto-blocking
            // masterConsentsOrigin="your-origin" // Optional: if using master consents
          />
          {children}
        </ClientWrapper>
        <FacebookPixel />
      </body>
    </html>
  );
}

export const metadata = {
  generator: "v0.app",
  title: "Approved - Travel Experiences",
  description: "Discover amazing travel experiences with Approved",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};
