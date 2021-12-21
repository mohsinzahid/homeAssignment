import * as TYPES from '../../types';

const initialState = {
  initial: false,
  recipes: {},
  categories: {},
  isLoading: false,
};

const data = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.INITIALIZE_DATABASE_SUCCESS:
      return {
        ...state,
        initial: true,
      };
    case TYPES.GET_RECIPES:
      return {
        ...state,
        isLoading: true,
      };

    case TYPES.GET_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: actions.data.recipes,
        categories: actions.data.categories,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default data;
