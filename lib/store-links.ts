export const STORE_LINKS = {
  appStore: "https://apps.apple.com/us/app/telefanz/id6502342600",
  playStore: "https://play.google.com/store/apps/details?id=com.newtelefanz&hl=en&gl=US",
}

export function getDeviceStoreLink(): string {
  if (typeof window === "undefined") return STORE_LINKS.appStore

  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera

  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return STORE_LINKS.appStore
  }

  // Android detection
  if (/android/i.test(userAgent)) {
    return STORE_LINKS.playStore
  }

  // Default to App Store for desktop/unknown
  return STORE_LINKS.appStore
}

export function isIOS(): boolean {
  if (typeof window === "undefined") return false
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
  return /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream
}

export function isAndroid(): boolean {
  if (typeof window === "undefined") return false
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
  return /android/i.test(userAgent)
}
