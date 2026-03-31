// // File: src/components/TermlyCMP.tsx
// 'use client'

// import { useEffect, useMemo, useRef } from 'react'
// import { usePathname, useSearchParams } from 'next/navigation'

// interface TermlyCMPProps {
//   autoBlock?: boolean
//   masterConsentsOrigin?: string
//   websiteUUID: string
// }

// declare global {
//   interface Window {
//     Termly?: {
//       initialize: () => void
//     }
//   }
// }

// const SCRIPT_SRC_BASE = 'https://app.termly.io'

// export default function TermlyCMP({ 
//   autoBlock = false, 
//   masterConsentsOrigin, 
//   websiteUUID 
// }: TermlyCMPProps) {
//   const scriptSrc = useMemo(() => {
//     const src = new URL(SCRIPT_SRC_BASE)
//     src.pathname = `/resource-blocker/${websiteUUID}`
    
//     if (autoBlock) {
//       src.searchParams.set('autoBlock', 'on')
//     }
    
//     if (masterConsentsOrigin) {
//       src.searchParams.set('masterConsentsOrigin', masterConsentsOrigin)
//     }
    
//     return src.toString()
//   }, [autoBlock, masterConsentsOrigin, websiteUUID])

//   const isScriptAdded = useRef(false)

//   useEffect(() => {
//     if (isScriptAdded.current) return

//     const script = document.createElement('script')
//     script.src = scriptSrc
//     script.async = true
//     document.head.appendChild(script)
//     isScriptAdded.current = true

//     return () => {
//       // Cleanup if component unmounts
//       if (script.parentNode) {
//         script.parentNode.removeChild(script)
//       }
//       isScriptAdded.current = false
//     }
//   }, [scriptSrc])

//   const pathname = usePathname()
//   const searchParams = useSearchParams()

//   useEffect(() => {
//     // Initialize Termly when route changes
//     if (window.Termly) {
//       window.Termly.initialize()
//     }
//   }, [pathname, searchParams])

//   return null
// }

// File: src/components/TermlyCMP.tsx
'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

interface TermlyCMPProps {
  autoBlock?: boolean
  masterConsentsOrigin?: string
  websiteUUID: string
}

declare global {
  interface Window {
    Termly?: {
      initialize: () => void
    }
    _termlyScriptLoaded?: boolean
  }
}

const SCRIPT_SRC_BASE = 'https://app.termly.io'

export default function TermlyCMP({ 
  autoBlock = false, 
  masterConsentsOrigin, 
  websiteUUID 
}: TermlyCMPProps) {
  const scriptSrc = useMemo(() => {
    const src = new URL(SCRIPT_SRC_BASE)
    src.pathname = `/resource-blocker/${websiteUUID}`
    
    if (autoBlock) {
      src.searchParams.set('autoBlock', 'on')
    }
    
    if (masterConsentsOrigin) {
      src.searchParams.set('masterConsentsOrigin', masterConsentsOrigin)
    }
    
    return src.toString()
  }, [autoBlock, masterConsentsOrigin, websiteUUID])

  const [isTermlyReady, setIsTermlyReady] = useState(false)

  useEffect(() => {
    // Check if script is already loaded globally
    if (window._termlyScriptLoaded) {
      console.log('Termly script already loaded globally')
      if (window.Termly && typeof window.Termly.initialize === 'function') {
        setIsTermlyReady(true)
      }
      return
    }

    // Check if script already exists in DOM
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`)
    if (existingScript) {
      console.log('Termly script already exists in DOM')
      if (window.Termly && typeof window.Termly.initialize === 'function') {
        setIsTermlyReady(true)
      }
      return
    }

    const script = document.createElement('script')
    script.src = scriptSrc
    script.async = true
    
    script.onload = () => {
      window._termlyScriptLoaded = true
      const checkTermly = () => {
        if (window.Termly && typeof window.Termly.initialize === 'function') {
          setIsTermlyReady(true)
          console.log('Termly script loaded successfully')
        } else {
          setTimeout(checkTermly, 100)
        }
      }
      checkTermly()
    }

    script.onerror = () => {
      console.error('Failed to load Termly script')
    }

    document.head.appendChild(script)

    return () => {
      // Don't remove the script on unmount as it's needed globally
      // Just clean up our state
      setIsTermlyReady(false)
    }
  }, [scriptSrc])

  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (isTermlyReady && window.Termly) {
      try {
        window.Termly.initialize()
        console.log('Termly initialized')
      } catch (error) {
        console.error('Error initializing Termly:', error)
      }
    }
  }, [isTermlyReady, pathname, searchParams])

  return null
}
