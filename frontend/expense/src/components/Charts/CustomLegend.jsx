import React from 'react'

const CustomLegend = ({ payload }) => {
    console.log("CustomLegend payload:", payload);

    return (
        // <div className='flex flex-wrap justify-center gap-2 mt-2 space-x-6'>
        //     {payload.map((entry, index) => (
        //         <div key={`legend-${index}`} className='flex items-center space-x-2'>
        //             <div
        //                 className='w-2.5 h-2.5 rounded-full'
        //                 style={{ backgroundColor: entry.color }}
        //             ></div>
        //             <span className='text-xs text-gray-700 font-medium'>
        //                 {entry.value}
        //             </span>
        //         </div>
        //     ))}
        // </div>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-2 w-full">
        {payload.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center space-x-2">
                <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: entry.color }}
                ></div>
                <span className="text-xs text-gray-700 font-medium">
                    {entry.value}
                </span>
            </div>
        ))}
    </div>
    )
}

export default CustomLegend;