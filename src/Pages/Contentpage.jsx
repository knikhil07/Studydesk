import React, { useContext } from "react";
import AppContext from "../Appcontext/AppContext";
import { useParams } from "react-router-dom";

const Contentpage = () => {
  const { contentacessId, CourseList } = useContext(AppContext);
  const { id } = useParams();

  return (
    <>
      <div className="h-full w-full">
        <div className="w-full   flex items-start sm:pl-2 justify-center flex-col gap-6 ">
          {CourseList[`${id}`]?.menu[`${contentacessId}`]?.table &&
            CourseList[`${id}`].menu[`${contentacessId}`].table.map(
              (table, tableIndex) => (
                <div key={tableIndex} className="my-4">
                  {/* Table Title */}
                  <h2 className="text-2xl pl-3 font-semibold text-pink-500 mb-4">
                    {table.title}
                  </h2>

                  {/* Table */}
                  <table className="bg-white w-full md:max-w-[46rem] rounded-lg overflow-hidden">
                    <thead className="bg-slate-800">
                      <tr>
                        {table.head.map((header, headerIndex) => (
                          <th
                            className="text-xs lg:text-sm p-3 font-semibold text-pink-500 text-left"
                            key={headerIndex}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.body.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <td
                              className="text-xs lg:text-sm p-3 first:font-semibold first:bg-slate-800 bg-slate-800 text-white first:text-sky-500"
                              key={cellIndex}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            )}
        </div>
        <div className="w-full flex items-start justify-center flex-col gap-2 pl-3 md:pl-8 lg:pl-10">
          {CourseList[`${id}`]?.menu[
            `${contentacessId}`
          ]?.code?.defination? CourseList[`${id}`].menu[
            `${contentacessId}`
          ].code.defination.map((item, index) => (
            <React.Fragment key={index}>
              <div className="px-6 gap-3 flex flex-col">
                <b className="text-xl">{item.b || "Default Heading"}</b>
                <div className="flex flex-col gap-3 ">
                  {item.def
                    ? item.def.map((item, index) => {
                        return (
                          <p className="text-start break-words" key={index}>
                            {item || "No description available"}
                          </p>
                        );
                      })
                    : ""}
                </div>
              </div>
            </React.Fragment>
          )):""}
        </div>

        {/* <div className="w-full   flex items-center justify-center flex-col gap-6">
          {CourseList[`${id}`]?.menu[`${contentacessId}`]?.code &&
            CourseList[`${id}`].menu[`${contentacessId}`].code?.syntax.map(
              (item, index) => (
                <React.Fragment key={index}>
                  {item?.defination?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-[90%] pl-3 md:pl-8 lg:pl-10 gap-3 flex flex-col items-start"
                      >
                        <b>{item.b}</b>
                        <div className="flex flex-col gap-3 ">
                          <p className="text-start break-words">
                            {item.def || "No description available"}
                          </p>
                        </div>
                      </div>
                    );
                  })}

                  <div className="px-6 py-8 w-[90%] min-w-72 shadow-md bg-slate-800 rounded-xl">
                    <div>
                      <h1 className="text-2xl font-bold mb-3 text-sky-500">
                        {item.head ? item.head : item.attri}
                      </h1>

                      {item.code ? (
                        <pre className="dark:text-white text-wrap text-sm md:text-base px-4 py-4 bg-white/10 rounded-lg text-white">
                          {item.code}
                        </pre>
                      ) : (
                        ""
                      )}
                      {item.keyComponents ? (
                        <React.Fragment >
                          <h2 className="font-semibold my-3 text-green-500">
                            Key Components:
                          </h2>
                          <p className="text-sky-500">{item.keyComponents}</p>
                        </React.Fragment>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  {item?.exampleCode ? (
                    <div className="px-6 py-8 w-[90%] min-w-72 shadow-md bg-slate-800 rounded-xl">
                      <div>
                        <h1 className="text-2xl font-bold mb-3 text-sky-500">
                          Example Code
                        </h1>
                        <pre className="dark:text-white text-sm md:text-base px-4 py-4 bg-white/10 rounded-lg text-white text-wrap">
                          {item.exampleCode}
                        </pre>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </React.Fragment>
              )
            )}
        </div> */}

        {CourseList[`${id}`]?.menu[`${contentacessId}`]?.code?
         <div className="w-full flex items-center justify-center flex-col gap-6 mt-3">
         {CourseList[`${id}`]?.menu[`${contentacessId}`]?.code?.syntax.map(
           (item, index) => (
             <React.Fragment key={index}>
               {/* Check if defination is a valid array */}
               {Array.isArray(item?.defination) && item.defination.length > 0 &&
                 item.defination.map((defItem, defIndex) => (
                   <div
                     key={defIndex}
                     className="w-[90%] pl-3 md:pl-8 lg:pl-10 gap-3 flex flex-col items-start"
                   >
                     <b>{defItem?.b}</b>
                     <div className="flex flex-col gap-3">
                       {Array.isArray(defItem?.def) ? (
                         defItem.def.map((desc, descIndex) => (
                           <p key={descIndex} className="text-start break-words">
                             {desc || "No description available"}
                           </p>
                         ))
                       ) : (
                         <p className="text-start break-words">
                           {defItem?.def || "No description available"}
                         </p>
                       )}
                     </div>
                   </div>
                 ))
               }
       
               {/* Other content */}
               <div className="px-6 py-8 w-[90%] min-w-72 shadow-md bg-slate-800 rounded-xl">
                 <div>
                   <h1 className="text-2xl font-bold mb-3 text-sky-500">
                     {item.head || item.attri}
                   </h1>
                   {item.code && (
                     <pre className="dark:text-white text-wrap text-sm md:text-base px-4 py-4 bg-white/10 rounded-lg text-white">
                       {item.code}
                     </pre>
                   )}
                   {item.keyComponents && (
                     <>
                       <h2 className="font-semibold my-3 text-green-500">
                         Key Components:
                       </h2>
                       <p className="text-sky-500">{item.keyComponents}</p>
                     </>
                   )}
                 </div>
               </div>
       
               {item?.exampleCode && (
                 <div className="px-6 py-8 w-[90%] min-w-72 shadow-md bg-slate-800 rounded-xl">
                   <div>
                     <h1 className="text-2xl font-bold mb-3 text-sky-500">
                       Example Code
                     </h1>
                     <pre className="dark:text-white text-sm md:text-base px-4 py-4 bg-white/10 rounded-lg text-white text-wrap">
                       {item.exampleCode}
                     </pre>
                   </div>
                 </div>
               )}
             </React.Fragment>
           )
         )}
       </div>:''
        }
    


      </div>
    </>
  );
};

export default Contentpage;
