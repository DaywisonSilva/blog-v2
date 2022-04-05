import * as React from 'react'

interface Card {
  date: string
  imageUrl: string
  category: string
  resume: string
  title: string
  content: string
}

function Card({ date, imageUrl, category, title, resume, content }: Card) {
  return (
    <div className='grid-4 card hidden p-0'>
      <div className='thumb hidden'>
        <a href='' className='p-0'>
          <img src={imageUrl} alt={resume} />
        </a>
      </div>
      <div className='p-2'>
        <h6 className='color-gray'>{date}</h6>
        <h6 className='uppercase color-primary'>{category}</h6>
        <a href='' className='link-title'>
          <h4 className='mt-1'>{title}</h4>
        </a>

        <p className='my-2'>{content}</p>
        <a href='' className='link p-0'>
          Ler mais
        </a>
      </div>
    </div>
  )
}

export default Card
