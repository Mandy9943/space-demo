import React from "react";
import styled from "styled-components";

const Overlay: React.FC = ({ children }) => {
  return <OverlayS>{children}</OverlayS>;
};

export default Overlay;

const OverlayS = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 5px;
  overflow: auto;
`;
