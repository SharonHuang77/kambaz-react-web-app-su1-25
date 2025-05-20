import { Button } from "react-bootstrap";
import { IoSearch, IoAdd } from "react-icons/io5";

export default function AssignmentControls() {
  return (
    <div id="wd-assignments-controls" 
    className="d-flex align-items-center justify-content-between my-3">
        <div className="search-container">
            <IoSearch className="search-icon" />
            <input
            type="text"
            className="form-control ps-5"
            placeholder="Search for Assignment"
            id="wd-search-assignment"
            />
        </div>
        <div className="d-flex align-items-center ms-auto gap-2">
            <Button
            variant="secondary"
            size="sm"
            id="wd-add-assignment-group"
            >
            <IoAdd className="me-1" />
            Group
            </Button>
            <Button
            variant="danger"
            size="sm"
            id="wd-add-assignment"
            >
            <IoAdd className="me-1" />
            Assignment
            </Button>
      </div>
    </div>
  );
}