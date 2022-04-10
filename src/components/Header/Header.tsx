import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  //  state
  const [show, setShow] = useState(false)

  const navigate = useNavigate()
  const refInputDesktop = useRef<HTMLInputElement>(null)
  const refInputMobile = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (window.innerWidth > 960) {
      navigate('search/' + refInputDesktop.current?.value)
    } else {
      setShow(false)
      navigate('search/' + refInputMobile.current?.value)
    }
  }

  return (
    <>
      <header className='py-1 px-2'>
        <nav>
          <div className='logo'>
            <Link to='/'>
              <img src='/svg/blog-logo.svg' alt='' />
            </Link>
          </div>
          <ul className='menu'>
            <li>
              <Link to='/' className='p-1'>
                Início
              </Link>
            </li>
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
        <div
          className={`bx ${show ? 'activebx' : ''}`}
          onClick={() => setShow(!show)}
        ></div>
        <div className='flex-start-row'>
          <div className='search'>
            <form className='flex' onSubmit={(e) => handleSubmit(e)}>
              <input
                type='text'
                name='search'
                placeholder='Buscar...'
                autoComplete='new-password'
                ref={refInputDesktop}
              />
              <button className='btn-search' type='submit'></button>
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
        <div className={`menu-mobile ${show ? 'showmenu' : ''}`}>
          <ul className='nav-mobile'>
            <li>
              <Link
                to='/'
                className='link-menu-mobile'
                onClick={() => setShow(!show)}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='link-menu-mobile'
                onClick={() => setShow(!show)}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='link-menu-mobile'
                onClick={() => setShow(!show)}
              >
                Contato
              </Link>
            </li>
            <li className='py-2 pl-2'>
              <form className='flex' onSubmit={(e) => handleSubmit(e)}>
                <input
                  type='text'
                  name='search'
                  placeholder='Buscar...'
                  ref={refInputMobile}
                />
                <button className='btn-search' type='submit'></button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default React.memo(Header)
