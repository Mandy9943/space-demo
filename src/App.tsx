import React, { useEffect } from "react";
import Routes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLaunches } from "./redux/actions/LaunchesAction";
import { IApplicationState } from "./store";

const App = () => {
  const offset = useSelector<IApplicationState, number>(
    (state) => state.launches.offset
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (offset < 1) {
      dispatch(getLaunches());
    } else {
      dispatch(getLaunches(`?offset=${offset}`));
    }
    console.log("offset", offset);
  }, [dispatch, offset]);

  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
