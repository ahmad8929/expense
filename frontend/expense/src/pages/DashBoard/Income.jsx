import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import IncomeOverview from "../../components/Income/IncomeOverview";
import { API_PATHS } from "../../utils/apiPaths";
import axiosInstance from "../../utils/axiosInstance";
import Modal from "../../components/Modal";
import { Toaster, toast } from "sonner";
import AddIncomeForm from "../../components/Income/AddIncomeForm";

const Income = () => {
  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);
  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchIncomeDetails();
  }, []);

  const fetchIncomeDetails = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axiosInstance.get(API_PATHS.INCOME.GET_ALL_INCOME);
      if (response.data) {
        setIncomeData(response.data);
      }
    } catch (error) {
      console.error("Error fetching income details:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddIncome = async (income) => {
    const {source, amount, date, icon } = income;

    // Validation Errors
    if(!source.trim()){
      toast.error("Source is required.")
      return;
    }
    if(!amount || isNaN(amount) || Number(amount) <= 0){
      toast.error("Amount should be a valid number greater than 0.")
      return;
    }
    if(!date){
      toast.error("Date is required.")
      return;
    }

    try {
      await axiosInstance.post(API_PATHS.INCOME.ADD_INCOME, {
        source,amount,date,icon
      });
      setOpenAddIncomeModal(false);
      toast.success("Income added successfully")
      fetchIncomeDetails();
    } catch (error) {
     
      toast.error("Income added errro")
    } 
  };

  return (
    <DashboardLayout activeMenu="Income">
       <Toaster position="top-center" richColors /> 
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <IncomeOverview
            transactions={incomeData}
            onAddIncome={() => setOpenAddIncomeModal(true)}
          />
        </div>

        <Modal
          isOpen={openAddIncomeModal}
          onClose={() => setOpenAddIncomeModal(false)}
          title="Add Income"
        >
          <AddIncomeForm onAddIncome={handleAddIncome} />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Income;


// import React, { useState, useEffect } from 'react'
// import DashboardLayout from '../../components/layout/DashboardLayout';
// import IncomeOverview from '../../components/Income/IncomeOverview';
// import { API_PATHS } from '../../utils/apiPaths';
// import axiosInstance from '../../utils/axiosInstance';
// import Modal from '../../components/Modal';
// import AddIncomeForm from '../../components/Income/AddIncomeForm';

// const Income = () => {

//   const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);
//   const [incomeData, setIncomeData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [openDeleteAlert, setOpenDeleteAlert] = useState({
//     show: false,
//     data: null,
//   });

//   useEffect(() => {
//     fetchIncomeDetails();
//   }, [])

//   useEffect(() => {
//     console.log("Updated transactions:", incomeData);
//   }, [incomeData]);


//   const fetchIncomeDetails = async () => {
//     if (loading) return;

//     setLoading(true);

//     try {
//       const response = await axiosInstance.get(`${API_PATHS.INCOME.GET_ALL_INCOME}`);

//       if (response.data) {
//         setIncomeData(response.data);
//         console.log("Fetched transactions:", response.data);
//         console.log("Fetched transactions 1:", response);
//       }
//     } catch (error) {
//       console.log("Something went wrong. Please try again", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddIncome = async (income) => {
//     if (loading) return;
//     setLoading(true);

//     try {
//       await axiosInstance.post(API_PATHS.INCOME.ADD_INCOME, income);
//       setOpenAddIncomeModal(false);
//       fetchIncomeDetails();
//     } catch (error) {
//       console.error("Error adding income:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <DashboardLayout activeMenu="Income">
//       <div className='my-5 mx-auto'>
//         <div className='grid grid-cols-1 gap-6'>
//           <div className=''>
//             <IncomeOverview
//               transactions={incomeData}
//               onAddIncome={() => setOpenAddIncomeModal(true)}
//             />
//           </div>
//         </div>
//         <Modal
//           isOpen={openAddIncomeModal}
//           onClose={() => setOpenAddIncomeModal(false)}
//           title="Add Income"
//         >
//           <AddIncomeForm onAddIncome={handleAddIncome}/>
//         </Modal>
//       </div>
//     </DashboardLayout>
//   )
// }

// export default Income;