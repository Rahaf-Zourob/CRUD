import {useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ApiUrl } from '../../../config/StoreUrl'
const useApi = () => {
    const [data,setData] = useState([])
    const [object,setObject] = useState(null)
    const [loading,setLoading] = useState(true)
    const {id} = useParams();
    const getData = async()=>{
        try {
            const res = await axios.get(ApiUrl)
            setData(res.data)
        } catch (error) {
            console.log(error)
        } finally{setLoading(false)}
    }
    const getObject = async()=>{
        try {
            const res = await axios.get(ApiUrl+'/'+id)
            setObject(res.data)
        } catch (error) {
            console.log(error)
        } finally{setLoading(false)}
    }
    const postData = async(body)=>{
        try {
            const res = await axios.post(ApiUrl,body)
            setData(res.data)
        } catch (error) {
            console.log(error)
        } finally{setLoading(false)}
    }
    const putData = async(body)=>{
        try {
            const res = await axios.put(ApiUrl+'/'+id,body)
            setData((prevState)=> prevState.map((item)=> item.id===id ? res.data : item
            ));
        } catch (error) {
            console.log(error)
        } finally{setLoading(false)}
    }
    const deleteData = async(id)=>{
        try {
            await axios.delete(ApiUrl+'/'+id)
            setData(prevState=> prevState.filter((item)=>item.id!==id))
        } catch (error) {
            console.log(error)
        } finally{setLoading(false)}
    }
  return {
    getData,
    getObject,
    postData,
    putData,
    deleteData,
    data,
    object,
    loading
  }
}
export default useApi