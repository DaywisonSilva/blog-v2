import * as React from 'react'

interface Banner {
  date: string
  imageUrl: string
  category: string
  title: string
  resume: string
  content: string
}

function Banner({ date, imageUrl, category, title, resume, content }: Banner) {
  return (
    <section className='container'>
      <div className='img-banner hidden'>
        <img src={imageUrl} alt={resume} />
      </div>
      <div className='row mt-3'>
        <h6 className='color-gray text-center'>{date}</h6>
        <h6 className='uppercase color-primary text-center'>{category}</h6>
        <a href='' className='link-title'>
          <h2 className='mt-1 text-center'>{title}</h2>
        </a>

        <p className='my-2 text-center'>{content}</p>
        <div className='flex-center'>
          <a href='#' className='link p-0'>
            Ler mais
          </a>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Banner)
