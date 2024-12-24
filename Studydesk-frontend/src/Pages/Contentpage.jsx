import React, { useContext } from "react";
import AppContext from "../Appcontext/AppContext";
import { useParams } from "react-router-dom";

const Contentpage = () => {
  const { contentacessId, CourseList } = useContext(AppContext);
  const { id } = useParams();

  return (
    <>
      <div  className="h-full w-full">
        <div className="p-4">
          {CourseList[`${id}`].menu[`${contentacessId}`].video ? (
            <div
              className="w-full lg:justify-center
           "
            >
              <iframe
              className="w-full aspect-video md:w-[45rem] lg:w-[55rem]"
              frameBorder={30}
                
                src={`https://www.youtube.com/embed/${CourseList[`${id}`].menu[`${contentacessId}`].src}`}
                // title="C Programming in One Shot | Part 1 | Variables, Operators and Input/ Output | C Complete Course"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>{" "}
            </div>
          ) : (
            <div
              className="grid gap-2 lg:max-w-4xl mx-auto"
              dangerouslySetInnerHTML={{
                __html: CourseList[`${id}`].menu[`${contentacessId}`].text,
              }}
            ></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contentpage;
