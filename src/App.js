import React, {Suspense} from 'react';
import './App.css';
import Routes from './routes'
import {
  Header
} from './components';
import ScrollToTop from './ScrollToTop'

const App = (props) => {
  console.log("PROPS ", props);
  return <ScrollToTop>
      <Suspense fallback={<h1>Loading</h1>}>
        <Header />
        <Routes />
      </Suspense>
    </ScrollToTop>
}

export default App;
