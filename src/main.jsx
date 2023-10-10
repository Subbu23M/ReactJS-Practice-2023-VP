import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { App } from './Display-Products/App'
import './style/style.css'
// import { App } from './Simple-Todo-App/App'
// import { App } from './App'
// import { Provider } from 'react-redux'
// import { store } from './redux/store'
// import {App} from './About-debounce-hook/App'
// import { App } from './Debounce-Lodash/App'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>  
//   </React.StrictMode>,
// )
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>  
    </React.StrictMode>,
)