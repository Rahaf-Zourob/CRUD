import { useNavigate } from 'react-router-dom';
import { Paths } from '../../Router/Paths';
import useApi from '../../components/hook/useApi';

import Container from '../../components/Container';
import Form from '../../components/Form';
import BackLink from '../../components/BackLink'

export default function CreatePost() {
  const { loading, postData } = useApi()
  const navagaite = useNavigate()
  const handleCreatePost = (body) => {
    postData(body)
    navagaite(Paths.User.View)
  }
  return (
    <Container>
      <h1>Add User</h1>
      <Form
        handleSubmit={handleCreatePost}
        loading={loading} />
      <BackLink />
    </Container>
  )
}