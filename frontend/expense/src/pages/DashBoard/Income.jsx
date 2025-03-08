import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout';
import { useUserAuth } from '../../hooks/useUserAuth';

const Income = () => {
  useUserAuth();
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className='my-5 mx-auto'>Income</div>
    </DashboardLayout>
  )
}

export default Income;