import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; }){

  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <input style={{marginBottom: "5px"}} value={course.name} className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />

      <input  style={{marginBottom: "5px"}} value={course.number} className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input  style={{marginBottom: "5px"}} value={course.startDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />

      <input  style={{marginBottom: "5px"}} value={course.endDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

      <button className="btn btn-primary" style={{ marginLeft: "5px" }} onClick={addNewCourse} > Add</button>
      <button className = "btn btn-secondary" style={{ marginLeft: "5px" }} onClick={updateCourse} >
        Update
      </button>

      <hr />
      <h2>Published Courses {courses.length}</h2> <hr />
      <div className="row">
        <div className="row row-cols-sm-3 row-cols-md-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: "300px", marginTop: "10px"}}>
              <div className="card" style={{width:"274 px"}}>
                <img src={`/images/${course.image}`} className="card-img-top"
                  style={{ height: "150px" }} />
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} </Link>
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
                  <button className="btn btn-secondary" style={{ marginLeft: "5px"}} onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}>
                    Edit
                  </button>

                  <button className="btn btn-danger" style={{ marginLeft: "5px" }} onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}>
                    Delete
                  </button>
                </div>
              
              </div>
            </div>
          ))}
       
        </div>
      </div>
    </div>
  );
}
export default Dashboard;