import React, { useEffect } from "react";
import Routes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLaunches } from "./redux/actions/LaunchesAction";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLaunches());
  }, [dispatch]);

  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
