import React from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#1e3a8a] to-[#15162c] text-white">
         {children}
      </div>
   );
};
export default MainLayout;
