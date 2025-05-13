export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input placeholder="Search for Assignments"
               id="wd-search-assignment" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button> </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              A1 - ENV + HTML
            </a> 
            <p>Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am 
                | <strong>Due</strong> May 13 at 11:59pm | 100 pts</p>
          </li>
          <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              A2 - CSS + BOOTSTRAP
            </a> 
            <p>Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am 
            | <strong>Due</strong> May 20 at 11:59pm | 100 pts</p>
          </li>
          <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              A3 - JAVASCRIPT + REACT
            </a>
            <p>Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am 
            | <strong>Due</strong> May 2 at 11:59pm | 100 pts</p>
          </li>
        </ul>
        <h3 id="wd-quizzes-title">
          Quizzes 20% of Total <button>+</button> </h3>
        <ul id="wd-quizzes-list">
          <li className="wd-quizzes-list-item">
            <a href="#/Kambaz/Courses/1234/Quizzes/123"
               className="wd-quizzes-link" >
              Q1 - ENV + HTML
            </a> 
            <p>Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am 
                | <strong>Due</strong> May 13 at 11:59pm | 100 pts</p>
          </li>
          <li className="wd-quizzes-list-item">
          <a href="#/Kambaz/Courses/1234/Quizzes/123"
               className="wd-quizzes-link" >
              Q2 - CSS + BOOTSTRAP
            </a> 
            <p>Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am 
            | <strong>Due</strong> May 20 at 11:59pm | 100 pts</p>
          </li>
        </ul>
        <h3 id="wd-exams-title">
        Exams 20% of Total <button>+</button> </h3>
        <ul id="wd-exams-list">
          <li className="wd-exams-list-item">
            <a href="#/Kambaz/Courses/1234/Exams/123"
               className="wd-exams-link" >
              Exam 1
            </a> 
            <p>Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am 
                | <strong>Due</strong> May 20 at 11:59pm | 100 pts</p>
          </li>
          <li className="wd-exams-list-item">
            <a href="#/Kambaz/Courses/1234/Exams/123"
               className="wd-exams-link" >
              Exam 2
            </a> 
            <p>Multiple Modules | <strong>Not available until</strong> June 1 at 12:00am 
            | <strong>Due</strong> June 20 at 11:59pm | 100 pts</p>
          </li>
        </ul>
        <h3 id="wd-project-title">
        Project 20% of Total <button>+</button> </h3>
        <ul id="wd-project-list">
          <li className="wd-project-list-item">
            <a href="#/Kambaz/Courses/1234/Project/123"
               className="wd-Project-link" >
              Project
            </a> 
            <p>Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am 
                | <strong>Due</strong> June 20 at 11:59pm | 100 pts</p>
          </li>
        </ul>
      </div>
  );
}
  