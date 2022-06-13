import React from "react";
import { useState } from "react";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      Header
      <p>
        <NavLink to="/todos">Todos</NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:id" to="/posts/:id" exact />

        <Route path="/" component={TodoFeature} exact></Route>
        <Route path="/todos" component={TodoFeature}></Route>
        <Route path="/albums" component={AlbumFeature}></Route>
      </Switch>
    </div>
  );
}

export default App;
