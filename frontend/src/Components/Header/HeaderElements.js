import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 80px;
  transition: 0.5s;
  filter: none;
  pointer-events: auto;

  @media (max-width: 767px) {
    height: 60px;
  }
`;
