import styled from "styled-components";
import { BaseButton } from "./BaseButton";

const SButton = styled(BaseButton)`
  background-color: #40514e;
`;

export const PrimaryButton = ({ children }) => {
  return <SButton>{children}</SButton>;
};
