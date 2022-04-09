import React, { useRef } from 'react'
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
import { MainLayout } from 'layouts'

const AppRoutes = () => {
  const location = useLocation()
  const nodeRef = useRef()

  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames='route' timeout={400}>
          <Routes location={location} key={location.key}>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/login' element={<Login />} />
              <Route path='/post' element={<Post />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/search' element={<Search />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
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
