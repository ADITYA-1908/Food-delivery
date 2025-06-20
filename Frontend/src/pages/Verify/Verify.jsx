import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './Verify.css';
const Verify = () => {

    const{seacrchParams,setseacrchParams} = useSearchParams();
    const success = seacrchParams.get("success")
    const orderId = seacrchParams.get("orderId")
    const {url}= useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () =>{
        const responce = await axios.post(url+"/api/order/verify",{success,orderId});
        if (responce.data.success) {
            navigate("/myorders")
        }
        else{
            navigate("/")     
        }
    }

    useEffect(()=>{
        verifyPayment();
    },[])

  return (
    <div className='verify'>
    <div className="spinner"></div>
    </div>
  )
}

export default Verify