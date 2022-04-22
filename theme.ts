import { extendTheme } from 'native-base';

const customTheme = extendTheme({});

// 2. Get the type of the CustomTheme
type CustomThemeType = typeof customTheme;

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
    interface ICustomTheme extends CustomThemeType {}
}
