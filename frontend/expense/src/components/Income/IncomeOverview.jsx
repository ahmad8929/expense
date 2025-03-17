import React, { useEffect, useState } from 'react'
import { LuPlus } from "react-icons/lu";
import { prepareIncomeBarChartData } from '../../utils/helper';
import CustomBarChart from '../Charts/CustomBarChart';

const IncomeOverview = ({ transactions = [], onAddIncome }) => {
    console.log("transactions",transactions)
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareIncomeBarChartData(transactions);
        setChartData(result);
    }, [transactions]);

    console.log("chartData",chartData);

    return (
        <div className='card'>
            <div className='flex items-center justify-between'>
                <div className=''>
                    <h5 className='text-lg'>Income Overview</h5>
                    <p className='text-xs text-gray-400 mt-0.5'> Track your earnings over time and analyze your income trends</p>
                </div>
                <button className='add-income-btn flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300'
                    onClick={onAddIncome}
                >
                    <LuPlus className='text-lg' />
                    Add Income
                </button>
            </div>
            <div className='mt-10'>
                <CustomBarChart data={chartData} />
            </div>
        </div>
    )
}

export default IncomeOverview;