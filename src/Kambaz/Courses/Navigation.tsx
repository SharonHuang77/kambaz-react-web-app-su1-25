import { Link, useLocation, useParams } from "react-router-dom";
import {courses} from "../Database";


export default function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { pathname } = useLocation();
  const { cid } = useParams();
  // const course = courses.find((course) => course._id === cid);
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0 d-none d-md-block">
      {links.map((link) => (
        <Link to={`/Kambaz/Courses/${cid}/${link}`}
          key={link} 
          id={`wd-course-${link.toLowerCase()}-link`}
          className={`list-group-item text-danger border border-0
            ${pathname.includes(link) ? "active" : ""}`}>
          {link}
        </Link>
      ))}
      {/* <Link to={`/Kambaz/Courses/${cid}/Home`} id="wd-course-home-link"
      className="list-group-item active border border-0">Home</Link>
      <Link to={`/Kambaz/Courses/${cid}/Modules`} id="wd-course-modules-link"
      className="list-group-item text-danger border border-0">Modules</Link>
      <Link to={`/Kambaz/Courses/${cid}/Piazza`} id="wd-course-piazza-link"
      className="list-group-item text-danger border border-0">Piazza</Link>
      <Link to={`/Kambaz/Courses/${cid}/Zoom`} id="wd-course-zoom-link"
      className="list-group-item text-danger border border-0">Zoom</Link>
      <Link to={`/Kambaz/Courses/${cid}/Assignments`} id="wd-course-quizzes-link"
      className="list-group-item text-danger border border-0">Assignments</Link>
      <Link to={`/Kambaz/Courses/${cid}/Quizzes`} id="wd-course-assignments-link"
      className="list-group-item text-danger border border-0">Quizzes</Link>
      <Link to={`/Kambaz/Courses/${cid}/Grades`} id="wd-course-grades-link"
      className="list-group-item text-danger border border-0">Grades</Link>
      <Link to={`/Kambaz/Courses/${cid}/People`} id="wd-course-people-link"
      className="list-group-item text-danger border border-0">People</Link> */}
    </div>
  );}

