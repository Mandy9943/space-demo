import React from "react";
import styled from "styled-components";
import { ILaunches } from "../../types/launchesTypes";
import LaunchItem from "./LaunchItem";

interface IProps {
  launches: ILaunches;
}

const Launches: React.FC<IProps> = ({ launches }) => {
  return (
    <LaunchesS>
      {launches.results.map((launch: any) => (
        <LaunchItem key={launch.id} launch={launch} />
      ))}
    </LaunchesS>
  );
};

export default Launches;
const LaunchesS = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
