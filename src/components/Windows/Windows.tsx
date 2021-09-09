import React from "react";
import styled from "styled-components";
interface IProps {
  start: string;
  end: string;
}

const Windows: React.FC<IProps> = ({ start, end }) => {
  const startDate = new Date(start);
  const endtDate = new Date(end);
  const options: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    hour12: "false",
  };

  return (
    <WindowsS>
      <div className="with-mt with-mb">
        <h3>Window Start : {startDate.toLocaleString("en", options)}</h3>
      </div>
      <div className="with-mb">
        <h3>Window Edns : {endtDate.toLocaleString("en", options)}</h3>
      </div>
    </WindowsS>
  );
};

export default Windows;

const WindowsS = styled.div`
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: right;
  padding: 16px;
`;
