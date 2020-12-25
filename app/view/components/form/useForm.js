function reducer(state, action) {
  return {
    ...state,
    [action.type]: action.payload
  }
}

export default function useForm(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return {
    state,
    set: (key, value) => {
      dispatch(state, {type: key, payload: value})
    },
    get: (key) => {
      return state[key]
    },
    subscribe: (fn) => {

    }
  }
}