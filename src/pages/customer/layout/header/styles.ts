import colorConstants from "constants/colorConstants";
import styled from "styled-components";

export const Container = styled.div`
  .ant-layout-header {
    height: 64px;
    padding-inline: 50px;
    color: rgba(0, 0, 0, 0.88);
    line-height: 64px;
    background: ${colorConstants.BaseBlack};
  }
  .titleHeader {
    background-image: linear-gradient(
      to right,
      ${colorConstants.Primary500},
      ${colorConstants.Primary500} 50%,
      ${colorConstants.BaseGray} 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 12px;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
    font-size: 20px;
  }

  .titleHeader:before {
    content: "";
    background: ${colorConstants.Primary500};
    display: block;
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  .titleHeader:hover {
    background-position: 0;
  }

  .titleHeader:hover::before {
    width: 100%;
  }
`;
