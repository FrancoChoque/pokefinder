import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import PokemonTable from './pages/PokemonTable/PokemonTable';
import Pokemon from './pages/Pokemon/Pokemon';
import Finder from './pages/Finder/Finder';

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={PokemonTable} />
            <Route path="/finder" exact component={Finder} />
            <Route path="/pokemon/:pokemon" exact component={Pokemon} />
          </Switch>
        </Layout>
      </div>
    </Suspense>
  );
}

export default App;
