import React, {useState} from 'react';

import Counter from './components/Counter';
import PostsLists from './components/PostsList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", body: "Description"},
    {id: 2, title: "JavaScript 2", body: "Description"},
    {id: 3, title: "JavaScript 3", body: "Description"}
  ])

  return (
    <div className="App">
      <Counter />
      <form>
        <MyInput type="text" placeholder="Post title" />
        <MyInput type="text" placeholder="Post description" />
        <MyButton disabled>Add post</MyButton>
      </form>
      <PostsLists posts={posts} title={"Tasks"}/>
    </div>
  );
}

export default App;
