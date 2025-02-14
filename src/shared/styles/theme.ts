export enum Spaces {
  '2xs' = 4,
  'xs' = 8,
  'sm' = 12,
  'md' = 16,
  'lg' = 24,
  'xl' = 32,
  '2xl' = 40,
  '3xl' = 48,
  '4xl' = 56,
}

export enum Radius {
  'xs' = 5,
  'sm' = 10,
  'md' = 15,
  'lg' = 20,
  'xl' = 25,
}

export const shadows = {
  shadowColor: '#051701',
  shadowOffset: {width: 0, height: Spaces.xs},
  shadowOpacity: 0.8,
  shadowRadius: Radius.lg,
  elevation: 8,
};

export const BaseColors = {
  black: '#000000',
  white: '#FFFFFF',
  grey100: '#F5F5F5',
  grey200: '#EEEEEE',
  grey300: '#E0E0E0',
  grey400: '#BDBDBD',
  grey500: '#9E9E9E',
  grey600: '#757575',
  grey700: '#616161',
  grey800: '#424242',
  grey900: '#212121',
  green: '#13C0A6',
  orange: '#FA9E33',
  violet: '#C6BAFF',
  red: '#FF6B6B',
  yellow: '#FFD700',
};

const lightTheme = {
  background: '#FFFDEB',
  foreground: '#051701',
  footer: '#DDEAD8',
  card: '#FFFDEB',
  cardForeground: '#0A0E19',
  popover: '#FFFDEB',
  popoverForeground: '#051701',
  primary: '#0A1F06',
  primaryForeground: '#FFFDEB',
  secondary: '#DDEAD8',
  secondaryForeground: '#051701',
  muted: '#F0F4F9',
  mutedForeground: '#76818E',
  accent: '#DDEAD8',
  accentForeground: '#131A28',
  destructive: '#F43F5E',
  destructiveForeground: '#F9FAFB',
  border: '#DDEAD8',
  input: '#DDEAD8',
  ring: '#0A0E19',
};

const darkTheme = {
  background: '#051701',
  foreground: '#FFFDEB',
  footer: '#0F120E',
  card: '#0F120E',
  cardForeground: '#F9FAFB',
  popover: '#051701',
  popoverForeground: '#FFFDEB',
  primary: '#F9FAFB',
  primaryForeground: '#051701',
  secondary: '#DDEAD8',
  secondaryForeground: '#051701',
  muted: '#2C2F38',
  mutedForeground: '#A0AEC0',
  accent: '#1A1D19',
  accentForeground: '#F9FAFB',
  destructive: '#912A3A',
  destructiveForeground: '#F9FAFB',
  border: '#1A1D19',
  input: '#1A1D19',
  ring: '#FFFDEB',
};

export const Colors = {
  light: lightTheme,
  dark: darkTheme,
};
