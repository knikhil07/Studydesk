import React from 'react';

const Loader = () => {
    return (
        <>
           <div className="h-screen  w-screen dark:bg-black ">
           <div className="px-6 py-2 w-full flex  items-center justify-between">
            <div className="h-8 w-24 rounded-md animate-pulse bg-black/10 dark:bg-white/30"></div>
            <div className="flex gap-3">
            <div className="px-4 py-4 rounded-full animate-pulse bg-black/10 dark:bg-white/30"></div>
            <div className="px-4 py-4 rounded-full animate-pulse bg-black/10 dark:bg-white/30"></div>
            <div className="px-4 py-4 rounded-full animate-pulse bg-black/10 dark:bg-white/30"></div>
               
            </div>
           </div>
           <div className="h-96 w-full mt-32 flex flex-col gap-3 justify-center items-center">
                <div className="h-20 w-72 sm:w-96 md:w-[40rem]  bg-black/10 dark:bg-white/30  animate-pulse "></div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6 lg:mt-12">
                <div className="h-36 md:h-64 w-72 sm:w-96 bg-black/10 dark:bg-white/30 animate-pulse "></div>
                <div className="h-36 md:h-64 w-72 sm:w-96 bg-black/10 dark:bg-white/30 animate-pulse "></div>  
                <div className="h-36 md:h-64 w-72 sm:w-96 bg-black/10 dark:bg-white/30 animate-pulse "></div>  

                </div>
           </div>
           </div> 
        </>
    );
}

export default Loader;
