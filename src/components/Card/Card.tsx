import * as React from 'react'
import { Link } from 'react-router-dom'

interface Card {
  date: string
  imageUrl: string
  category: string
  resume: string
  title: string
  postId: number
  content: string
}

function Card({
  date,
  imageUrl,
  category,
  title,
  resume,
  postId,
  content
}: Card) {
  return (
    <div className='grid-4 card hidden p-0'>
      <div className='thumb hidden'>
        <Link className='p-0' to={'/post/' + postId}>
          <img src={imageUrl} alt={resume} />
        </Link>
        <a href=''></a>
      </div>
      <div className='p-2'>
        <h6 className='color-gray'>{date}</h6>
        <h6 className='uppercase color-primary'>{category}</h6>
        <Link className='link p-0' to={'/post/' + postId}>
          <h4 className='mt-1'>{title}</h4>
        </Link>

        <p className='my-2'>{content}</p>
        <Link className='p-0' to={'/post/' + postId}>
          Ler mais
        </Link>
      </div>
    </div>
  )
}

export default Card
