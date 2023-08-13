import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Paths } from '../../Router/Paths';
import Container from '../../components/Container';
import useApi from '../../components/hook/useApi';
export default function ReadPage() {
    const{getObject,object} = useApi()
    useEffect(() => {
      getObject();
    }, []);
  return (
    <Container>
        <h3>User {object?.name} information</h3>     
        <h5>{object?.name}</h5>
        <h5>{object?.cities}</h5>
        <Link to={Paths.User.View} className='btn submit__btn'>Back to list</Link>
    </Container>
  )
}
