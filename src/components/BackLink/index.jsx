import { Link } from 'react-router-dom'
import { Paths } from '../../Router/Paths'

const BackLink = () => {
  return (
    <Link to={Paths.User.View} className='btn back__btn'>Back to list</Link>
  )
}

export default BackLink;