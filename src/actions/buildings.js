import * as actionTypes from './actionTypes'

export function addBuilding(address) {
  return {
    type: actionTypes.CREATE_BUILDING,
    address,
    date: Date.now(),
  }
}

export function editBuilding(id, address) {
  return {
    type: actionTypes.EDIT_BUILDING,
    id,
    address,
    date: Date.now(),
  }
}

export function deleteBuliding(id) {
  return {
    type: actionTypes.DELETE_BUILDING,
    id,
  }
}
