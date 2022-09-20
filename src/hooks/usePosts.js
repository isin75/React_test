import { useMemo } from "react"

export const useSortedPosts = (posts, sort) => {
    const sortedPost = useMemo(() => {
        if(sort) {
          return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
        return posts
      }, [sort, posts])
    return sortedPost
}

export const usePosts = (posts, soret, query) => {
    const sortedPost = useSortedPosts(posts, soret)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(query))
      }, [query, sortedPost])
    return sortedAndSearchedPosts
}