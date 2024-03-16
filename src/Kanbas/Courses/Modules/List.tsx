import React, { useState } from "react";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";


function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
  state.modulesReducer.modules);
const module = useSelector((state: KanbasState) => 
  state.modulesReducer.module);
const dispatch = useDispatch();



  return (
    <>
      <div className="topButtons">
        <button>Collapse All</button>
        <button>View Progress</button>
        <select>
          <option>Publish All</option>
          <option>Publish All Modules and Items</option>
          <option>Publish Modules Only</option>
          <option>Unpublish All</option>

        </select>

        <button style={{ backgroundColor: "red" }}>+ Module</button>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <h3>Create or Update Module</h3>
          <div style={{display: "flex"}}>
         <input style={{verticalAlign:"top"}} value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          />
          <textarea value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
          />
       
          <div >
          <button style={{display: "flex"}} onClick={() => dispatch(addModule({ ...module, course: courseId }))}
 className="btn btn-primary">Add</button>
           <button onClick={() => dispatch(updateModule(module))}>
                Update
        </button>
      
 </div>
 </div>

        </li>

        {moduleList.filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index}
              className="list-group-item"
              onClick={() => setModule(module)}>
          <div style={{ display: "flex"}}>
                <FaEllipsisV className="me-2" />
                {module.name}
               
                <button style={{marginLeft: "10px"}}className="btn btn-secondary"
             onClick={() => dispatch(setModule(module))}>
              Edit
            </button>

              <button className="btn btn-danger"
             onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
            <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
           
            
              </div>
              {module._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: any, index: any) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;