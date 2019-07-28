import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        src: local('Nunito Regular'), local('Nunito-Regular'),
            url('/static/fonts/nunito.woff2') format('woff2'),
            url('/static/fonts/nunito.woff') format('woff');
        font-display: optional;
    }

    @font-face {
        font-family: 'Josefin Sans';
        font-style: normal;
        font-weight: 400;
        src: local('Josefin Sans Regular'), local('JosefinSans-Regular'),
            url('/static/fonts/josefin.woff2') format('woff2'),
            url('/static/fonts/josefin.woff') format('woff');
        font-display: optional;
    }

    body {
        margin: 0;
        font-family: "Nunito", sans-serif;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`