import React, {useEffect, useState} from 'react';
import PostService from './API/PostService';

import Counter from './components/Counter';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostsLists from './components/PostsList';
import MyButton from './components/UI/button/MyButton';
import Loader from './components/UI/Loader/Loader';
import MyModal from './components/UI/MyModal/MyModal';
import { useFetching } from './hooks/useFetching';
import { usePosts } from './hooks/usePosts';
import { getPageCount, getPagesArray } from './utils/pages'

function App() {

  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)
  const [posts, setPosts] = useState([])
  const [totalPage, setTotalPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  let pagesArray = getPagesArray(totalPage)

  const [fetchPost, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers["x-total-count"]
    setTotalPage(getPageCount(totalCount, limit))
  })

  const changePage = (page) => {
    setPage(page)
    fetchPost()
  }

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

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div className="App">
      <button onClick={fetchPost}>Get User</button>
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
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }
      {isPostsLoading
        ? <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}><Loader /></div>
        : <PostsLists remove={deletedPost} posts={sortedAndSearchedPosts} title={"Tasks"}/>
      }
      <div className="page__wrapper">
        {pagesArray.map(p => 
          <span 
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? "page page__current" : "page"}
            >
            {p}
          </span> 
        )}
      </div> 
    </div>
  );
}

export default App;
