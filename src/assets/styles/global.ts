import './fonts';
import './reset';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body { 
        background-color: ${(props) => props.theme.colors.darkness};
        font: ${(props) => props.theme.fonts.sizes.xs} "Poppins";
        color: ${(props) => props.theme.colors.white};
    }
`;

export default GlobalStyle;
