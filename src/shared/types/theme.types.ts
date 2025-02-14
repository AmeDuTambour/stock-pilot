export enum Spaces {
  xs = 4,
  sm = 8,
  s = 12,
  md = 16,
  lg = 24,
  xl = 32,
  xxl = 40,
  xxxl = 48,
  xxxxl = 56,
}

export enum Radius {
  xs = 5,
  sm = 10,
  md = 15,
  lg = 20,
  xl = 25,
}

export type Shadow = {
  shadowColor: string;
  shadowOffset: {width: number; height: number};
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
};

export type BaseColors = {
  black: string;
  white: string;
  grey100: string;
  grey200: string;
  grey300: string;
  grey400: string;
  grey500: string;
  grey600: string;
  grey700: string;
  grey800: string;
  grey900: string;
  green: string;
  orange: string;
  violet: string;
  red: string;
  yellow: string;
};

export type ThemeColors = {
  background: string;
  foreground: string;
  footer: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
};

export type Theme = {
  light: ThemeColors;
  dark: ThemeColors;
  baseColors: BaseColors;
};
