import Immutable from 'immutable'
import * as actionTypes from '../actions/actionTypes'

const defaultState = new Immutable.List()

export default function buildingsReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CREATE_BUILDING:
      return state.concat(action.address)
    case actionTypes.EDIT_BUILDING:
      return state.set(action.id, action.address)
    case actionTypes.DELETE_BUILDING:
      return state.delete(action.id)
    default:
      return state
  }
}
