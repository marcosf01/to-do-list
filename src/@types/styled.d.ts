import 'styled-components/native'; // Importando styled-components para React Native
import  theme  from '../theme'; // Importando o arquivo de tema

declare module 'styled-components/native' {
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType { }
}