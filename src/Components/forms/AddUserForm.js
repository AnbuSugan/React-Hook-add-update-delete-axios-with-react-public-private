import React, { useState } from "react";
import "./AddUserForm.css";
import axios from "axios";

const AddUserForm = (props) => {
  const initialFormState = {
    id: null,
    coursename: "",
    coursedescription: "",
    courseprice: "",
    courseduration: "",
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const saveCourse = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/create",
        user
      );

      console.log(response.data);
    } catch (error) {
      console.error("API Error:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="addUserTittle">
      <h2>Add Course</h2>
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
          setUser(initialFormState);
        }}
      >
        <label className="courseNameLabel">Course Name:</label>
        <br />
        <input
          type="text"
          name="coursename"
          onChange={handleInputChange}
          value={user.coursename}
          className="coursenameInput"
        />{" "}
        <br />
        <label className="coursedescriptionLabel">Course Description:</label>
        <br />
        <textarea
          type="text"
          name="coursedescription"
          onChange={handleInputChange}
          value={user.coursedescription}
          className="me-4 coursedescriptionInput"
        />
        <br />
        <label className="coursePriceLabel">Course Price:</label>
        <br />
        <input
          type="text"
          name="courseprice"
          onChange={handleInputChange}
          value={user.courseprice}
          className="me-4 coursePriceInput"
        />
        <br />
        <label className="courseDurationLabel">Course Duration:</label>
        <br />
        <input
          type="text"
          name="courseduration"
          onChange={handleInputChange}
          value={user.courseduration}
          className="me-4 courseDurationInput"
        />
        <br />
        <button
          onClick={() => {
            saveCourse();
          }}
          className="addNewButton"
        >
          Add New Courses
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
