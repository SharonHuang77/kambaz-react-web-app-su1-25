import { ListGroup } from "react-bootstrap";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
    return (
      <div>
          <ModulesControls /><br /><br /><br /><br />
          <ListGroup className="rounded-0" id="wd-modules">
            <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons/>
              </div>
              <ListGroup className="wd-lessons rounded-0">
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
                 </ListGroup.Item>
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
                </ListGroup.Item>
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development <LessonControlButtons />
                </ListGroup.Item>
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" /> Lesson 1 <LessonControlButtons />
                </ListGroup.Item>
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" /> Lesson 2 <LessonControlButtons />
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> Week 2 <ModuleControlButtons/>
              </div>
              <ListGroup className="wd-lessons rounded-0">
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
                 </ListGroup.Item>
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" /> Learn how to create user interfaces with HTML <LessonControlButtons />
                </ListGroup.Item>
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" /> Deploy the assignment to Netlify <LessonControlButtons />
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
        </div>



      //   <button id="wd-collapse-all">Collapse All</button>
      //   <button id="wd-view-progress">View Progress</button>
      //   <select id="wd-filter">
      //       <option selected value="PublishAll">Publish All</option>
      //       <option value="W1L1">Publish Week 1, Lecture 1</option>
      //       <option value="W1L2">Publish Week 1, Lecture 2</option>
      //   </select>
      //   <button id="wd-add-module">+ Module</button>
      //   <ul id="wd-modules">
      //     <li className="wd-module">
      //       <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
      //       <ul className="wd-lessons">
      //         <li className="wd-lesson">
      //           <span className="wd-title">LEARNING OBJECTIVES</span>
      //           <ul className="wd-content">
      //             <li className="wd-content-item">Introduction to the course</li>
      //             <li className="wd-content-item">Learn what is Web Development</li>
      //           </ul>
      //         </li>
      //         <li>
      //           <span className="wd-title">READING</span>
      //           <ul className="wd-content">
      //             <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
      //             <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating Us</li>
      //           </ul>
      //         </li>
      //         <li>
      //           <span className="wd-title">SLIDES</span>
      //           <ul className="wd-content">
      //             <li className="wd-content-item">Introduction to Web Development</li>
      //             <li className="wd-content-item">Creating an HTTP sever with Node.js</li>
      //             <li className="wd-content-item">Creating a React Application</li>
      //           </ul>
      //         </li>
      //       </ul>
      //     </li>
      //     <li className="wd-module">
      //       <div className="wd-title">Week 1, Lecture 2 - Formatting user Interfaces with HTML</div>
      //       <ul className="wd-lessons">
      //         <li className="wd-lesson">
      //           <span className="wd-title">LEARNING OBJECTIVES</span>
      //           <ul className="wd-content">
      //             <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
      //             <li className="wd-content-item">Deploy the assignment to Netlify</li>
      //           </ul>
      //         </li>
      //         <li>
      //           <span className="wd-title">SLIDES</span>
      //           <ul className="wd-content">
      //             <li className="wd-content-item">Introduction to HTML and the DOM</li>
      //             <li className="wd-content-item">Formatting Web content with Headings and Paragraphs</li>
      //             <li className="wd-content-item">Formatting content with Lists and Tables</li>
      //           </ul>
      //         </li>
      //       </ul>
      //     </li>
      //   </ul>
      // </div>
  );
}
  