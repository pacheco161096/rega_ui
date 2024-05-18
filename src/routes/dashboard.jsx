import React,{ useEffect } from 'react'
import Header from '../components/headerDashboard'
import { Outlet } from 'react-router-dom'
import cms  from '../services/index'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';


const Dashboard = () => {
  const { lang } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    cms.getTraslateCopy(lang,dispatch);
  }, [lang]);
  
  return (
    <div className='Dashboard'>
        <div className="Dashboard-main">
          <Header/>
          <div className='dashboard-container'>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default Dashboard