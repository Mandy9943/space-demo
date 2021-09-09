import { useDispatch, useSelector } from "react-redux";
import Launches from "../components/Launches/Launches";
import Title from "../components/Title/Title";
import { setPageOffset } from "../redux/actions/LaunchesAction";
import { IApplicationState } from "../store";

const UpcomingLaunches = () => {
  const launches = useSelector<IApplicationState, any>(
    (state) => state.launches.launches
  );
  const offset = useSelector<IApplicationState, number>(
    (state) => state.launches.offset
  );

  const dispatch = useDispatch();

  const handleChangePage = (e: any, page: number) => {
    dispatch(setPageOffset(page));
  };
  const page = (offset + 10) / 10;

  return (
    <div>
      <Title title="upcoming sapce launches" />
      <Launches
        launches={launches}
        handleChangePage={handleChangePage}
        page={page}
      />
    </div>
  );
};

export default UpcomingLaunches;
