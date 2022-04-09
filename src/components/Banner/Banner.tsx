import * as React from 'react'

//  router
import { Link } from 'react-router-dom'

interface Banner {
  date: string
  imageUrl: string
  category: string
  title: string
  resume: string
  postId: number
  content: string
}

function Banner({
  date,
  imageUrl,
  category,
  title,
  resume,
  postId,
  content
}: Banner) {
  return (
    <section className='container'>
      <Link to={'/post/' + postId} className='img-banner hidden'>
        <img src={imageUrl} alt={resume} />
      </Link>

      <div className='row mt-3'>
        <h6 className='color-gray text-center'>{date}</h6>
        <h6 className='uppercase color-primary text-center'>{category}</h6>
        <Link to={'/post/' + postId} className='link-title'>
          <h2 className='mt-1 text-center'>{title}</h2>
        </Link>

        <p className='my-2 text-center'>{content}</p>
        <div className='flex-center'>
          <Link to={'/post/' + postId} className='link p-0'>
            Ler mais
          </Link>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Banner)
