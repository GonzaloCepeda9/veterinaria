import React from 'react';

function Error({ children }) {
  return (
    <div className="bg-red-800 text-white rounded-md p-2 mt-2 sm: text-xs">
      <p className="font-bold text-xs text-center">
        {children}
      </p>
    </div>
  )
}

export default Error