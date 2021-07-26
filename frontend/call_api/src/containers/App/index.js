import React, { Component } from 'react'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import { Provider } from 'react-redux'
import configureStore from '../../redux/configureStore'
import ProductBoard from '../ProductBoard'
const store = configureStore()

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Nav />
                <Header />
                <ProductBoard />
            </Provider>
        )
    }
}

export default App;
