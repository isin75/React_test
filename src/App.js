import React, {useRef, useState} from 'react';

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

  const [title, setTitle] = useState("Title")
  const bodyRef = useRef()

  const addNewPost = (e) => {
    // отмена стандартой работы браузера
    e.preventDefault()
    console.log(title)
    console.log(bodyRef.current.value)
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
        {/*Неконтролируемый инпут через хук useRef(), не стоит использовать, нужно передать также ссылку на сам компонент как props, но также обернуть компонент в этот хук */}
        <MyInput
          type="text"
          placeholder="Post description"
          ref={bodyRef}
        />
        <MyButton onClick={addNewPost}>Add post</MyButton>
      </form>
      <PostsLists posts={posts} title={"Tasks"}/>
    </div>
  );
}

export default App;
