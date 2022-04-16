import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  width: 100%;

  padding: 16px 32px;

  background: #ffe600;
`;

export const HeaderWrapper = styled.header`
  max-width: 1240px;
  width: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 32px;

  .logo {
    cursor: pointer;
  }

  .input-wrapper {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      width: 100%;
      height: 48px;

      padding: 0 16px;

      border: 1px solid #eef0f3;
      border-radius: 8px 0 0 8px;

      &::placeholder {
        font-size: 14px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.32);
      }
    }

    button {
      width: 48px;
      height: 48px;

      display: flex;
      align-items: center;
      justify-content: center;

      border: none;
      border-radius: 0 8px 8px 0;

      background-color: #eef0f3;

      cursor: pointer;

      > svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`;
