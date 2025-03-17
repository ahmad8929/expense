// import React, { useState } from 'react'

// const AddIncomeForm = ({onAddIncome}) => {

//     const [income, setIncome] = useState({
//         source: "",
//         amount: "",
//         date: "",
//         icon: "",
//     });

//     const handleChange = (key,value) => setIncome({...income, [key]: value});

//   return (
//     <div className="flex">
//         <input
//          value={income.source}
//          onChange={({target}) => handleChange("source",target.value)}
//          label="Income Source"
//          placeholder= "Freelance, Salary, etc"
//          type="text"
//          />

//         <input
//          value={income.amount}
//          onChange={({target}) => handleChange("amount",target.value)}
//          label="Amount"
//          placeholder= "Enter amount"
//          type="number"
//          />

//         <input
//          value={income.date}
//          onChange={({target}) => handleChange("date",target.value)}
//          label="Date"
//          placeholder= ""
//          type="date"
//          />

//        <div className="flex justify-end mt-6">
//         <button
//         type="button"
//         className='add-btn add-btn-fill'
//         onClick={() => onAddIncome(income)}
//         >
//             Add Income
//         </button>
//        </div>

//     </div>
//   )
// }

// export default AddIncomeForm

import React, { useState } from "react";
import EmojiPickerPopup from "../EmojiPickerPopup";

const AddIncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState({
    source: "",
    amount: "",
    date: "",
    icon: "",
  });

  const handleChange = (key, value) =>
    setIncome({ ...income, [key]: value });

  return (
    <div className="space-y-4">

        <EmojiPickerPopup
        icon={income.icon}
        onSelect={(selectedIcon) => handleChange("icon",selectedIcon)}
        />

      <input
        value={income.source}
        onChange={({ target }) => handleChange("source", target.value)}
        placeholder="Income Source (Freelance, Salary, etc.)"
        type="text"
        className="w-full border px-3 py-2 rounded-md"
      />

      <input
        value={income.amount}
        onChange={({ target }) => handleChange("amount", target.value)}
        placeholder="Amount"
        type="number"
        className="w-full border px-3 py-2 rounded-md"
      />

      <input
        value={income.date}
        onChange={({ target }) => handleChange("date", target.value)}
        placeholder=""
        type="date"
        className="w-full border px-3 py-2 rounded-md"
      />

      <div className="flex justify-end">
        <button
          type="button"
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
          onClick={() => onAddIncome(income)}
        >
          Add Income
        </button>
      </div>
    </div>
  );
};

export default AddIncomeForm;
