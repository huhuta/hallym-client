import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { HashRouter, Route, Switch } from 'react-router-dom';
import InferenceServiceContainer from './pages/InferenceService/InferenceServiceContainer';
import Header from './pages/Header';

export const models = ['5class', 'neoplasm', 'cancer'];

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <HashRouter>
            <Switch>
              {models.map((model) => {
                const component = () => (
                  <InferenceServiceContainer model={model} />
                );
                return (
                  <Route
                    key={model}
                    exact
                    path={`/${model}`}
                    name={model}
                    component={component}
                  />
                );
              })}
              <Route
                path="/"
                name="Home"
                component={() => (
                  <img
                    src="https://hallym.hallym.or.kr/img/common/hi.gif"
                    alt="hallym logo"
                  />
                )}
              />
            </Switch>
          </HashRouter>
        </Container>
      </div>
    );
  }
}

export default App;
