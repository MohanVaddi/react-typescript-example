import React, { createContext, useReducer } from 'react';

type AppState = typeof initialState;
type Action =
    | {
          type: 'SET_INPUT_VALUE';
          payload: number;
      }
    | { type: 'SET_INPUT_VALUE_TO_100' };
const initialState = {
    inputValue: 0,
};

const reducer = (state: AppState, action: Action) => {
    switch (action.type) {
        case 'SET_INPUT_VALUE':
            return {
                ...state,
                inputValue: action.payload,
            };
        case 'SET_INPUT_VALUE_TO_100':
            return {
                ...state,
                inputValue: 100,
            };
        default:
            return state;
    }
};

const InputValueContext = createContext<{
    state: AppState;
    dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

const InputValueProvider: React.FC = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <InputValueContext.Provider value={{ state, dispatch }}>
            {props.children} 
        </InputValueContext.Provider>
    );
};

export { InputValueContext, InputValueProvider };
