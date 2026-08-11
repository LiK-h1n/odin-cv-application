import { useState } from "react";

function PracticalExperience() {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainResponsibilities, setMainResponsibilities] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateUntil, setDateUntil] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  function handleSubmitClick(event) {
    event.preventDefault();
    setIsEditing(false);
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  return (
    <section class="experience-info">
      {isEditing ? (
        <>
          <h2>Practical Experience</h2>
          <form>
            <div class="form-group">
              <label>Company Name:</label>
              <input
                type="text"
                value={companyName}
                onChange={(event) => setCompanyName(event.target.value)}
              />
            </div>

            <div class="form-group">
              <label>Position Title:</label>
              <input
                type="text"
                value={positionTitle}
                onChange={(event) => setPositionTitle(event.target.value)}
              />
            </div>

            <div class="form-group">
              <label>Main Responsibilities:</label>
              <textarea
                value={mainResponsibilities}
                onChange={(event) =>
                  setMainResponsibilities(event.target.value)
                }
                rows="4"
              ></textarea>
            </div>

            <div class="form-group">
              <label>Date From:</label>
              <input
                type="text"
                value={dateFrom}
                onChange={(event) => setDateFrom(event.target.value)}
              />
            </div>

            <div class="form-group">
              <label>Date Until:</label>
              <input
                type="text"
                value={dateUntil}
                onChange={(event) => setDateUntil(event.target.value)}
              />
            </div>

            <button type="submit" onClick={handleSubmitClick}>
              Submit
            </button>
          </form>
        </>
      ) : (
        <>
          <h2>Practical Experience</h2>
          <div class="info-display">
            <p>
              <strong>Company:</strong> {companyName}
            </p>
            <p>
              <strong>Position:</strong> {positionTitle}
            </p>
            <p>
              <strong>Responsibilities:</strong> {mainResponsibilities}
            </p>
            <p>
              <strong>Duration:</strong> {dateFrom} - {dateUntil}
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

export default PracticalExperience;
