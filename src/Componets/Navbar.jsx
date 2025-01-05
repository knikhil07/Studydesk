import React, { useContext, useState } from "react";
import BellIcon from "../assets/BellIcon";
import MenuIcon from "../assets/MenuIcon";
import SearchIcon from "../assets/SearchIcon";
import { AiOutlineClose } from "react-icons/ai";
import AppContext from "../Appcontext/AppContext";
import { IoMdArrowBack, IoMdClose, IoMdMore } from "react-icons/io";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { CourseList,handleCheckboxClick ,isChecked} = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [compBar,setCompBar]=useState(false)
  const [profileBar,setprofileBar]=useState(false)
  const filteredItems = CourseList.filter((item) =>
    item.list.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const { sidebar, setSidebar, nav, scrollDivBg, userDB } =
    useContext(AppContext);
  const a = userDB ? userDB.slice(0, 1) : "s";
  return (
    <>
      <div
        className={`w-full py-3  ${
          scrollDivBg ? "transition-all bg-white " : ""
        } dark:bg-white/5 *:dark:text-white      `}
      >
        <div className="px-6  flex items-center justify-between">
          <div className="flex gap-3 items-center *:cursor-pointer">
            <span
              onClick={() => {
                setSidebar((prev) => !prev);
              }}
              className="w-10 h-10 grid place-content-center hover:bg-black/5 dark:fill-white rounded-full"
            >
              <MenuIcon />
            </span>
            <a href="/Home" className="text-xl font-normal">
              Studydesk
            </a>
          </div>
          <div className="hidden relative px-8 py-2 rounded-full sm:flex items-center gap-3  border-2 ">
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent outline-0 lg:w-96 "
              placeholder="Search .."
            />
            <button>
              <SearchIcon />
            </button>
            <div
              className="absolute  h-auto rounded-md w-full z-50 bg-white dark:bg-black
             top-12 left-0"
            >
              <ul
                className={` *:cursor-pointer ${
                  searchTerm && filteredItems ? "p-4" : ""
                }`}
              >
                {searchTerm &&
                  filteredItems.map((item, index) => (
                    <li
                      onClick={() => {
                        setSearchTerm(item.list),
                          nav(`/Home/${item.id}/${item.list}`),
                          setSearchTerm("");
                      }}
                      className="pl-2  py-1 hover:text-sky-500 "
                      key={index}
                    >
                      {item.list}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-4   *:cursor-pointer">
            <span className="h-8 w-8 grid place-content-center sm:hidden text-slate-950 relative dark:text-white  rounded-full hover:bg-black/5">
              <SearchIcon />
            </span>

            <span className="hover:shadow-xl h-10 w-10 grid place-content-center text-slate-950 relative dark:text-white rounded-full hover:bg-black/5">
              <BellIcon />
            </span>
            <span onClick={()=>{setprofileBar(prev=>!prev)}} className="h-8 w-8 hover:shadow-xl grid place-content-center text-white rounded-full bg-sky-500">
              {`  ${a}`}
            </span>
            <span onClick={()=>{setCompBar(prev=>!prev)}}  className="hover:shadow-xl h-10 transition-all w-10 text-2xl grid place-content-center text-slate-950 relative dark:text-white rounded-full hover:bg-black/5">
           {!compBar ?   <IoMdMore />:  <IoMdClose/>}
            </span>
          </div>
        </div>
      </div>
      {sidebar ? (
        <div className="h-screen w-screen fixed  top-0 left-0 bg-black/5  dark:bg-black/50 backdrop-blur-sm z-50">
          <div className="fixed left-5  top-5">
            <div
              onClick={() => {
                setSidebar((prev) => !prev);
              }}
              className="px-2 py-2 rounded-full bg-slate-950/50 dark:bg-black text-white cursor-pointer dark:fill-white"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="h-[85vh] rounded-3xl shadow-md overflow-y-scroll w-[90%] sm:w-96 bg-white dark:bg-black absolute top-[10%] left-2">
            <Sidebar />
          </div>
        </div>
      ) : (
        ""
      )}
      {compBar ? (
        <div className="py-6 w-64 p-8 flex flex-col gap-3 bg-white dark:bg-black fixed right-6 top-16 z-30 shadow-md rounded-lg *:cursor-pointer">
  
           <button onClick={()=>{setCompBar(prev=>!prev)}} className="absolute right-4 top-4 px-2 py-2 rounded-full hover:bg-black/5 hover:dark:bg-white/10 *:dark:fill-white">
         
           </button>
           <div className="dark:text-white">Help</div>
           <div    className="flex items-center gap-3 relative dark:text-white">
            Dark Mode
           
            <label
              htmlFor="idxn"
              className="w-[50px] h-[25px] rounded-full  dark:bg-white/30   bg-black/10 z-0 relative flex items-center"
            > <input  checked={isChecked} onChange={(e)=>{handleCheckboxClick(e)}} type="checkbox" name="idxn" id="idxn" className="sr-only peer" />
              <p  className="px-2 py-2 absolute  left-1 peer-checked:translate-x-6 bg-white dark:bg-white/40 dark:peer-checked:bg-white/80 transition-all rounded-full"></p>
            </label>
           </div>
        </div>
      ) : (
        ""
      )}

      {/* {profileBar ?
      <div className="py-4 px-8 flex items-center  flex-col gap-3 cursor-pointer z-20 bg-white fixed top-16 rounded-lg right-4 shadow-lg dark:bg-black dark:text-white ">
       
        <p className="transition ease-in-out delay-[10ms] hover:text-sky-500"> {userDB}</p>
        <button className="drak:text-white flex items-center gap-3 group transition-all duration-700 ease-in-out">profile
          
          <p className="rotate-180 transition ease-in-out delay-150  group-hover:opacity-[1] opacity-0 "><IoMdArrowBack/></p>
        </button>
      </div>
      :""} */}
    </>
  );
};

export default Navbar;
// setcontentacessId
