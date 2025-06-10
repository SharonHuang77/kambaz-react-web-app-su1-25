import { Navigate, Route, Routes } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./KambazNavigation";
import "./styles.css";

import ProtectedRoute from "./Account/ProtectedRoute";
import ProtectedCourseRoute from "./Courses/ProctedCourseRoute";
import Courses from "./Courses";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";


export default function Kambaz() {
    const [courses, setCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [course, setCourse] = useState<any>({
      _id: "1234",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      description: "New Description",
    });

    // const fetchCourses = async () => {
    //   let courses = [];
    //   try {
    //     const courses = await userClient.findMyCourses();
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    const fetchCourses = async () => {
      try {
        const fetchedCourses = await userClient.findMyCourses();
        console.log('Fetched courses:', fetchedCourses); //debug
        setCourses(fetchedCourses || []);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setCourses([]);
      }
    };

    const updateCourse = async () => {
      await courseClient.updateCourse(course);
      setCourses(courses.map((c) => {
          if (c._id === course._id) { return course; }
          else { return c; }
      })
      );
   };
  

    const addNewCourse = async () => {
      const newCourse = await userClient.createCourse(course);
      setCourses([ ...courses, newCourse ]);
    };

    const deleteCourse = async (courseId: string) => {
      await courseClient.deleteCourse(courseId);
      setCourses(courses.filter((course) => course._id !== courseId));
    };
  
    useEffect(() => {
      fetchCourses();
    }, [currentUser]);
  
    return (
      <Session>
          <div id="wd-kambaz">
              <KambazNavigation />
              <div className="wd-main-content-offset p-3"> 
              <Routes>
                  <Route path="/" element={<Navigate to="/Kambaz/Account" />} />
                  <Route path="/Account/*" element={<Account />} />
                  <Route path="/Dashboard/" element={
                    <ProtectedRoute>
                      <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                        fetchCourses={fetchCourses}
                      />
                    </ProtectedRoute>} />
                  <Route path="/Courses/:cid/*" element={
                    <ProtectedRoute>
                          <ProtectedCourseRoute>
                              <Courses />
                          </ProtectedCourseRoute>
                    </ProtectedRoute>} />
                  <Route path="/Calendar" element={<h1>Calendar</h1>} />
                  <Route path="/Inbox" element={<h1>Inbox</h1>} />
                  <Route path="/Help" element={<h1>Help</h1>} />
              </Routes>
              </div>
          </div>
      </Session>
    );
}