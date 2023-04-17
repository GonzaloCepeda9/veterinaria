import React from 'react';

function Error({ children }) {
  return (
    <div className="bg-red-600 text-white rounded-md p-1 mt-2 sm: text-[16px]">
      <p className="font-bold text-[16px] text-center">
        {children}
      </p>
    </div>
  )
}

export default Error