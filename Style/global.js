import { createGlobalStyle } from "styled-components";


export const GlobalSTyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    .container{
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }
    html{
        font-size: 62.5%;
    }
    body{
       background-color: #202020;
       color: #fff;
    }

    h1{
        font-size: 2.6rem;
    }
    a{
        text-decoration: none;
        color: blueviolet;
        font-weight: 100;
        font-size: 1.8rem;
    }
    p{
        font-size: 2rem;
    }
    strong{
        font-size: 2rem;
    }
    li{
        list-style: none;
    }
`