import { ProSidebar, SidebarHeader } from "react-pro-sidebar";
import styled from "@emotion/styled";
import "react-pro-sidebar/dist/css/styles.css";
import { SecondaryButton } from "../Buttons";

export const Overlay = styled.div`
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(45, 46, 51, 0.65);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: flex-start;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
`;

export const StyledSidebar = styled(ProSidebar)`
  position: absolute;
  right: 0;
  top: 0;
  width: 450px;
`;

export const StyledHeader = styled(SidebarHeader)`
  background-color: var(--color-primary);
  padding: 1rem;
`;

export const CloseButton = styled.div`
  text-align: right;
  color: #2d2e33;
  font-size: ${24 / 16}rem;
  font-weight: 700;
  cursor: pointer;
`;
export const HeaderText = styled.div`
  color: #2d2e33;
  font-size: ${16 / 16}rem;
`;

export const ConnectButton = styled(SecondaryButton)`
  padding: 6px 16px;
  height: 40px;
  width: 154px;
  border: 1px solid transparent;
  margin-top: 1.25rem;
  font-size: ${14 / 16}rem;
`;
