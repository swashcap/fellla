import { useContext } from 'preact/hooks';
import { ThemeContext } from 'preact-fela';
import { AppTheme } from '../theme';

export const useTheme = () => useContext<AppTheme>(ThemeContext);
