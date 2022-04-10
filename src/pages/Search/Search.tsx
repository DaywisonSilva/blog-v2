import api from '@services/api'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

//  Components
import Card from '@components/Card'

function Search() {
  const { word_search: wordSearch } = useParams()

  //  state
  const [posts, setPosts] = useState<Array<Post>>()
  const [search, setSearch] = useState(wordSearch)
  const searchRef = useRef<HTMLInputElement>(null)

  const getData = async (word: string) => {
    const { data: postsData }: { data: Array<Post> } = await api.get(
      `/posts?q=${word}`
    )

    setPosts(postsData)
  }

  useEffect(() => {
    if (wordSearch) getData(wordSearch)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    const inputValue = searchRef.current?.value
    e.preventDefault()
    if (inputValue) {
      getData(inputValue)
      setSearch(inputValue)
    }
  }

  return (
    <div>
      <div className='bg-section'>
        <section className='container'>
          <h6 className='upercase color-primary text-center'>
            {posts?.length} resultados
          </h6>

          <h4 className='text-center'>"{search}"</h4>

          <form onSubmit={handleSubmit}>
            <div className='row'></div>
            <div className='grid-2 disappear'></div>
            <div className='grid-8 flex-center'>
              <input
                type='text'
                name='search'
                placeholder='Buscar...'
                ref={searchRef}
              />
              <button className='btn ml-2' type='submit'>
                Buscar
              </button>
            </div>
          </form>

          <div className='row'>
            {posts?.length ? (
              posts?.map((post) => {
                return (
                  <Card
                    key={post.id}
                    title={post.title}
                    category={post.category}
                    content={post.content}
                    date={post.date}
                    imageUrl={post.imageUrl}
                    postId={post.id}
                    resume={post.resume}
                  />
                )
              })
            ) : (
              <h2 style={{ textAlign: 'center', marginTop: '100px' }}>
                Nenhum Resultado encontrado :(
              </h2>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Search
