import React, {useState} from "react";

import Counter from "./components/Counter";
import PostItem from "./components/PostItem";

function App() {
  const [value, setValue] = useState('Write there')

  return (
    <div className="App">
      <Counter />
      <PostItem post={{id: 1, title: "JavaScript", body: "Description"}}/>
    </div>
  );
}

export default App;
