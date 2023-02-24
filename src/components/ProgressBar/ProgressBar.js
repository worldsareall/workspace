/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--borderRadius": "4px",
    "--padding": "0px",
    "--height": "8px",
  },
  medium: {
    "--borderRadius": "4px",
    "--padding": "0px",
    "--height": "12px",
  },
  large: {
    "--borderRadius": "8px",
    "--padding": "4px",
    "--height": "24px",
  },
};

const ProgressBar = ({ size, value }) => {
  const styles = SIZES[size];
  return (
    <Progress
      style={styles}
      role="progressbar"
      value={value}
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Progress>
  );
};

const Progress = styled.div`
  width: 370px;
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  position: relative;
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;

  &::after {
    background-color: ${COLORS.primary};
    content: "";
    width: ${(props) => props.value}%;
    position: absolute;
    bottom: var(--padding);
    top: var(--padding);
    left: var(--padding);
    border-radius: 4px 0px 0px 4px;
  }
`;

export default ProgressBar;
