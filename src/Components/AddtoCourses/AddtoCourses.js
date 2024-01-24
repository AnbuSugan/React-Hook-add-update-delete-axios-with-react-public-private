import React, { useState } from "react";
import "./AddtoCourses.css";
import UserTable from "../tables/UserTable";
import AddUserForm from "../forms/AddUserForm";
import EditUserForm from "../forms/EditUserForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddtoCourses = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const initialFormState = {
    id: null,
    coursename: "",
    coursedescription: "",
    courseprice: "",
    courseduration: "",
  };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      coursename: user.coursename,
      coursedescription: user.coursedescription,
      courseprice: user.courseprice,
      courseduration: user.courseduration,
    });
  };

  const updateUser = (id, updatedUser) => {
    axios
      .put(`http://localhost:3001/api/update/${id}`, updatedUser)
      .then((res) => {
        console.log(res.data);

        navigate("/AddtoCourses");
        setEditing(false);

        setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
      })
      .catch((err) => console.log(err));
  };

  const [editing, setEditing] = useState(false);

  return (
    <div className="courseDetails">
      <h1>Course Details</h1>
      <div>
        <div>
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <AddUserForm />
            </div>
          )}
        </div>

        <div>
          <UserTable editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default AddtoCourses;
