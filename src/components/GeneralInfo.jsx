import { useState } from "react";

function GeneralInfo() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  function handleSubmitClick(event) {
    event.preventDefault();
    setIsEditing(false);
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  return (
    <section className="general-info">
      {isEditing ? (
        <>
          <h2>General Information</h2>
          <form>
            <div className="form-group">
              <label>Full Name:</label>
              <input
                type="text"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </div>

            <button type="submit" onClick={handleSubmitClick}>
              Submit
            </button>
          </form>
        </>
      ) : (
        <>
          <h2>General Information</h2>
          <div className="info-display">
            <p>
              <strong>Name:</strong> {fullName}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Phone:</strong> {phoneNumber}
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

export default GeneralInfo;
