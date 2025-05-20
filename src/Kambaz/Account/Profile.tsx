import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Profile() {
    return (
    <div id="wd-profile-screen">
        <h1>Profile</h1>
        <Form.Control id="wd-username" 
                placeholder="alice"
                className="mb-2"/>
        <Form.Control id="wd-password"
                placeholder="123" type="password"
                className="mb-2"/>
        <Form.Control id="wd-firstname"
                placeholder="Alice"
                className="mb-2"/>
        <Form.Control id="wd-lastname"
                placeholder="Wonderland"
                className="mb-2"/>
        <Form.Control id="wd-dob"
                placeholder="2000-01-01" type="date"
                className="mb-2"/>
        <Form.Control id="wd-email"
                placeholder="alice@wonderland"
                type="email"
                className="mb-2"/>
        <Form.Select id="wd-role" className="mb-2">
            <option selected value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
        </Form.Select>
        <Link id="wd-signout-btn" to="/Kambaz/Account/Signin" className="btn btn-danger w-100 mb-2">Signout</Link>
    </div>
  );
}
