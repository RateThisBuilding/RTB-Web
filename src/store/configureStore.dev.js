import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from '../reducers'

const configureStore = (initialState) => {
  const store = createStore(
    rootReducers,
    initialState,

  )
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = rootReducer
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStore
