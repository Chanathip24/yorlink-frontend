export type Theme = {
  colors: {
    primary: string
    primaryForeground: string
    secondary: string
    secondaryForeground: string
    accent: string
    accentForeground: string
    background: string
    backgroundSecondary: string
    cardBackground: string
    cardForeground: string
    popOverBackground: string
    popOverForeground: string
    muted: string
    mutedForeground: string
    destructive: string
    destructiveForeground: string
    border: string
    input: string
    ring: string
    sidebar: {
      sidebarBackground: string
      sidebarForeground: string
      sidebarPrimary: string
      sidebarPrimaryForeground: string
      sidebarAccent: string
      sidebarAccentForeground: string
      sidebarBorder: string
      sidebarRing: string
    }
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    xxl: string
  }
  typography: {
    fontFamily: {
      body: string
      heading: string
      mono: string
    }
    fontSize: {
      xs: string
      sm: string
      base: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      '4xl': string
    }
    fontWeight: {
      normal: number
      medium: number
      semibold: number
      bold: number
    }
  }
  borderRadius: {
    sm: string
    md: string
    lg: string
    full: string
  }
  shadows: {
    sm: string
    md: string
    lg: string
    xl: string
  }
  breakpoints: {
    mobile: string
    tablet: string
    desktop: string
    wide: string
  }
}
