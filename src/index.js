import React from "react";
import ReactDOM from "react-dom";

import Grid from "./components/grid";

const SIZE = 20;
const App = () => <Grid size={SIZE} />;

ReactDOM.render(<App />, document.getElementById("root"));
