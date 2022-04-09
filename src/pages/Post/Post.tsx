import * as React from 'react'

function Post() {
  return (
    <section className='container'>
      <h6 className='uppercase color-primary text-center'>GAMES</h6>
      <h3 className='text-center'>O que tem de novo no PS5??</h3>

      <div className='flex-center my-3'>
        <div className='profile'>
          <img src='/profile/ny.jpg' className='profile-img' alt='' />
        </div>
        <div className='ml-2'>
          <h6 className='color-primary'>Násser Yousef Ali</h6>
          <h6 className='color-gray'>Author</h6>
        </div>
        <p className='ml-4'>Aug 2, 2020 - 8 min read</p>
      </div>

      <div className='img-banner hidden'>
        <img src='/img/05.png' alt='' />
      </div>

      <div className='row my-3'>
        <h4>Esse aqui é o primeiro título</h4>
        <p className='mt-1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
          pharetra ut ac, pellentesque. Ultricies habitasse pretium purus
          viverra. Sit eget volutpat semper vitae metus, fringilla ullamcorper
          sapien nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ornare urna pharetra ut ac, pellentesque. Ultricies habitasse pretium
          purus viverra. Sit eget volutpat semper vitae metus, fringilla
          ullamcorper sapien nibh.
        </p>
      </div>

      <div className='row'>
        <div className='grid-3 disappear'></div>
        <div className='grid-6 card'>
          <div className='row'>
            <div className='grid-3 flex-center pl-1'>
              <div className='profile-big'>
                <img src='/profile/ny.jpg' className='profile-img' alt='' />
              </div>
            </div>
            <div className='grid-9'>
              <h6 className='color-primary'>Násser Yousef Ali</h6>
              <h6 className='color-gray'>Author</h6>
              <p className='mt-1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque. Ultricies habitasse pretium
                purus viverra. Sit eget volutpat semper vitae metus, fringilla
                ullamcorper sapien nibh.
              </p>
            </div>
          </div>
        </div>
        <div className='grid-3 disappear'></div>
      </div>
    </section>
  )
}

export default Post
