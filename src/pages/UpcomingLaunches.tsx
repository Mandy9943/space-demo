import { useSelector } from "react-redux";
import Launches from "../components/Launches/Launches";
import Title from "../components/Title/Title";
import { IApplicationState } from "../store";

const UpcomingLaunches = () => {
  const launches = useSelector<IApplicationState, any>(
    (state) => state.launches.launches
  );

  return (
    <div>
      <Title title="upcoming sapce launches" />
      <Launches launches={launches} />
    </div>
  );
};

export default UpcomingLaunches;
