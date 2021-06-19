import React, { Suspense } from 'react';
import { Route } from 'react-router';
import Header from '@Components/Layout/Header/Header';
import Home from '@Containers/Home/Home';
import OpenPost from '@Containers/OpenPost/OpenPost';

const AddPost = React.lazy(() => import('@Containers/Add/Add'));

function App() {
  return (
    <div className="app">
      <Header />
      <Route path="/" exact component={Home} />
      <Route
        path="/add"
        render={() => (
          <Suspense fallback={<div>Download...</div>}>
            <AddPost />
          </Suspense>
        )}
      />
      <Route path="/post/:id" component={OpenPost} />
    </div>
  );
}

export default App;
