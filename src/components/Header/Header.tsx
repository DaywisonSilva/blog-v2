import * as React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header className='py-1 px-2'>
        <nav>
          <div className='logo'>
            <Link to='/'>
              <img src='svg/blog-logo.svg' alt='' />
            </Link>
          </div>
          <ul className='menu'>
            <li>
              <Link to='/about' className='p-1'>
                Sobre
              </Link>
            </li>
            <li>
              <Link to='/contact' className='p-1'>
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <div className='bx'></div>
        <div className='flex-start-row'>
          <div className='search'>
            <form className='flex'>
              <input
                type='text'
                name='search'
                id=''
                placeholder='Buscar...'
                autoComplete='new-password'
              />
              <button className='btn-search'></button>
            </form>
          </div>
          <div className='cta-desktop ml-3'>
            <Link to='/login' className='btn'>
              Login
            </Link>
          </div>
          <div className='cta-mobile mr-1'>
            <Link to='/login' className='link'>
              Login
            </Link>
          </div>
        </div>
      </header>

      <div className='relative'>
        <div className='menu-mobile'>
          <ul className='nav-mobile'>
            <li>
              <a href='#' className='link-menu-mobile'>
                Sobre
              </a>
            </li>
            <li>
              <a href='#' className='link-menu-mobile'>
                Contato
              </a>
            </li>
            <li className='py-2 pl-2'>
              <form className='flex'>
                <input
                  type='text'
                  name='search'
                  id=''
                  placeholder='Buscar...'
                />
                <button className='btn-search'></button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
