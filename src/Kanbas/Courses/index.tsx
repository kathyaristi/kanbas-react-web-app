import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3, HiChevronRight } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import BreadCrumbs from "./BreadCrumbs";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";

function Courses({ courses }: { courses: any[]; }) {
  const { courseId, pages } = useParams();
  const course = courses.find((course) => course._id === courseId);
  console.log(pages);

  return (
    <div>
      <BreadCrumbs />
      <hr style={{ marginLeft: 10, paddingBottom: 10 }} />
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "90px" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules />} />
            {/* <Route path="Piazza" element={<h1>Piazza</h1>} /> */}
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
