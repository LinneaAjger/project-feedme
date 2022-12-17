import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from 'components/Login'
import Header from 'components/Header'
import RecipeFeed from 'components/RecipeFeed'
import AboutUs from 'components/AboutUs'
import Contact from 'components/Contact'
import UserPage from 'components/UserPage'
import Recipe from 'components/Recipe'
import NotFound from 'components/NotFound'
import { GlobalStyles, OuterWrapper, Innerwrapper } from 'components/styles/GlobalStyles'

export const Main = () => {
  const collapsed = useSelector((store) => store.toggle.collapsed)

  return (
    <BrowserRouter>
      <GlobalStyles />
      <OuterWrapper >
      <Innerwrapper className={collapsed ? "blurred" : "not-blurred"}>
      <Header />
        <Routes>
          <Route path={"/register"} element={
            <Login
              loginType="register"
              loginHeadline="Register here"
              buttonText="Register" />}/>
          <Route path={"/login"} element={
            <Login
              loginType="login"
              loginHeadline="Login here"
              buttonText="Sign in" />}/>          
          <Route path="/" element={<RecipeFeed />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:user-id" element={<UserPage />} />
          <Route path="/:recipe-id" element={<Recipe />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
          </Innerwrapper>    
      </OuterWrapper>
    </BrowserRouter>
  );
}