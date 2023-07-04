import { createGlobalStyle } from 'styled-components';
import NotoSansKR from '../fonts/NotoSansKR-Medium.otf';

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Noto Sans KR';
    src: local("Noto Sans KR"),url(${NotoSansKR}) format('woff');
    font-weight: normal;
    font-style: normal;
}

    body {
        font-family: 'Noto Sans KR';
    }

    ul, ol ,li{
        list-style: none;
    }
    a{
        text-decoration:none;
    }
`;

export default GlobalStyle;
