import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../context';

import { privateRoutes, publicRoutes } from '../router/routes'
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  if(isLoading) {
    return <Loader />
  }

  return (
    isAuth
      ?
      <Routes>
        {
          privateRoutes.map(rout =>
            <Route 
              path={rout.path}
              element={<rout.element />}
              key={Route.path}
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
              key={Route.path}
            />
        )}
      <Route path='/*' element={<Navigate to='/login' replace />}/>
    </Routes>
  )
}


export default AppRouter