const types = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
  LOCAL: 'LOCAL',
}

export const actionCreators = {
  loading: () => ({ type: types.LOADING }),
  failure: () => ({ type: types.FAILURE }),
  local: (payload) => ({ type: types.LOCAL, payload }),
  success: (item, url = "local") => ({ type: types.SUCCESS, payload: {item, url} })
}

export const initialState = {
  loading: true,
  error: false,
  item: [],
  history: {}
}

export function reducer(state, action) {
  switch (action.type) {
    case types.LOADING:
      return { ...state, loading: true, error: false }
    case types.LOCAL:
      return { loading: false, error: false, item: action.payload }
    case types.SUCCESS:
      return { loading: false, error: false, item: action.payload?.item, history: { ...state.history, [action.payload.url]: action.payload?.item }}
    case types.FAILURE:
      return { ...state, loading: false, error: true }
  }
}
