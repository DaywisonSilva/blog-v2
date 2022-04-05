import React, { useEffect, useState } from 'react'

//  API
import api from '@services/api'

//  Types
interface Card {
  date: string
  category: string
  title: string
  content: string
  idUser: number
}

function MainCard({ date, category, title, content, idUser }: Card) {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    ;(async () => {
      if (idUser) {
        const { data: userData }: { data: Array<User> } = await api.get(
          `/user?id=${idUser}`
        )

        setUser(userData[0])
      }
    })()
  }, [idUser])

  return (
    <div className='py-3 bb-black'>
      <h6 className='color-gray'>{date}</h6>
      <h6 className='uppercase color-primary'>{category}</h6>
      <a href='#' className='link-title'>
        <h4 className='mt-1'>{title}</h4>
      </a>

      <p className='mt-1'>{content}</p>
      <div className='mt-2 flex-space'>
        <div className='flex-start-row'>
          <div className='profile'>
            <img
              src={user?.ImageProfile}
              className='profile-img'
              alt='image profile'
            />
          </div>
          <div className='ml-2'>
            <h6 className='color-primary'>{user?.name + '' + user?.surname}</h6>
            <h6 className='color-gray'>Author</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCard
