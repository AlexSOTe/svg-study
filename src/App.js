import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './App.css';
import components from './views/sections/index'

class App extends React.Component {
  SetPageTitle(title) {
    document.title = `SVG Study - ${title}`
    console.log(document.title)
  }
  render() {
    let nav = (
      <div className="nav">
        {components.map(v => <Link to={`/${v.name || ''}`} key={v.name}>{v.name}</Link>)}
      </div>
    )
    return (
      <div className="svgApp">
        <Router>
          <div className="navBox">{nav}</div>
          <div className="ctt">
            {components.map(v => <Route exact path={`/${v.name || ''}`} key={v.name} component={v.coms} />)}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
