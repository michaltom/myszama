import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *,*::before,*::after {
        box-sizing: inherit;
    }

    body{ 
        margin: 80px 100px;
        font-family:monospace;
        display:flex;
        flex-direction:column;
        align-items: center;
    }

    button{
         padding: 0;
         cursor: pointer;
         font-family: monospace;
    }

    ul{
        padding: 0;
        margin: 0;
        list-style: none;
        a{
            color: black;
    text-decoration: none;
        }
    }
    
`

export default GlobalStyle
