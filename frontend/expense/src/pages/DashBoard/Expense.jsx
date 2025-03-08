import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout';
import { useUserAuth } from '../../hooks/useUserAuth';

const Expense = () => {
  useUserAuth();
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className='my-5 mx-auto'>Expense</div>
    </DashboardLayout>
  )
}

export default Expense;