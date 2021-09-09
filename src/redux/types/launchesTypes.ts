import { ILaunches } from "../../types/launchesTypes";

export enum LaunchesActionTypes {
  GET_ALL = "LauncheS/GET/ALL",
  LOADING_GET_ALL = "LauncheS/GET/ALL/LOADING",
  GET_ONE = "LauncheS/GET/ONE",
  LOADING_GET_ONE = "LauncheS/GET/ONE/LOADING",
}

export interface ILaunchesGetAllLoadingAction {
  type: LaunchesActionTypes.LOADING_GET_ALL;
  payload: boolean;
}
export interface ILaunchesGetAllAction {
  type: LaunchesActionTypes.GET_ALL;
  payload: ILaunches;
}

export interface ILaunchesGetOneLoadingAction {
  type: LaunchesActionTypes.LOADING_GET_ONE;
  payload: boolean;
}
export interface ILaunchesGetOneAction {
  type: LaunchesActionTypes.GET_ONE;
  payload: any;
}

export type LaunchesActions =
  | ILaunchesGetAllAction
  | ILaunchesGetOneAction
  | ILaunchesGetAllLoadingAction
  | ILaunchesGetOneLoadingAction;

export interface ILaunchesState {
  readonly launches: ILaunches;
  readonly lunch: any;
  readonly loadingLaunches: boolean;
  readonly loadingLunch: boolean;
}
