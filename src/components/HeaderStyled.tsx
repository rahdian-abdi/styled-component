import styled from "styled-components";

const HeaderStyled = styled.div`
  background-color: #4f4d53;
  height: 48px;

  .header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  .header__wrapper .header__search-box {
    position: relative;
    background-color: #2d2d2d;
    padding: 6px;
    padding-left: 35px;
    width: 200px;
    border-radius: 3px;
  }
  .header__wrapper .header__search-box .header__search-box__icon {
    position: absolute;
    left: 10px;
    top: 9px;
  }
  .header__wrapper .header__search-box input {
    background-color: transparent;
    outline: none;
    border: none;
    color: #fff;
  }
  .header__wrapper .header__search-box input::placeholder {
    color: #fff;
  }
  .header__wrapper .header__search-box input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #fff;
  }
  .header__wrapper .header__search-box input::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #fff;
  }
`;

export default HeaderStyled;
