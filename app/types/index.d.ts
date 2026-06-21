import { OverlayScrollbars } from "overlayscrollbars"

declare global {
  interface Window {
    turnstile: {
      remove: (e: Element | string) => void
      render: (
        e: Element | string,
        callback?: {
          callback: (token: string) => void
        }
      ) => string
      reset: (e: Element | string) => void
    }
    turnstileId: string | null
    osInstance?: OverlayScrollbars | null
  }
}

export {}
