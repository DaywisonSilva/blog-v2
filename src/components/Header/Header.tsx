import * as React from 'react'

function Header() {
  return (
    <>
      <header className='py-1 px-2'>
        <nav>
          <div className='logo'>
            <a href='#'>
              <img src='svg/blog-logo.svg' alt='' />
            </a>
          </div>
          <ul className='menu'>
            <li>
              <a href='#' className='p-1'>
                Categorias
              </a>
            </li>
            <li>
              <a href='#' className='p-1'>
                Sobre
              </a>
            </li>
            <li>
              <a href='#' className='p-1'>
                Contato
              </a>
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
            <a href='#' className='btn'>
              Login
            </a>
          </div>
          <div className='cta-mobile mr-1'>
            <a href='#' className='link'>
              Login
            </a>
          </div>
        </div>
      </header>

      <div className='relative'>
        <div className='menu-mobile'>
          <ul className='nav-mobile'>
            <li>
              <a href='#' className='link-menu-mobile'>
                Categorias
              </a>
            </li>
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
