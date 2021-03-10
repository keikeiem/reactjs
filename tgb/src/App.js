import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

const App = () => {
  return (
    // <>
    //   <Route path="/" component={Home} exact={true} />
    //   <Route path="/about" component={About} />
    // </>
    <>
      <ul>
        <li>
          {
          /*
            SPA에서는 Link를 사용해서 경로이동함
            새로고침이 없는 모양
          */
          }
          <Link to="/">Go Home</Link>
        </li>
        <li>
          <Link to="/about">Go About</Link>
        </li>
        <li>
          <Link to="/info">Go Info</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true} />
      {/* 하나의 Component에 여러개의 path를 지정할 때 */}
      <Route path={['/about', '/info']} component={About} />
    </>
  );
};

export default App;