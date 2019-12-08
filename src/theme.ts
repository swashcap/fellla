export type AppThemeSpacing = 'small' | 'normal';

export type AppThemeTextSizes = 'small' | 'normal' | 'medium' | 'large';

export interface AppTheme {
  colors: {
    accent: string;
    background: string;
    disabled: string;
    text: string;
  };
  spacing: Record<AppThemeSpacing, string>;
  typography: Record<
    AppThemeTextSizes,
    {
      fontSize: string;
      fontWeight?: string | number;
      lineHeight?: string | number;
    }
  >;
}

export const theme: AppTheme = {
  colors: {
    accent: '#ec3e46',
    background: '#e7e4de',
    disabled: '#8c8a86',
    text: '#171717',
  },
  spacing: {
    normal: '1rem',
    small: '.5rem',
  },
  typography: {
    small: {
      fontSize: '87.5%',
    },
    normal: {
      fontSize: '100%',
      fontWeight: 400,
      lineHeight: 'inherit',
    },
    medium: {
      fontSize: '150%',
      fontWeight: 500,
      lineHeight: '1.2',
    },
    large: {
      fontSize: '200%',
      fontWeight: 500,
      lineHeight: '1.2',
    },
  },
};
