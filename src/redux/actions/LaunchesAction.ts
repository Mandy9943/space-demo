import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import LunchServices from "../../api/services/LunchServices";
import { ILaunches } from "../../types/launchesTypes";

import {
  ILaunchesGetAllAction,
  ILaunchesGetAllLoadingAction,
  ILaunchesGetOneAction,
  ILaunchesGetOneLoadingAction,
  ILaunchesState,
  LaunchesActionTypes,
} from "../types/launchesTypes";

/* Actions */

const loadingLaunches: ActionCreator<ILaunchesGetAllLoadingAction> = (
  loading: boolean
) => {
  return {
    type: LaunchesActionTypes.LOADING_GET_ALL,
    payload: loading,
  };
};

export const getLaunches: ActionCreator<
  ThunkAction<Promise<AnyAction>, ILaunchesState, null, ILaunchesGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingLaunches(true));
    const launchesServices = new LunchServices();

    let launches: ILaunches = {
      count: 0,
      next: null,
      previous: null,
      results: [],
    };

    await launchesServices
      .getAllUpcoming()
      .then((res: any) => {
        launches = res;
      })
      .catch((err) => {
        console.log(err);
      });

    return dispatch({
      payload: launches,
      type: LaunchesActionTypes.GET_ALL,
    });
  };
};
const loadingLaunch: ActionCreator<ILaunchesGetOneLoadingAction> = (
  loading: boolean
) => {
  return {
    type: LaunchesActionTypes.LOADING_GET_ONE,
    payload: loading,
  };
};

export const getLaunch: ActionCreator<
  ThunkAction<Promise<AnyAction>, ILaunchesState, string, ILaunchesGetOneAction>
> = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingLaunch(true));
    const launchesServices = new LunchServices();

    let launches: any = null;

    await launchesServices
      .getOneLunch(id)
      .then((res: any) => {
        launches = res;
      })
      .catch((err) => {
        console.log(err);
      });

    return dispatch({
      payload: launches,
      type: LaunchesActionTypes.GET_ONE,
    });
  };
};
