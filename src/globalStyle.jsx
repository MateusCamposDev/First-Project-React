import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin: 0; padding: 0;
    border: none;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    outline: none;
}

img {
    max-width: 100%;
    display: block;
}

html {
    font-size: 62.5%;
}

button {
    cursor: pointer;
    background: none;
}


`;

