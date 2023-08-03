import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Paths } from '../../components/Router/Paths';
import Container from '../../components/Container';
import '../../components/btnStyle.css'
import { StoreUrl } from '../../config/StoreUrl';

export default function ReadPage() {
    const [userInfo,setUsetInfo] = useState({
        name:'',
        cities:''
    })
    const [dataStatus, setDataStatus] = useState({
        isLoading: true,
        isGoToUserList: false,
      });
    const {id} = useParams()
    console.log(id)
    const navigate = useNavigate()
    const getData=async()=>{
        try {
            const {data} = await axios.get(StoreUrl+'/'+id)
                console.log(747)
                setUsetInfo({
                    name:data.name,
                    cities:data.cities})
                setDataStatus((prevState)=>({...prevState,isLoading:false}))
        } catch (error) {
            console.log(404)
        }
    }
    console.log(userInfo.name)

    useEffect(()=>getData,[])
    const handleBack=()=>{
        setDataStatus((prevState)=>({...prevState,isGoToUserList:true}))
        navigate(Paths.User.View)
    }
  return (
    <Container>
        <h3>User {userInfo.name} information</h3>
        {dataStatus.isLoading?
        <h4>Loading</h4> :
        <>
        <h5>{userInfo.name}</h5>
        <h5>{userInfo.cities}</h5></>
        }
        <button className='btn submit__btn' onClick={handleBack}>Back to list</button>
    </Container>
  )
}
