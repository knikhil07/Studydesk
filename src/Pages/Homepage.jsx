import React, { useContext } from 'react';
import Footer from '../Componets/Footer';
import AppContext from '../Appcontext/AppContext';

const Homepage = () => {
    const {nav,CourseList, handleScroll}=useContext(AppContext);
    return (
        <>
          <section onScroll={ handleScroll} className="h-[90vh] w-screen  overflow-y-scroll ">
        <div className="min-h-[90vh] p-6 w-screen grid place-content-center">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-4">
            <h2 className="dark:text-sky-500 text-3xl md:pt-44 font-semibold sm:text-4xl md:text-4xl lg:text-6xl">
              Learn and Gain
            </h2>
            <p className="dark:text-white px-6 flex mb-4 flex-wrap max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl ">
              By combining these two fields—Data Science and Full Stack Web
              Development—you'll gain the ability to create web applications
              that incorporate data-driven insights, giving you a versatile
              skill set. Let me know if you want more details or resources to
              help you with your coursework!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {CourseList.map((item, index) => {
              return(
                <div
                key={index}
                className="p-6 rounded-lg bg-white  dark:bg-white/5  shadow-md *:cursor-pointer grid place-items-center gap-3 "
              >
                <h2 className="px-8 py-2 rounded-full bg-sky-500/10 text-sky-500">
                  {item.list}
                </h2>
                <p className="px-3 dark:text-white">
                  {item.p.slice(0,120)}...
                </p>
                <div className="flex justify-between w-full">
                  <button className="px-3  text-sky-500 hover:underline  decoration-solid ">Read more</button>
                  <button onClick={()=>{nav(`/Home/${index}/${item.list}`)}} className="px-6 py-2 text-sky-500">Visit </button>
                </div>
              </div>
              );
              })}
            </div>
          </div>
        </div>
        <Footer/>
      </section>  
        </>
    );
}

export default Homepage;
