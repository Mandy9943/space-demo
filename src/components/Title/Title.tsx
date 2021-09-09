import React from "react";
import styled from "styled-components";

interface IProps {
  title: string;
}

const Title: React.FC<IProps> = ({ title }) => {
  return (
    <TitleS>
      <h1>{title}</h1>
    </TitleS>
  );
};

export default Title;

const TitleS = styled.div`
  text-align: center;
  margin-bottom: 4.5rem;
  padding: 0 10px;
  h1 {
    color: var(--white);
    font-size: 3rem;
    margin: 10px 0;
    text-transform: capitalize;
  }
  @media (max-width: 600px) {
    margin-bottom: 1.5rem;
    h1 {
      font-size: 2.5rem;
    }
  }
`;
