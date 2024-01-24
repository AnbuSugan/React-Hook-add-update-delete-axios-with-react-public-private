import React from "react";
import "./Register.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/register",
        values
      );

      alert("Registration completed successfully");
      navigate("/Login");
    } catch (error) {
      console.error(error);
      alert("Error during registration");
    }
  };

  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    date: yup.string().required(),
    email: yup
      .string()
      .required()
      .matches(/@/, 'Email must contain "@" symbol'),
    mobileNumber: yup
      .string()
      .required()
      .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits"),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    userName: yup.string().required(),
    password: yup.string().required(),
  });

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
              <div className="registerPage ms-5">
                <Formik
                  className="form"
                  validationSchema={schema}
                  onSubmit={handleSubmit}
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    date: "",
                    email: "",

                    mobileNumber: "",
                    city: "",
                    state: "",
                    zip: "",
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
                      <Row>
                        <h1 className="headSign mt-2"> SignUp</h1>
                        <Col>
                          <Form.Group
                            controlId="validationFormik101"
                            className="position-relative"
                          >
                            <Form.Group className="position-relative mb-2">
                              <Form.Label className="firstNameLabel">
                                First Name
                              </Form.Label>
                              <Form.Control
                                type="firstName"
                                required
                                name="firstName"
                                onChange={handleChange}
                                isInvalid={!!errors.firstName}
                                isValid={touched.firstName && !errors.firstName}
                                className="firstName"
                                placeholder="FirstName"
                              />
                            </Form.Group>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group
                            as={Col}
                            controlId="validationFormik101"
                            className="position-relative"
                          >
                            <Form.Group className="position-relative mb-2">
                              <Form.Label className="lastNameLabel ">
                                Last Name
                              </Form.Label>
                              <Form.Control
                                type="lastName"
                                required
                                name="lastName"
                                onChange={handleChange}
                                value={values.lastName}
                                isInvalid={!!errors.lastName}
                                isValid={touched.lastName && !errors.lastName}
                                className="lastName"
                                placeholder="LastName"
                              />
                            </Form.Group>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group className="position-relative mb-2">
                            <Form.Label className="dateLabel">
                              Date of Birth
                            </Form.Label>
                            <Form.Control
                              type="date"
                              required
                              name="date"
                              value={values.date}
                              onChange={handleChange}
                              isInvalid={!!errors.date}
                              isValid={touched.date && !errors.date}
                              className="date"
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="position-relative mb-2">
                            <Form.Label className="emailLabel">
                              Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              required
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              isInvalid={!!errors.email}
                              isValid={touched.email && !errors.email}
                              className="email"
                              placeholder="Email"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group
                            as={Col}
                            controlId="validationFormik"
                            className="position-relative"
                          >
                            <Form.Label className="mobileNumberLabel mb-2">
                              MobileNumber
                            </Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="Mobilenumber"
                              name="mobileNumber"
                              value={values.mobileNumber}
                              onChange={handleChange}
                              isInvalid={!!errors.mobileNumber}
                              isValid={
                                touched.mobileNumber && !errors.mobileNumber
                              }
                              className="mobileNumber"
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group
                            as={Col}
                            controlId="validationFormik103"
                            className="position-relative"
                          >
                            <Form.Label className="cityLabel mb-2">
                              City
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="City"
                              name="city"
                              value={values.city}
                              onChange={handleChange}
                              isValid={touched.city && !errors.city}
                              isInvalid={!!errors.city}
                              className="city"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group
                            as={Col}
                            controlId="validationFormik104"
                            className="position-relative"
                          >
                            <Form.Label className="stateLabel mb-2">
                              State
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="State"
                              name="state"
                              value={values.state}
                              onChange={handleChange}
                              isValid={touched.state && !errors.state}
                              isInvalid={!!errors.state}
                              className="state"
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group
                            as={Col}
                            controlId="validationFormik105"
                            className="position-relative"
                          >
                            <Form.Label className="zipLabel mb-2">
                              Zip
                            </Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="Zip"
                              name="zip"
                              value={values.zip}
                              onChange={handleChange}
                              isInvalid={!!errors.zip}
                              isValid={touched.zip && !errors.zip}
                              className="zip"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group
                            as={Col}
                            controlId="validationFormik105"
                            className="position-relative"
                          >
                            <Form.Label className="userNameLabel mb-2">
                              UserName
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Username"
                              name="userName"
                              value={values.userName}
                              onChange={handleChange}
                              isValid={touched.userName && !errors.userName}
                              isInvalid={!!errors.userName}
                              className="userName"
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group
                            as={Col}
                            controlId="validationFormik105"
                            className="position-relative"
                          >
                            <Form.Label className="passwordLabel mb-2">
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
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button type="submit" className=" registerBtn mt-2">
                        Register
                      </Button>
                      <h5 className="mt-3 text-black">Let's Signin</h5>{" "}
                      <Link to="/Login" type="submit" className=" ">
                        Signin
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

export default Register;
