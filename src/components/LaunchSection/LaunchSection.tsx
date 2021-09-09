import React from "react";
import styled from "styled-components";

interface IProps {
  title: string;
}

const LaunchSection: React.FC<IProps> = ({ title, children }) => {
  return (
    <LaunchSectionS>
      <h2 className="heading">{title}</h2>
      <ContentS>{children}</ContentS>
    </LaunchSectionS>
  );
};

export default LaunchSection;

const LaunchSectionS = styled.div`
  margin-bottom: 100px;
  width: 100%;
  background: var(--white);
  color: var(--dark);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 2px 2px 7px var(--dark);

  .heading {
    font-size: 2.2rem;
    margin-bottom: 30px;
    color: var(--primary);
    @media (max-width: 600px) {
      font-size: 1.8rem;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

// const ContentS = styled.div`
//   border-radius: 5px;
//   /* height: 250px; */
//   padding: 10px;
//   height: 350px;
//   border: 1px solid white;
// `;
// const TitleS = styled.h2`
//   margin-bottom: 1rem;
// `;
// const ContainerS = styled.div`
//   margin-left: 10px;
// `;

const ContentS = styled.div``;
