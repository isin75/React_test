import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import { privateRoutes, publicRoutes } from '../router/routes'

const AppRouter = () => {
  const isAuth = false
  return (
    isAuth
      ?
      <Routes>
        {
          privateRoutes.map(rout =>
            <Route 
              path={rout.path}
              element={<rout.element />}
            />
        )}
      <Route path='/*' element={<Navigate to='/posts' replace />}/>
    </Routes>
      :
    <Routes>
        {
          publicRoutes.map(rout =>
            <Route 
              path={rout.path}
              element={<rout.element />}
            />
        )}
      <Route path='/*' element={<Navigate to='/login' replace />}/>
    </Routes>
  )
}


export default AppRouter