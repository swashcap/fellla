import { useReducer, Reducer } from 'preact/hooks';

const getId = (() => {
  let id = 0;
  return () => (id++).toString();
})();

interface ListAddItemAction {
  payload: ListItem;
  type: 'LIST_ADD_ITEM';
}

interface ListRemoveItemAction {
  payload: string;
  type: 'LIST_REMOVE_ITEM';
}

interface ListSetCompleteItemAction {
  payload: {
    id: string;
    value: boolean;
  };
  type: 'LIST_SET_COMPLETE_ITEM';
}

export interface ListItem {
  isComplete: boolean;
  text: string;
}

export type ListActions =
  | ListAddItemAction
  | ListRemoveItemAction
  | ListSetCompleteItemAction;

export type ListState = Record<string, ListItem>;

const reducer: Reducer<ListState, ListActions> = (state, action) => {
  if (action.type === 'LIST_ADD_ITEM') {
    return {
      ...state,
      [getId()]: action.payload,
    };
  } else if (action.type === 'LIST_REMOVE_ITEM') {
    return Object.keys(state).reduce<ListState>(
      (newState, id) =>
        id === action.payload ? newState : { ...newState, [id]: state[id] },
      {}
    );
  } else if (action.type === 'LIST_SET_COMPLETE_ITEM') {
    return Object.keys(state).reduce<ListState>(
      (newState, id) => ({
        ...newState,
        [id]:
          id === action.payload.id
            ? { ...state[id], isComplete: action.payload.value }
            : state[id],
      }),
      {}
    );
  }

  return state;
};

export const useList = (initialState: ListItem[] = []) =>
  useReducer<ListState, ListActions>(
    reducer,
    initialState.reduce<ListState>(
      (memo, listItem) => ({
        ...memo,
        [getId()]: listItem,
      }),
      {}
    )
  );
