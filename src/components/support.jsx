import React from 'react';
import TraslateCopy from './traslateCopy';

const Support = () => {
  return (
    <section id="soporte" className='mb-5'>
      <div className='mx-auto max-w-7xl p-6 lg:px-8 flex flex-col items-center justify-center gap-3'>
        <h2 className="text-4xl font-extrabold text-white"><TraslateCopy copyId="HOME_SUPPORT_TITLE"/></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col justify-center text-center">
            <h3 className="text-xl text-[#40caf4] font-semibold"><TraslateCopy copyId="HOME_SUPPORT_ MANUAL_TITLE"/></h3>
            <p className="text-sm text-white"><TraslateCopy copyId="HOME_SUPPORT_ MANUAL_TEXT"/></p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <h3 className="text-xl text-[#40caf4] font-semibold"><TraslateCopy copyId="HOME_SUPPORT_SCHEDULE_TITLE"/></h3>
            <p className="text-sm text-white"><TraslateCopy copyId="HOME_SUPPORT_SCHEDULE_DAYS"/></p>
            <p className="text-sm text-white"><TraslateCopy copyId="HOME_SUPPORT_SCHEDULE_HOURS"/></p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <h3 className="text-xl text-[#40caf4] font-semibold"><TraslateCopy copyId="HOME_SUPPORT_CONTACT_TITLE"/></h3>
            <p className="text-sm text-white"><TraslateCopy copyId="HOME_SUPPORT_CONTACT_TEXT"/></p>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
