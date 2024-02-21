import { courses } from "../../Database/";
import { Navigate, Route, Routes, useParams,useLocation } from "react-router-dom";
import { HiMiniBars3, HiChevronRight } from "react-icons/hi2";
import CourseNavigation from "../Navigation";
import "./index.css";

function BreadCrumbs() {
    const { courseId } = useParams();
    const url = useLocation();
    console.log(url);

    const split = url.pathname.split("/");
    console.log(split);
    const course = courses.find((course) => course._id === courseId);
  
    return (
      <div className="breadcrumbs">
        <HiMiniBars3 className="hamburger" /> &nbsp; <span style={{ color: "red" }}>{course?.name}</span>  <HiChevronRight/>  {split.at(split.length-1)}
        </div> )};
        export default BreadCrumbs
