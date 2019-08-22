import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Layout } from "./components";
import { Projects, Profile } from "./pages";
import { ProjectsProvider } from "../context";

function App() {
  return (
    <ProjectsProvider>
      <Router>
        <Layout>
          <Route path="/" exact component={Projects} />
          <Route path="/profile" exact component={Profile} />
        </Layout>
      </Router>
    </ProjectsProvider>
  );
}

export default App;
