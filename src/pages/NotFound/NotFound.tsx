import * as React from 'react'

function NotFound() {
  return (
    <section className='container'>
      <div className='row flex-center'>
        <img src='/svg/blog-logo2.svg' className='icon-l' alt='logo blog' />
      </div>

      <div className='row'>
        <div className='grid-4 disappear'></div>
        <div className='grid-4'>
          <h1 className='h0 text-center color-primary'>404</h1>
          <h5 className='text-center'>Página não encontrada!</h5>
          <p className='text-center mt-1'>
            A página que você tá procurando não existe ou foi removida. Clique
            para voltar para o site.
          </p>

          <a href='' className='btn w-100 mt-3'>
            Voltar p/ home
          </a>
        </div>
        <div className='grid-4 disappear'></div>
      </div>
    </section>
  )
}

export default NotFound
