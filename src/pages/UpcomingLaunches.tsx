import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Launches from "../components/Launches/Launches";
import Title from "../components/Title/Title";
import { getLaunches } from "../redux/actions/LaunchesAction";
import { IApplicationState } from "../store";

const UpcomingLaunches = () => {
  const dispatch = useDispatch();
  const launches = useSelector<IApplicationState, any>(
    (state) => state.launches.launches
  );

  useEffect(() => {
    dispatch(getLaunches());
  }, [dispatch]);

  return (
    <div>
      <Title title="upcoming sapce launches" />
      <Launches launches={launches} />
    </div>
  );
};

export default UpcomingLaunches;
