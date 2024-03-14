import React, { useState } from "react";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import "./index.css";

function ModuleList() {
  const { courseId } = useParams();
  const [moduleList, setModuleList] = useState<any[]>(db.modules);

  const [module, setModule] = useState({
    name: "New Module",
    description: "New Description",
    course: courseId,
  });
  const addModule = (module: any) => {
    const newModule = {
      ...module,
      _id: new Date().getTime().toString()
    };
    const newModuleList = [newModule, ...moduleList];
    setModuleList(newModuleList);
  };
  const deleteModule = (moduleId: string) => {
    const newModuleList = moduleList.filter(
      (module) => module._id !== moduleId );
    setModuleList(newModuleList);
  };



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
          <button style={{display: "flex"}}onClick={() => { addModule(module) } } className="btn btn-primary">Add</button>
          <input value={module.name}
            onChange={(e) => setModule({
              ...module, name: e.target.value
            })}
          />
          <textarea value={module.description}
            onChange={(e) => setModule({
              ...module, description: e.target.value
            })}
          />
        </li>

        {moduleList.filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index}
              className="list-group-item"
              onClick={() => setModule(module)}>
              <button style={{display: "flex", justifyContent: "center"}} className="btn btn-danger"
              onClick={() => deleteModule(module._id)}>
              Delete
            </button>

              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {module._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson, index) => (
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