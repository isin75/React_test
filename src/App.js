import React, {useMemo, useState} from 'react';

import Counter from './components/Counter';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostsLists from './components/PostsList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/MyModal/MyModal';

function App() {

  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)
  const [posts, setPosts] = useState([
    {id: 1, title: "AvaScript", body: "BDescription"},
    {id: 2, title: "BavaScript 2", body: "DDescription"},
    {id: 3, title: "DavaScript 3", body: "Aescription"}
  ])

  const sortedPost = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPost])

  // callBack функция получает информацию из дочернего элемента, и перезаписует его, активация происходит когда отрабатывает
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const deletedPost = (post) => {
    setPosts(posts.filter((p => {
      return p.id !== post.id
    })))

  }

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Create User
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <Counter />
      {/* сортировка и выпадающий список */}
      <hr style={{margin: "15px 0"}} />
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      <PostsLists remove={deletedPost} posts={sortedAndSearchedPosts} title={"Tasks"}/>
    </div>
  );
}

export default App;
