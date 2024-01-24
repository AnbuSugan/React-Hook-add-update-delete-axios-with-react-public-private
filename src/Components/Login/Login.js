import React, { useState } from "react";
import "./Login.css";
import { Container } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { useAuth } from "../auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/login",
        values
      );

      console.log("API Response:", response.data);

      if (response.status === 200) {
        console.log("Login successful");
        auth.login(userName);
        navigate(redirectpath, { replace: true });
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setSubmitting(false);
    }
  };
  const redirectpath = location.state?.path || "/AddtoCourses";

  const { Formik } = formik;

  const schema = yup.object().shape({
    userName: yup.string().required(),
    password: yup.string().required(),
  });
  const [userName, setUser] = useState("");
  const auth = useAuth();

  return (
    <div>
      <div className="headbg">
        <Container className="headwrapper1">
          <Row>
            <Col lg={6} className="order-2 order-lg-1">
              <div className="headwrapper">
                <h1 className="mt-5">Tech Career Programs</h1>

                <p className="headpara">
                  <ul>
                    <li className="fs-3 mb-2">100% Job Placement Support.</li>
                    <li className="fs-3 mb-2">
                      Mentors from Top Global Product companies.
                    </li>
                    <li className="fs-3 mb-2">
                      A Portfolio of Real-world Projects.
                    </li>
                    <li className="fs-3 mb-2">
                      Globally Recognized Certification.
                    </li>
                  </ul>
                </p>
                <h3>Live Classes available in English, தமிழ்</h3>
                <div className="clientcount">
                  <Row className="gy-4">
                    <Col className="col-xs-6 col-sm-3 col-lg-3 ">
                      <div>
                        <p className="clientCountNumber1">
                          2000<sup>+</sup>
                        </p>

                        <p className="fs-5 clientCountLetter1">Students</p>
                      </div>
                    </Col>

                    <Col className="col-xs-6 col-sm-3 col-lg-3">
                      <div>
                        <p className="clientCountNumber2">
                          10<sup>+</sup>
                        </p>

                        <p className="fs-5 clientCountLetter2">Courses</p>
                      </div>
                    </Col>

                    <Col className="col-xs-6 col-sm-3 col-lg-3">
                      <div>
                        <p className="clientCountNumber3">
                          30<sup>+</sup>
                        </p>

                        <p className="fs-5 clientCountLetter3">Staffs</p>
                      </div>
                    </Col>

                    <Col className="col-xs-6 col-sm-3 col-lg-3">
                      <div>
                        <p className="clientCountNumber4">
                          30000<sup>+</sup>
                        </p>

                        <p className="fs-5 clientCountLetter4">
                          Students Placed
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={6} className="order-1 order-lg-2">
              <div className="registerPages ms-5">
                <Formik
                  className="form"
                  validationSchema={schema}
                  onSubmit={handleSubmit}
                  initialValues={{
                    userName: "",
                    password: "",
                  }}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    errors,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <h1 className="headSign mt-2"> Signin</h1>
                      <Form.Group
                        as={Col}
                        controlId="validationFormik105"
                        className="position-relative"
                      >
                        <Form.Label className="userNameLabels mb-2">
                          UserName
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Username"
                          name="userName"
                          value={values.userName}
                          onChange={(e) => {
                            handleChange(e);
                            setUser(e.target.value);
                          }}
                          isValid={touched.userName && !errors.userName}
                          isInvalid={!!errors.userName}
                          className="userName"
                          id="userName"
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        controlId="validationFormik105"
                        className="position-relative"
                      >
                        <Form.Label className="passwordLabels mb-2">
                          Password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                          isValid={touched.password && !errors.password}
                          className="password"
                          id="password"
                        />
                      </Form.Group>
                      <Button type="submit" className=" registerBtn mt-2">
                        Login
                      </Button>
                      <h5 className="mt-3 text-black">Let's Signin</h5>{" "}
                      <Link to="/Register" type="submit">
                        Register
                      </Link>{" "}
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Login;
