import React, {useState} from 'react';

import Counter from './components/Counter';
import PostForm from './components/PostForm';
import PostsLists from './components/PostsList';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", body: "Description"},
    {id: 2, title: "JavaScript 2", body: "Description"},
    {id: 3, title: "JavaScript 3", body: "Description"}
  ])
  // callBack функция получает информацию из дочернего элемента, и перезаписует его, активация происходит когда отрабатывает
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <Counter />
      <PostForm create={createPost}/>
      <PostsLists posts={posts} title={"Tasks"}/>
    </div>
  );
}

export default App;
