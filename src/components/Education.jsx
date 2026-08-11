import { useState } from "react";
import "../styles/Section.css";

function Education() {
  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  function handleSubmitClick(event) {
    event.preventDefault();
    setIsEditing(false);
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  return (
    <section class="education-info">
      {isEditing ? (
        <>
          <h2>Education</h2>
          <form>
            <div class="form-group">
              <label>School Name:</label>
              <input
                type="text"
                value={schoolName}
                onChange={(event) => setSchoolName(event.target.value)}
              />
            </div>

            <div class="form-group">
              <label>Title of Study:</label>
              <input
                type="text"
                value={titleOfStudy}
                onChange={(event) => setTitleOfStudy(event.target.value)}
              />
            </div>

            <div class="form-group">
              <label>Date of Study:</label>
              <input
                type="text"
                value={dateOfStudy}
                onChange={(event) => setDateOfStudy(event.target.value)}
              />
            </div>

            <button type="submit" onClick={handleSubmitClick}>
              Submit
            </button>
          </form>
        </>
      ) : (
        <>
          <h2>Education</h2>
          <div class="info-display">
            <p>
              <strong>School:</strong> {schoolName}
            </p>
            <p>
              <strong>Degree:</strong> {titleOfStudy}
            </p>
            <p>
              <strong>Date:</strong> {dateOfStudy}
            </p>
            <button type="button" onClick={handleEditClick}>
              Edit
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Education;
