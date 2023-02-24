import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--iconSize": "14px",
  },
  large: {
    "--iconSize": "16px",
  },
};
const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon id={icon} size="24" strokeWidth="2"></Icon>
      </IconWrapper>
      <Input placeholder="Search"></Input>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const IconWrapper = styled.div`
  position: absolute;
  top: auto;
  bottom: auto;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid black;
  padding-left: 20px;
  color: ${COLORS.gray700};
  font-weight: bold;
  height: 36px;
  font-size: 18px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }
  &:focus {
    outline-offset: 2px;
  }
`;

export default IconInput;
