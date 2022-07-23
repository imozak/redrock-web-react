import { css, Global } from "@emotion/react";

// 전역 스타일
const GlobalStyle = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap");

      .root {
        --main-black-bg: #231f1e;
      }

      * {
        font-family: "Urbanist", sans-serif;
        box-sizing: border-box;
        text-decoration: none;
      }

      body {
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        overflow-x: hidden;
        overflow-y: hidden;
      }

      p,
      span {
        font-size: 1rem;
      }
      .scrollbar-track {
        width: 0 !important;
      }
    `}
  />
);
export default GlobalStyle;
