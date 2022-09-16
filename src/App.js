import React, {useMemo, useState} from 'react';

import Counter from './components/Counter';
import PostForm from './components/PostForm';
import PostsLists from './components/PostsList';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';

function App() {

  const [searchQuary, setSearchQuary] = useState("")

  const [selecterSort, setSelecterSort] = useState("")

  const [posts, setPosts] = useState([
    {id: 1, title: "AvaScript", body: "BDescription"},
    {id: 2, title: "BavaScript 2", body: "DDescription"},
    {id: 3, title: "DavaScript 3", body: "Aescription"}
  ])

  const sortedPost = useMemo(() => {
    if(selecterSort) {
      return [...posts].sort((a,b) => {
        return a[selecterSort].localeCompare(b[selecterSort])
      })
    }
    return posts
  }, [selecterSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(searchQuary))
  }, [searchQuary, sortedPost])

  // callBack функция получает информацию из дочернего элемента, и перезаписует его, активация происходит когда отрабатывает
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletedPost = (post) => {
    setPosts(posts.filter((p => {
      return p.id !== post.id
    })))

  }

  const sortPosts = (sort) => {
    setSelecterSort(sort)
  }

  return (
    <div className="App">
      <Counter />
      <PostForm create={createPost}/>
      {/* сортировка и выпадающий список */}
      <hr style={{margin: "15px 0"}} />
      <div>
        <MyInput 
          type="text"
          placeholder="Поиск"
          value={searchQuary}
          onChange={e => setSearchQuary(e.target.value)}
        />
        <MySelect 
          value={selecterSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            {value: "title", name: "По названию"},
            {value: "body", name: "По описанию"}
          ]}
        />
      </div>
      {/* Условная отрисовка */}
      {sortedAndSearchedPosts.length !== 0
        ? <PostsLists remove={deletedPost} posts={sortedAndSearchedPosts} title={"Tasks"}/>
        : <h1 style={{textAlign: "center"}}>
            Постов нет
          </h1>
      }
    </div>
  );
}

export default App;
