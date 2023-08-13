import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/Container';
import Form from '../../components/Form';
import { Paths } from '../../Router/Paths';
import useApi from '../../components/hook/useApi';
export default function EditPage() {
  const {getObject,object,putData} = useApi()
  const navigate =useNavigate()
  useEffect(() => {
    getObject();
  }, []);
 const handleSubmitEdit = (body) => {
    putData(body)
    navigate(Paths.User.View)
  };
  return (
    <Container>
      <h3>Edit user info {object.name}</h3>
      <Form user={object} handleSubmit={handleSubmitEdit} />
    </Container>
  );
}
