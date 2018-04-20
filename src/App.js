import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css';

import store from './store/configureStore'

import { Navbar, Content } from './components'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar /><br />
              <Switch>
                <Route exact path="/tasks" component={Content} />
              </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
