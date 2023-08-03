import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../components/Table/indes';
import { User } from '../../constants/User';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../components/Router/Paths';
import '../../components/btnStyle.css'
import { StoreUrl } from '../../config/StoreUrl';
export default function ViewPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const { data } = await axios.get(StoreUrl);
      setUsers(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleCreate = () => {
    navigate(Paths.User.Create)
  };
  const handleEdit = (id) => {
    navigate(Paths.User.Edit.replace(':id', id));
  };
  const handleRead=(row)=>{
    navigate(Paths.User.Read.replace(':id', row.id))
  }
  const handleDelete = async(id) => {
    try {
      await axios.delete(StoreUrl+'/'+id)
      getData()
    } catch (error) {
      console.log('404')
    }
  }
  return (
    <>
    <button className=' create__btn btn' onClick={handleCreate}>Add user</button>
    <Table data={users} cols={User(handleDelete, handleEdit)} onRowClick={handleRead} />
    </>
    );
}
