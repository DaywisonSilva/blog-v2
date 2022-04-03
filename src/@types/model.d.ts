type Post = {
  id: number
  id_user: number
  date: string
  imageUrl: string
  category: string
  title: string
  resume: string
  content: string
  duration: string
  star: string
  views: string
  status: boolean
}

type User = {
  id: number
  user: string
  name: string
  surname: string
  token: string
  description: string
  ImageProfile: string
}
