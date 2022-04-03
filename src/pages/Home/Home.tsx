import * as React from 'react'

//  Components
import Hero from '@components/Hero'
import MainCard from '@components/MainCard'
import Card from '@components/Card'
import Banner from '@components/Banner'

//  API
import api from '@services/api'
import axios from 'axios'

// Hooks
import { useState, useEffect } from 'react'

function Home() {
  const [main, setMain] = useState<Array<Post>>([])
  const [mostSeen, setMostSeen] = useState([])
  const [banner, setBanner] = useState<Post>()

  const endpoints = [
    'posts?star=5&_limit=2&_order=desc',
    'posts?sort=date&_order=desc&_limit=1'
  ]

  useEffect(() => {
    ;(async () => {
      const [{ data: mainData }, { data: bannerData }]: Array<{
        data: Array<Post>
      }> = await axios.all(endpoints.map((endpoint) => api.get(endpoint)))

      setMain(mainData)
      setBanner(bannerData[0])
    })()
  }, [])

  return (
    <>
      <Hero />
      <section className='container'>
        <div className='row'>
          <div className='grid-5 pt-5 pb-3 bb-black'>
            <img src='svg/icon-star.svg' alt='blog icon' className='icon-l' />
            <a href='#' className='link-title'>
              <h2 className='mt-1'>
                Os melhores e mais bem votados posts do mês.
              </h2>
            </a>

            <p className='mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              urna pharetra ut ac, pellentesque.
            </p>
          </div>
          <div className='grid-7'>
            {main.map((post) => {
              return (
                <MainCard
                  key={post.id.toString()}
                  category={post.category}
                  content={post.content}
                  date={post.date}
                  idUser={post.id_user}
                  title={post.title}
                />
              )
            })}
          </div>
        </div>
      </section>

      <div className='bg-section'>
        <section className='container'>
          <h3 className='ml-2 mb-3'>Mais vistos</h3>
          <div className='row'>
            <Card />
          </div>
        </section>
      </div>
      <Banner />
    </>
  )
}

export default Home
