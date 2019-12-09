import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import Finder from './containers/Finder/Finder';
import Logo from './components/Logo/Logo';

const App = () => (
  <Suspense fallback={Logo}>
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={Finder} />
        </Switch>
      </Layout>
    </div>
  </Suspense>
);

export default App;
