import React from "react";
import Nav from "./Nav";
import PigTileList from './PigTileList'

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<PigTileList hogs={hogs}/>
		</div>
	);
}

export default App;
