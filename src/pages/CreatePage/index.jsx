import React, { useState } from 'react';
import axios from 'axios';
import Container from '../../components/Container';
import Form from '../../components/Form';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../components/Router/Paths';
import { StoreUrl } from '../../config/StoreUrl';
export default function CreatePost () {
  const[isLoading,setIsLoading]=useState(false)
  const navagaite = useNavigate()
  const handleCreatePost = async (body) => {
    setIsLoading(true);
    try {
      await axios.post(StoreUrl,body);
        setIsLoading(false)
    } catch (error) {
      console.log(error.message);
    }
    navagaite(Paths.User.View)
  };
  return (
        <Container>
          <h1>Create User</h1>
          <Form
            handleSubmit={handleCreatePost}
            isLoading={isLoading}/>
        </Container>
  )
}