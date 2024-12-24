import React from 'react';

const Footer = () => {
    return (
       <>
       <footer className='w-full bg-slate-950 p-8 '>
        <div className="mt-2 py-2 border-t-2 border-white/55  ">
        <p className="text-slate-200 text-center cursor-pointer">
            
            &copy; Copyright {new Date().getFullYear()} Studydesk. All rights reserved.
        </p>
        </div>
       </footer>
       </>
    );
}

export default Footer;
