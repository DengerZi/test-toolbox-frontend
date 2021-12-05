import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from 'redux/store'
import { Main } from 'containers'

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App
