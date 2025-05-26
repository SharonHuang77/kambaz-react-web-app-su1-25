import { ListGroup } from "react-bootstrap";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { FaInbox } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";
export default function KambazNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kambaz/Dashboard",
                          icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kambaz/Dashboard",
                          icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kambaz/Calendar",
                          icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kambaz/Inbox",
                          icon: FaInbox },
    { label: "Help",     path: "/Kambaz/Help",
                          icon: BiHelpCircle },
    { label: "Labs",      path: "/Labs",
                          icon: LiaCogSolid },
  ];
  return (
    <ListGroup style={{width: 120}}
        className="rounded-0 bg-black
          position-fixed bottom-0 top-0 z-2
          d-none d-md-block"
        id="wd-kambaz-navigation">
      <ListGroup.Item target="_blank" action
          href="https://www.northeastern.edu/"
          className="bg-black border-0 text-center"
          id="wd-neu-link">
        <img src="/images/NEU.png" width="75px" />
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/Kambaz/Account"
        className={`text-center border-0 bg-black
        ${pathname.includes("Account") ?
        "bg-white text-danger" :
        "bg-black text-white"}`}>
      <FaRegCircleUser className={`fs-1
        ${pathname.includes("Account") ?
          "text-danger" :
          "text-white"}`} />
        <br /> Account
      </ListGroup.Item>
      {links.map((link) => (
        <ListGroup.Item 
          key={link.path} 
          as={Link}
          to={link.path}
          className={`bg-black text-center border-0
            ${pathname.includes(link.label) ?
              "text-danger bg-white" :
              "text-white bg-black"}`}>
            {link.icon({ className: "fs-1 text-danger"})}
          <br /> {link.label}
        </ListGroup.Item>
        ))
      }
    </ListGroup>
);}






// import { ListGroup } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoCalendarOutline } from "react-icons/io5";
// import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
// import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

// export default function KambazNavigation() {
//   return (
//     <ListGroup id="wd-kambaz-navigation" style={{ width: 120 }} 
//     className="rounded-0 position-fixed
//     bottom-0 top-0 z-2 d-none d-md-block bg-black">
//       <ListGroup.Item
//         className = "list-group-item bg-black border-0 text-center"
//         action 
//         href="https://www.northeastern.edu/" 
//         id="wd-neu-link" 
//         target="_blank">
//         <img src="/images/NEU.png" width="75px" />
//       </ListGroup.Item>
//       <ListGroup.Item 
//         to="/Kambaz/Account" 
//         as={Link}
//         className="text-center border-0 bg-black text-white">
//         <FaRegCircleUser className="fs-1 text-white" />
//         <br />
//         Account 
//       </ListGroup.Item>
//       <ListGroup.Item 
//         to="/Kambaz/Dashboard" 
//         as={Link}
//         className="text-center border-0 bg-white text-danger">
//         <AiOutlineDashboard className="fs-1 text-danger" />
//         <br />
//         Dashboard 
//       </ListGroup.Item>
//       <ListGroup.Item 
//         to="/Kambaz/Dashboard" 
//         as={Link}
//         className="text-center border-0 text-white bg-black">
//         <LiaBookSolid className="fs-1 text-danger" />
//         <br />
//         Courses 
//       </ListGroup.Item>
//       <ListGroup.Item 
//         to="/Kambaz/Calendar" 
//         as={Link}
//         className="text-center border-0 text-white bg-black">
//         <IoCalendarOutline className="fs-1 text-danger" />
//         <br />
//         Calendar
//       </ListGroup.Item>
//       <ListGroup.Item 
//         to="/Kambaz/Inbox" 
//         as={Link}
//         className="text-center border-0 text-white bg-black">
//         <FaInbox className="fs-1 text-danger" />
//         <br />
//         Inbox
//       </ListGroup.Item>
//       <ListGroup.Item 
//         to="/Labs" 
//         as={Link}
//         className="text-center border-0 text-white bg-black">
//         <LiaCogSolid className="fs-1 text-danger" />
//         <br />
//         Labs
//       </ListGroup.Item>
//     </ListGroup>
//   );
// }
