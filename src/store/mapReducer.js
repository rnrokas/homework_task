import * as actions from './actionTypes';

const initialState = {
  coords: [],
  distance: 0,
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_COORDINATES:
      return {
        ...state,
        coords: [...state.coords, action.coords],
      };
    case actions.CALC_DISTANCE:
      console.log(action.distance);
      return {
        ...state,
        distance: (state.distance += action.distance),
      };
    default:
      return state;
  }
};
export default mapReducer;
