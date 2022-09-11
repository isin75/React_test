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

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    console.log(newPost)
    setPosts([...posts, newPost])
    setTitle("")
    setBody("")
  }

  return (
    <div className="App">
      <Counter />
      <form>
        {/*Котролируемый импут с двойным связыванием*/}
        <MyInput
          type="text"
          placeholder="Post title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <MyInput
          type="text"
          placeholder="Post description"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <MyButton onClick={addNewPost}>Add post</MyButton>
      </form>
      <PostsLists posts={posts} title={"Tasks"}/>
    </div>
  );
}

export default App;
