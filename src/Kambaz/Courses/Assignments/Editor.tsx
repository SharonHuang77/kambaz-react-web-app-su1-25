export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <form>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols={30} rows={10}>
          The assignment is available online Submit a link to the landing page of your 
          Web application running on Netlify.The landing page should include the following: 
          Your full name and section Links to each of the lab assignments Link to the kanbas
          application Links to all relevant source code repositories The kanbas application
          should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
          <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
                <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZ">QUIZ</option>
                <option value="PROJECT">PROJECT</option>
                <option value="EXAM">EXAM</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
                <option selected value="PERCENTAGE">Percentage</option>
                <option value="LETTER">Letter</option>
            </select>
          </td>
        </tr>
        <br /> 
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
                <option selected value="ONLINE">Online</option>
                <option value="IN-PERSON">In person</option>
            </select><br />
            <br />
            <label>Online Entry Options</label>
                <br/>
                <input type="checkbox" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br/>
                <input type="checkbox" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label>
                <br/>
                <input type="checkbox" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label>
                <br/>
                <input type="checkbox" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label>
                <br/>
                <input type="checkbox" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label><br />
            <select id="wd-assign-to">
                <option selected value="EVERYONE">Everyone</option>
                <option value="STUDENTS">Students</option>
                <option value="INSTRUCTORS">Instructors</option>
            </select>
          <br />
          <br />
            <label htmlFor="wd-due-date">Due</label><br />
            <input id="wd-due-date" type="date" value="2024-05-13" />
          <br />
          <br />
            <table>
                <tr>
                    <td>
                    <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td>
                    <label htmlFor="wd-available-until">Until</label>
                    </td>
                </tr>
                <tr>
                    <td>
                    <input id="wd-available-from" type="date" value="2024-05-06" />
                    </td>
                    <td>
                    <input id="wd-available-until" type="date" value="2024-05-20" />
                    </td>
                </tr>
            </table>
          </td>
        </tr>
        <br />     
      </table>
      <hr />
      <table width="100%">
        <tr>
            <td align="right">
            <button>Cancel</button>
            <button>Save</button>
            </td>
        </tr>
      </table>
      </form>
    </div>
  );
}
