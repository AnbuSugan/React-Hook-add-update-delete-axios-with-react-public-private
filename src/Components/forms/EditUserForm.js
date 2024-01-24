import React, { useEffect, useState } from "react";
import "./EditUserForm.css";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  return (
    <div className="addUserTittle">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (
            !user.coursename ||
            !user.coursedescription ||
            !user.courseprice ||
            !user.courseduration
          )
            return;
          props.updateUser(user.id, user);
        }}
      >
        <label className="courseNameLabels">Course Name:</label>
        <br />
        <input
          type="text"
          name="coursename"
          onChange={handleInputChange}
          value={user.coursename}
          className="coursenameInputs"
        />{" "}
        <br />
        <label className="coursedescriptionLabels">Course Description:</label>
        <br />
        <textarea
          type="text"
          name="coursedescription"
          onChange={handleInputChange}
          value={user.coursedescription}
          className="me-4 coursedescriptionInputs"
        />
        <br />
        <label className="coursePriceLabels">Course Price:</label>
        <br />
        <input
          type="text"
          name="courseprice"
          onChange={handleInputChange}
          value={user.courseprice}
          className="me-4 coursePriceInputs"
        />
        <br />
        <label className="courseDurationLabels">Course Duration:</label>
        <br />
        <input
          type="text"
          name="courseduration"
          onChange={handleInputChange}
          value={user.courseduration}
          className="me-4 courseDurationInputs"
        />
        <br />
        <button className="updateUsersButton">Update user</button>
        <button
          onClick={() => {
            props.setEditing(false);
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUserForm;
