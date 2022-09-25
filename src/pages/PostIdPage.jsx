import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching'

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
  return (
    <div>
        <h1> NEW POST </h1>
        {isLoading
            ? <Loader />
            : <div>{post.id}. {post.title}</div>
        }
        <h1>
            Comments
        </h1>
        {isCommentsLoading
            ? <Loader />
            : <div>
                {comments.map((comment) => 
                    <div style={{marginTop: 15}} key={comment.id}>
                        <h5>{comment.email}</h5>
                        <div>{comment.body}</div>
                    </div>
                )}
              </div>
        }
    </div>
  )
}

export default PostIdPage