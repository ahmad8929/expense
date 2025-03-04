import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">

      {/* Left Section */}
      <div className="w-full md:w-[60%] flex flex-col px-12 pt-8 pb-12">
        <h2 className="text-2xl font-medium text-black">Expense Tracker</h2>
        <div className="flex flex-col justify-center h-full">{children}</div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-[40%] h-full bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center relative overflow-hidden p-8">
        <div className="absolute w-48 h-56 rounded-[48px] bg-purple-600 -top-7 -left-2" />
        <div className="absolute w-48 h-56 rounded-[48px] border-12 border-fuchsia-600 top-[30%] -right-8" />
        <div className="absolute w-48 h-56 rounded-[48px] bg-violet-500 -bottom-7 -left-2" />
      </div>

    </div>
  );
};

export default AuthLayout;