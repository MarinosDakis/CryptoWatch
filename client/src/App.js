import React from "react";
import { Container} from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {

    return (
      <BrowserRouter>
        <Container maxWidth="lg">
          <Sidebar />
        </Container>
      </BrowserRouter>
    );
}

export default App;