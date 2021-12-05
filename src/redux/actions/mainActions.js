import API from 'config/api'
import { MAIN_LOAD, MAIN_SUCCESS, MAIN_ERROR, MAIN_ERROR_RESET } from '../types'

export function processTextAction(text) {
  return async (dispatch) => {
    dispatch({
      type: MAIN_LOAD
    })
    try {
      const response = await API.processText(text)
      dispatch({
        type: MAIN_SUCCESS,
        payload: response
      })
    } catch (error) {
      dispatch({
        type: MAIN_ERROR,
        payload: error
      })
    }
  }
}

export function resetErrorMainAction() {
  return (dispatch) => dispatch({ type: MAIN_ERROR_RESET })
}
