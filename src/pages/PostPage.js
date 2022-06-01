import { useParams } from 'react-router-dom'

const PostPage = () => {
  const id = useParams().id || 1
  return (
    <>
      <div>Post Detail - {id}</div>
      <div>{JSON.stringify(id)}</div>
    </>
  )
}

export default PostPage
