import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import AssignmentTitle from "./AssignmentTitle";
import { IoChevronDown } from "react-icons/io5";
import { MdEditNote } from "react-icons/md";
import GreenCheckmark from "../Modules/GreenCheckmark";
import AssignmentControlButtons from "./AssignmentControlButtons";
import ExamTitle from "./ExamTitle";
import {useParams} from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const {cid} = useParams();
  const assignments = db.assignments;
    return (
      <div id="wd-assignments">
        <AssignmentControls /><br /><br />
        <ListGroup className="rounded-0" id="wd-assignments-title">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              <IoChevronDown className="me-2 text-muted" />
                ASSIGNMENTS
              <AssignmentTitle />
            </div>
            {assignments
            .filter((assignment:any) => assignment.course === cid)
            .map((assignment:any) => (
                <ListGroup className="wd-assignment rounded-0">
                  <ListGroup.Item className="wd-assignment px-3 py-3 d-flex justify-content-between align-items-center">
                    <div className="me-3 d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3" />
                      <MdEditNote className="me-2 fs-3" style={{ color: 'green' }} />
                    </div>

                    <div className="flex-grow-1">
                      <a
                        href={`#/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}`}
                        className="fw-semibold text-dark text-decoration-none"
                      >
                        {assignment._id}
                      </a>
                      <div className="text-muted small">
                        <span className="text-danger">Multiple Modules</span> |
                        <strong className="ms-1">Not available until</strong> {assignment.notAvailableUntil} |
                        <strong className="ms-1">Due</strong> {assignment.dueDate}| {assignment.points} pts
                      </div>
                    </div>
                    <div className="d-flex align-items-center ms-3">
                      <GreenCheckmark />
                      <AssignmentControlButtons />
                    </div>
                   </ListGroup.Item>
                </ListGroup>
                ))}
              </ListGroup.Item>

            {/* <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                <IoChevronDown className="me-2 text-muted" />
                 ASSIGNMENTS 
                <AssignmentTitle />
              </div>
              <ListGroup className="wd-assignment rounded-0">
                <ListGroup.Item className="wd-assignment px-3 py-3 d-flex justify-content-between align-items-center">
                  <div className="me-3 d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdEditNote className="me-2 fs-3" style={{ color: 'green' }} />
                  </div>

                  <div className="flex-grow-1">
                    <a
                      href="#/Kambaz/Courses/1234/Assignments/123"
                      className="fw-semibold text-dark text-decoration-none"
                    >
                      A1
                    </a>
                    <div className="text-muted small">
                      <span className="text-danger">Multiple Modules</span> |
                      <strong className="ms-1">Not available until</strong> May 6 at 12:00am |
                      <strong className="ms-1">Due</strong> May 13 at 11:59pm | 100 pts
                    </div>
                  </div>
                  <div className="d-flex align-items-center ms-3">
                    <GreenCheckmark />
                    <AssignmentControlButtons />
                  </div>
                 </ListGroup.Item>
              </ListGroup>

            </ListGroup.Item>
          </ListGroup> */}

          <ListGroup className="rounded-0" id="wd-assignments-title">
            <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                <IoChevronDown className="me-2 text-muted" />
                 QUIZS
                <ExamTitle />
              </div>
              <ListGroup className="wd-assignment rounded-0">
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>


          <ListGroup className="rounded-0" id="wd-assignments-title">
            <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                <IoChevronDown className="me-2 text-muted" />
                 EXAMS
                <ExamTitle />
              </div>
              <ListGroup className="wd-assignment rounded-0">
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup className="rounded-0" id="wd-assignments-title">
            <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                <IoChevronDown className="me-2 text-muted" />
                 Project
                <ExamTitle />
              </div>
            </ListGroup.Item>
          </ListGroup>

        </ListGroup>
      </div>
  );
}
  