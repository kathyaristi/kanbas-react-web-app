import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt,FaQuestionCircle,FaBackward, FaTv, FaHistory, FaEnvelope } from "react-icons/fa";
import Highlight from "../../Labs/a3/Highlight";
 
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2 wIcon" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 rIcon" />  },
    { label: "Courses",   icon: <FaBook className="fs-2 rIcon" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2 rIcon" /> },
    { label: "Inbox",   icon: <FaEnvelope className="fs-2 rIcon" />  },
    { label: "History", icon: <FaHistory className="fs-2 rIcon" />  },
    { label: "Studio",   icon: <FaTv className="fs-2 rIcon" />           },
    { label: "Commons",  icon: <FaBackward className="fs-2 rIcon" /> },
    { label: "Help",  icon: <FaQuestionCircle className="fs-2 rIcon" /> }

  ];
  const { pathname } = useLocation();
  return (
     
    <div className="wd-flex-row-container">
    <div className="d-none d-md-block">
    <ul className="wd-kanbas-navigation">
      <li>
     

        <Link to ={"http://northeastern.edu"}><img
          width="40"
          src="/images/northeastern_logo.webp"
        /></Link>
       
      </li>

      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
       <span style={{ color: "red" }}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
          </span>
        </li>
      ))}
      
    </ul>

    </div>
    </div>
  );
}
export default KanbasNavigation;