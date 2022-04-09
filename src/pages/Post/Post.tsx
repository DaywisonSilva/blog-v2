import api from '@services/api'
import React, { useState, useEffect } from 'react'

//  router
import { useParams } from 'react-router-dom'

function Post() {
  //  state
  const [post, setPost] = useState<Post>()
  const [user, setUser] = useState<User>()

  const { idPost } = useParams()

  useEffect(() => {
    ;(async () => {
      if (idPost) {
        const { data: postData }: { data: Post } = await api.get(
          '/posts/' + idPost
        )
        const { data: userData }: { data: User } = await api.get(
          '/user/' + postData.id_user
        )
        setPost(postData)
        setUser(userData)
      }
    })()
  }, [])

  return (
    <section className='container'>
      <h6 className='uppercase color-primary text-center'>{post?.category}</h6>
      <h3 className='text-center'>{post?.title}</h3>

      <div className='flex-center my-3'>
        <div className='profile'>
          <img src={user?.ImageProfile} className='profile-img' alt='user' />
        </div>
        <div className='ml-2'>
          <h6 className='color-primary'>{`${user?.name} ${user?.surname}`}</h6>
          <h6 className='color-gray'>Author</h6>
        </div>
        <p className='ml-4'>
          {post?.date} - {post?.duration}
        </p>
      </div>

      <div className='img-banner hidden'>
        <img src='/img/05.png' alt='' />
      </div>

      <div className='row my-3'>
        <h4>{post?.resume}</h4>
        <p className='mt-1'>{post?.content}</p>
      </div>

      <div className='row'>
        <div className='grid-3 disappear'></div>
        <div className='grid-6 card'>
          <div className='row'>
            <div className='grid-3 flex-center pl-1'>
              <div className='profile-big'>
                <img
                  src={user?.ImageProfile}
                  className='profile-img'
                  alt='author'
                />
              </div>
            </div>
            <div className='grid-9'>
              <h6 className='color-primary'>{`${user?.name} ${user?.surname}`}</h6>
              <h6 className='color-gray'>Author</h6>
              <p className='mt-1'>{post?.resume}</p>
            </div>
          </div>
        </div>
        <div className='grid-3 disappear'></div>
      </div>
    </section>
  )
}

export default Post
