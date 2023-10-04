import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{   
    --color-light:#fff;

    --color-gray-50:#fafafa;
    --color-gray-100:#f5f5f5;
    --color-gray-200:#e5e5e5;
    --color-gray-300:#d4d4d4 ;
    --color-gray-400:#a3a3a3;
    --color-gray-500:#737373;
    --color-gray-600:#525252;
    --color-gray-700:#404040;
    --color-gray-800:#262626;
    --color-gray-900:#171717;
    --color-gray-950:#0a0a0a;  

    --color-blue-600:#2563eb;

    
    --color-red-100: #fee2e2;
    --color-red-500: #ef4444;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    --color-orange-100:#ffedd5;
    --color-orange-200:#fed7aa;
    --color-orange-500:#f97316;

   
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.08);
    --shadow-md: 0px 0.6rem 2rem rgba(0, 0, 0, 0.16);
    --shadow-lg: 0 2.2rem 3rem rgba(0, 0, 0, 0.24);
  
    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

    --size-xs:0.25rem;
    --size-sm:0.5rem;
    --size-md:0.75rem;
    --size-lg:1rem;
    --size-xl:1.25rem;
    --size-2xl:1.5rem;
    --size-3xl:2rem;
    --size-4xl:4rem;
    --size-5xl:6rem;
    --size-6xl:10rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: all 0.2s;
}

body {
  color: var(--color-gray-700);
  min-height: 100vh;
  line-height: 1.5;
  font-size: var(--size-2xl);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: var(--color-orange-500);
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}
main{
  padding-bottom: var(--size-2xl);
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-gray-200);
  color: var(--color-gray-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-blue-600);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}  

img{
 object-fit: cover;
}

`;

export default GlobalStyles;
