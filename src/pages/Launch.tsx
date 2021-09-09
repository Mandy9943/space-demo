import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import MissionSection from "../components/MissionSection/MissionSection";
import PadSection from "../components/PadSection/PadSection";
import RocketSection from "../components/RocketSection/RocketSection";
import Title from "../components/Title/Title";
import WrapperLoading from "../components/WithLoader/WrapperLoading";
import { getLaunch } from "../redux/actions/LaunchesAction";
import { IApplicationState } from "../store";

const Lunch = () => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const lanuch = useSelector<IApplicationState, any>(
    (state) => state.launches.lunch
  );
  const loading = useSelector<IApplicationState, boolean>(
    (state) => state.launches.loadingLunch
  );

  useEffect(() => {
    dispatch(getLaunch(id));
  }, [id, dispatch]);
  return (
    <div>
      <WrapperLoading loading={loading}>
        {lanuch && (
          <>
            <Title title={lanuch.name} />
            <MainSectionS>
              <MissionSection mission={lanuch.mission} />
              <RocketSection rocket={lanuch.rocket.configuration} />
              <PadSection pad={lanuch.pad} />
            </MainSectionS>
          </>
        )}
      </WrapperLoading>
    </div>
  );
};

export default Lunch;

const MainSectionS = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
