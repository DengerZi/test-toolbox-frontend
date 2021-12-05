import { MAIN_LOAD, MAIN_SUCCESS, MAIN_ERROR, MAIN_ERROR_RESET } from '../types'

const initialState = {
  processedTexts: [],
  loading: false,
  error: false,
  errorMessage: ``
}

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case MAIN_LOAD:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: ``
      }
    case MAIN_SUCCESS:
      return {
        ...state,
        loading: false,
        processedTexts: [...state.processedTexts, action.payload]
      }
    case MAIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload
      }
    case MAIN_ERROR_RESET:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: ``
      }
    default:
      return state
  }
}
