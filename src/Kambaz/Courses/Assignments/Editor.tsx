import { Form, Button, Row, Col } from "react-bootstrap";
import {useParams} from "react-router";
import * as db from "../../Database";
import { parse, format } from "date-fns";

export default function AssignmentEditor() {
  const {cid, aid} = useParams();
  const assignment = db.assignments.find(
    (assignment:any) => assignment._id === aid && assignment.course === cid);
    if (!assignment) {
      return <div className="text-danger">Assignment not found</div>;}
    const formatDate = (dateString: string) => {
      try {
        const parsed = parse(dateString, "MMMM d, yyyy 'at' hh:mm a", new Date());
        return format(parsed, "yyyy-MM-dd"); 
      } catch {
        return "";
      }
    };
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <Form>
          <Form.Group controlId="wd-name" className="mb-3">
            <Form.Control type="text" value={assignment.title} />
          </Form.Group>

          <Form.Group controlId="wd-description" className="mb-3">
            <Form.Control
              as="textarea"
              rows={14}
              defaultValue={assignment ? assignment.description : ""}
                />
        </Form.Group>

        <Row className = "mb-3">
          <Col md={3} className="text-end">
              <Form.Label htmlFor="wd-points">Points</Form.Label>
          </Col>
          <Col md={9}>
              <Form.Control type="number" id="wd-points" defaultValue={assignment.points} />
          </Col>
        </Row>

        <Row className = "mb-3">
          <Col md={3} className="text-end">
              <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
          </Col>
          <Col md={9}>
              <Form.Select id="wd-group">
                <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZ">QUIZ</option>
                <option value="PROJECT">PROJECT</option>
                <option value="EXAM">EXAM</option>
              </Form.Select>
            </Col>
        </Row>

        <Row className = "mb-3">
          <Col md={3} className="text-end">
              <Form.Label htmlFor="wd-display-grade-as">Display Grade As</Form.Label>
          </Col>
          <Col md={9}>
              <Form.Select id="wd-display-grade-as">
                <option selected value="PERCENTAGE">Percentage</option>
                <option value="LETTER">Letter</option>
              </Form.Select>
          </Col>
        </Row>

        <Row className = "mb-3">
          <Col md={3} className="text-end">
              <Form.Label htmlFor="wd-submission-type">Submission Type</Form.Label>
          </Col>
          <Col md={9}>
              <div className="border rounded p-3">
                <Form.Select id="wd-submission-type">
                  <option selected value="ONLINE">Online</option>
                  <option value="IN-PERSON">In person</option>
                </Form.Select>
                <br />
                <br />
                <Form.Label className="fw-bold">Online Entry Options</Form.Label>
                <br />
                <Form.Check
                  type="checkbox"
                  id="wd-text-entry"
                  label="Text Entry"
                />
                <br />
                <Form.Check
                  type="checkbox"
                  id="wd-website-url"
                  label="Website URL"
                />
                <br />
                <Form.Check
                  type="checkbox"
                  id="wd-media-recordings"
                  label="Media Recordings"
                />
                <br />
                <Form.Check
                  type="checkbox"
                  id="wd-student-annotation"
                  label="Student Annotation"
                />
                <br />
                <Form.Check
                  type="checkbox"
                  id="wd-file-upload"
                  label="File Uploads"
                />
              </div>
          </Col>
        </Row>

        <Row className = "mb-3">
          <Col md={3} className="text-end">
              <Form.Label htmlFor="wd-assign-to">Assign</Form.Label>
          </Col>
          <Col md={9}>
            <div className="border rounded p-3">
              <Form.Label htmlFor="wd-assign-to" className="fw-bold">Assign to</Form.Label><br />
              <Form.Select id="wd-assign-to">
                <option selected value="EVERYONE">Everyone</option>
                <option value="STUDENTS">Students</option>
                <option value="INSTRUCTORS">Instructors</option>
              </Form.Select>
              <br />
              <br />
              <Form.Label htmlFor="wd-due-date" className="fw-bold">Due</Form.Label><br />
              <Form.Control
                id="wd-due-date"
                type="date"
                defaultValue={formatDate(assignment.dueDate)}
              />
              <br />
              <br />
              <Row>
                <Col md={6}>
                  <Form.Label htmlFor="wd-available-from" className="fw-bold">Available from</Form.Label>
                  <Form.Control
                    id="wd-available-from"
                    type="date"
                    defaultValue={formatDate(assignment.notAvailableUntil)}
                  />
                </Col>
                <Col md={6}>
                  <Form.Label htmlFor="wd-available-until" className="fw-bold">Until</Form.Label>
                  <Form.Control
                    id="wd-available-until"
                    type="date"
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <hr />

        <div className="d-flex justify-content-end gap-2 mt-4">
          <Button variant="secondary" as="a" href={`#/Kambaz/Courses/${assignment.course}/Assignments`}>Cancel</Button>
          <Button variant="danger" as="a" href={`#/Kambaz/Courses/${assignment.course}/Assignments`}>Save</Button>
        </div>
      </Form>
    </div>

  );
}
