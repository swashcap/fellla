export type AppThemeTextSizes = 'small' | 'normal' | 'medium' | 'large';

export interface AppTheme {
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
