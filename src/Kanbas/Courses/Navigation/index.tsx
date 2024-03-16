import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments
function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments","Quizzes", "Grades","People", "Panopto Video","Discussions", "Announcements","Pages","Files","Rubrics","Outcomes","Collaborations","Syllabus","Settings"];
  const { pathname } = useLocation();
  const { courseId } = useParams();
 
  return (
  
  
    <div className="d-flex">
    <div className="d-none d-md-block">
    <ul className="wd-navigation"> 

      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
    </div>
    </div>
  );

 
}
export default CourseNavigation;