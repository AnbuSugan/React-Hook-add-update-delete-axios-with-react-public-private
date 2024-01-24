import React, { useEffect, useState } from "react";
import "./UserTable.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserTable = (props) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const retrieveCourses = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/findall");
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    retrieveCourses();
  }, [users]);

  const deleteCourse = (id) => {
    axios
      .delete(`http://localhost:3001/api/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/AddtoCourses");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="table">
      <h2>View Course</h2>
      <table className="tableDesighn">
        <thead>
          <tr>
            <th>CourseName</th>
            <th>CourseDescription</th>
            <th>CoursePrice</th>
            <th>CourseDuration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.coursename}</td>
                <td>{user.coursedescription}</td>
                <td>{user.courseprice}</td>
                <td>{user.courseduration}</td>

                <td>
                  <button
                    onClick={() => {
                      props.editRow(user);
                    }}
                  >
                    Edit
                  </button>

                  <button onClick={() => deleteCourse(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No Users</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
