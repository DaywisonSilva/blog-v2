import React, { useEffect, useRef } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// Pages
import {
  Home,
  About,
  Contact,
  Login,
  Post,
  Profile,
  Search,
  NotFound
} from 'pages'

// Components
import Header from '@components/Header'
import Footer from '@components/Footer'

const AppRoutes = () => {
  const location = useLocation()
  const nodeRef = useRef()

  useEffect(() => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }, [location])

  return (
    <>
      <Header />
      <TransitionGroup component={null} appear={true}>
        <CSSTransition key={location.key} classNames='route' timeout={400}>
          <Routes location={location}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/post/:idPost' element={<Post />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/search' element={<Search />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  )
}

export default () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
