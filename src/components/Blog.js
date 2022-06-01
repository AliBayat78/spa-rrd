import { Link, useParams, useLocation } from 'react-router-dom'
import queryString from 'query-string'

const Blog = (props) => {
  const params = useParams()
  const location = useLocation()
  const id = params.id
  const query = queryString.parse(location.search)
  console.log(query)
  return (
    <>
      <div>Blog Detail - {params.id} </div>
      <div>
        <Link to={`/blogs/${parseInt(id) + 1}`}>Go to next page !</Link>
      </div>
      <Link to="/blogs">go to Blogs</Link>
    </>
  )
}

export default Blog
