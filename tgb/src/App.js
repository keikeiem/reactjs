import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Calculator from './components/Calculator';
import Parameter from './components/Parameter';
import URIQuery from './components/URIQuery';

const App = () => {
  const id = 'react';
  const name = 'ReactJS';
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
        <li>
          <Link to="/calculator">Go Calculator</Link>
        </li>
        <li>
          {/* 좋은 활용법이 안 떠오르는데...
          별로 좋은 방법이 아닌거 같음... */}
          <Link to={`/parameter/${id}/${name}`}>Go Parameter</Link>
        </li>
        <li>
          <Link to={`/uri_query?id=${id}&name=${name}`}>Go URIQuery</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true} />
      {/* 하나의 Component에 여러개의 path를 지정할 때 */}
      <Route path={['/about', '/info']} component={About} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/parameter/:id/:name" component={Parameter} />
      <Route path="/uri_query" component={URIQuery} />
    </>
  );
};

export default App;