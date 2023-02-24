import React from "react";
import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS } from "../../constants";
import Icon from "../Icon";

import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const icon = Icon.ChevronDown;
  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {value}
        <IconWrapper>
          <Icon id="chevron-down" size="16" strokeWidth="2" />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 43px;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  left: 0px;
  height: 100%;
  width: min-content;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  background-color: ${COLORS.gray50};
  // background: ${Icon.ChevronDown} no-repeat right #fff;
  color: ${COLORS.gray700};
  padding: 10px 50px 10px 14px;
  font-size: 12px;
  line-height: 19px;
  border-radius: 8px;
  text-transform: capitalize;

  ${NativeSelect}:focus + & {
    outline: 5px auto black;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 16px;
`;

export default Select;

// // background-color: ${COLORS.gray50};
// background: ${Icon.ChevronDown} no-repeat right #fff;
// color: ${COLORS.gray700};
// padding: 12px 52px 12px 16px;
// font-size: 12px;
// line-height: 19px;
// border: 0px;
// border-radius: 8px;
// appearance: none;
