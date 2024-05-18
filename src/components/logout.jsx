import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginOut } from "../redux/reducers/login-reducer";

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogut =  () => {
        dispatch(loginOut([]))
        navigate('/');
    }

  return (
    <div onClick={handleLogut} className='Logout'>
      <p>logout</p>
    </div>
  )
}

export default Logout