import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Paths } from '../../Router/Paths';
import Container from '../../components/Container';
import useApi from '../../components/hook/useApi';
export default function ReadPage() {
  const { getObject, object, loading } = useApi()
  useEffect(() => {
    getObject();
  }, []);
  return (
    <Container>
      {loading ? <h3>Loading...</h3> :
        <>
          <h3>User {object?.name} information</h3>
          <h4>Name: {object?.name}</h4>
          <h4>City: {object?.cities}</h4>
        </>}
      <Link to={Paths.User.View} className='btn back__btn'>Back to list</Link>
    </Container>
  )
}
