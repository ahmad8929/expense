import React from 'react';

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black/10 backdrop-blur-sm"
      onClick={onClose} // Closes modal when clicking outside
    >
      <div
        className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <button
            type="button"
            className="text-gray-500 hover:text-gray-800 transition"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 space-y-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;


// import React, { Children } from 'react'

// const Modal = ({ isOpen, onClose, children, title }) => {

//     if(!isOpen) return null;

//     return (
//         <div className='fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[clac(100%-1rem] max-h-full overflow-y-auto overflow-x-hidden bg-black/20 bg-opacity-50'>
//             <div className='relative p-4 w-full max-w-2xl max-h-full'>

//                 {/* Modal Content */}
//                 <div className='relative bg-white rounded-lg shadow-sm dark:bg-gray-700'>

//                     {/* Modal Header */}
//                     <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200'>
//                         <h3 className='text-lg font-medium text-gray-900 dark:text-white'>
//                             {title}</h3>
//                         <button
//                             type="button"
//                             className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
//                             onClick={onClose}
//                         >
//                             X
//                             {/* <svg
//                                 className='w-3 h-3'
//                                 aria-hidden="true"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox='0 0 14 14'
//                             >
//                                 <path
//                                     stroke="currentColor"
//                                     strokeLinecap='round'
//                                     strokeLinejoin='round'
//                                     strokeWidth="2"
//                                     d="ml 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                                 />
//                             </svg> */}
//                         </button>
//                     </div>

//                     {/* Modal Body */}
//                     <div className='p-4 md:p-5 space-y-4'>
//                         {children}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Modal;
