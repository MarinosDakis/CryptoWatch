import React from "react";
import { Container} from "@material-ui/core";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

const App = () => {

    return (
      <BrowserRouter>
        <Container maxWidth="lg">
          <Sidebar />
          <Switch>
              <Route path="/" exact component={Footer} /> 
          </Switch>
        </Container>
      </BrowserRouter>
    );
}

export default App;