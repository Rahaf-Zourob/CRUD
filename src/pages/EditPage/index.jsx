import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Container from '../../components/Container';
import Form from '../../components/Form';
import { Paths } from '../../components/Router/Paths';
import { StoreUrl } from '../../config/StoreUrl';
export default function EditPage() {
  const [userInfo, setUserInfo] = useState({
    name:'',
    cities:''
  });
  const [dataStatus, setDataStatus] = useState({
    isLoading: true,
    isGoToUserList: false,
  });
  const navigate = useNavigate();
  const { id } = useParams();
  
  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    try {
      const { data } = await axios.get(StoreUrl+'/'+id);
        setUserInfo({
            name:data.name,
            cities:data.cities
        })
      setDataStatus((prevState) => ({ ...prevState, isLoading: false }));
    } catch (err) {
      console.log(err);
      setDataStatus((prevState) => ({ ...prevState, isLoading: false }));
    }
  };

  const handleSubmitEdit = async (body) => {
    setDataStatus((prevState) => ({ ...prevState, isLoading: true }));
    try {
      await axios.put(StoreUrl+'/'+id, body);
      setDataStatus({ isLoading: false, isGoToUserList: true });
    } catch (error) {
      console.log(error.message);
      setDataStatus({ isLoading: false, isGoToUserList: false });
    }
    navigate(Paths.User.View)
  };

  return (
    <Container>
      <h3>Edit user info {userInfo.name}</h3>
      <Form user={userInfo} handleSubmit={handleSubmitEdit} isLoading={dataStatus.isLoading} />
    </Container>
  );
}
