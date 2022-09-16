import React, {useMemo, useState} from 'react';

import Counter from './components/Counter';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostsLists from './components/PostsList';

function App() {

  const [filter, setFilter] = useState({sort: "", query: ""})

  const [posts, setPosts] = useState([
    {id: 1, title: "AvaScript", body: "BDescription"},
    {id: 2, title: "BavaScript 2", body: "DDescription"},
    {id: 3, title: "DavaScript 3", body: "Aescription"}
  ])

  const sortedPost = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a,b) => {
        return a[filter.sort].localeCompare(b[filter.sort])
      })
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPost])

  // callBack функция получает информацию из дочернего элемента, и перезаписует его, активация происходит когда отрабатывает
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletedPost = (post) => {
    setPosts(posts.filter((p => {
      return p.id !== post.id
    })))

  }

  return (
    <div className="App">
      <Counter />
      <PostForm create={createPost}/>
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
