import React from "react";
import "./Home.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

const Home = () => {
  return (
    <div>
      {/* Head Content */}
      <div className="headbg">
        <Container className="headwrapper1">
          <Row>
            <Col lg={6} className="order-2 order-lg-1">
              <div className="headwrapper">
                <h1>Tech Career Programs</h1>

                <p className="headpara">
                  <ul>
                    <li>100% Job Placement Support.</li>
                    <li>Mentors from Top Global Product companies.</li>
                    <li>A Portfolio of Real-world Projects.</li>
                    <li>Globally Recognized Certification.</li>
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
              <div className="heroimg">
                <img src="./assets/img_sm_11.jpg" alt="bg" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* About Page */}

      <Container>
        <Row>
          <Col lg={6} className="order-2 order-lg-1 mt-5">
            <h1 className="aboutwrapper fw-bold ">About Us</h1>
            <p className="aboutparawrapper">
              Enlight Educational Institude is one of the industry’s leading
              Project Based Career Programs that promises 100% Job Placement
              Support on completing the course. Conducted by an IIT Madras
              incubated company & designed by our Founders(Ex-Paypal Employees)
              also offers mentoring through experts from companies like Google,
              Microsoft, Flipkart, Zoho & Freshworks for placing you in top
              companies with high salaries.
            </p>

            <Col>
              <div className="diagram">
                <i class="bi bi-person-workspace"></i>
              </div>
            </Col>
            <Col>
              <h5 className="diagramwrappercontentheading1">
                Experiential Learning
              </h5>
              <p className="diagramwrappercontentheadingpara1">
                By engaging students in hands-on experiences and reflection,
                they are better able to connect theories and knowledge learned
                in the classroom to real-world situations.
              </p>
            </Col>
            <Col>
              <div className="diagram">
                <i class="bi bi-person-vcard-fill"></i>
              </div>
            </Col>
            <Col>
              <h5 className="diagramwrappercontentheading1">
                Regular Seminars
              </h5>
              <p className="diagramwrappercontentheadingpara1">
                A seminar may be a gathering of people for the purpose of
                discussing a stated topic. Such gath erings are usually
                interactive sessions where the participants engage in
                discussions on topics.
              </p>
            </Col>
            <Col>
              <div className="diagram">
                <i class="bi bi-microsoft-teams"></i>
              </div>
            </Col>
            <Col>
              <h5 className="diagramwrappercontentheading1">Guest Lectures</h5>
              <p className="diagramwrappercontentheadingpara1">
                Guest Lecture is a concept that helps the students in gaining
                additional knowledge. Universities and colleges make sur e to
                arrange a guest lecture for students in order to enhance their
                knowledge.
              </p>
            </Col>
          </Col>
          {/* Img*/}
          <Col lg={6} className="order-1 order-lg-2 mt-5">
            <div>
              <img
                src="./assets/img_sm_12.jpg"
                alt="bg"
                usemap="#image-map"
                className="glitboximage   img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <div>
              <Col>
                <div>
                  <div className="icon1 ">
                    <i class="bi bi-people-fill"></i>
                  </div>
                </div>
              </Col>
              <Col>
                <p className="fs-3 contenthead1 fw-bold ">Experience</p>
                <p className="content1">
                  Started at the year of 2014. Running successfully for the past
                  6+ years with well talented and experienced trainers.
                </p>
                <p className="contenticon1 fs-6 fw-bold">
                  Learn More<i class="bi bi-arrow-right"></i>
                </p>
              </Col>
            </div>
          </Col>
          {/* Transport Icon 2 */}
          <Col>
            <Col>
              <div>
                <div className="icon2">
                  <i class="bi bi-highlighter"></i>
                </div>
              </div>
            </Col>
            <Col>
              <p className="fs-3 contenthead2 fw-bold">Education</p>
              <p className="content2">
                All category of age persons can get knowledge on computer and
                Spoken English in simple and creative manner.
              </p>
              <p className="contenticon2 fs-6 fw-bold">
                Learn More<i class="bi bi-arrow-right"></i>
              </p>
            </Col>
          </Col>
          {/* Transport Icon 3 */}
          <Col>
            <Col>
              <div>
                <div className="icon3">
                  <i class="bi bi-laptop"></i>
                </div>
              </div>
            </Col>
            <Col>
              <p className="fs-3 contenthead3 fw-bold">Certificate</p>
              <p className="content3">
                Candidates can get National Approved certificates for all
                computer courses and company certificate for Internships.
              </p>
              <p className="contenticon3 fs-6 fw-bold">
                Learn More<i class="bi bi-arrow-right"></i>
              </p>
            </Col>
          </Col>
        </Row>
      </Container>

      {/* Card Program */}

      <Container>
        <Row>
          <Col>
            <div className="service">
              <h1 className="servicehead ">OUR SERVICES</h1>
            </div>
          </Col>
        </Row>
      </Container>
      {/* card 1 */}
      <Container>
        <Row>
          {/* card 1 */}
          <Col className="col-sm-8 col-md-6 col-lg-4">
            <Card className="mb-5 card card1 ">
              <Card.Img
                variant="top"
                src="./assets/img_sm_14.jpg"
                className="cardImg"
              />
              <Card.Body>
                <Card.Title>Full Stack Development Program</Card.Title>
                <Card.Text>
                  Master both front-end and back-end technologies, becoming a
                  versatile developer capable of creating full-fledged web
                  applications.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* card 2 */}
          <Col className="col-sm-8 col-md-6 col-lg-4">
            <Card className="mb-5 card2">
              <Card.Img
                variant="top"
                src="./assets/img_sm_15.jpg"
                className="cardImg"
              />
              <Card.Body>
                <Card.Title>
                  IIT-M Certified Advanced Programming Professional & Master
                  Data Science
                </Card.Title>
                <Card.Text>
                  Delve deep into advanced programming languages, algorithms,
                  and data structures.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* card 3 */}
          <Col className="col-sm-8 col-md-6 col-lg-4">
            <Card className="mb-5 cardThree card3">
              <Card.Img
                variant="top"
                src="./assets/img_sm_16.jpg"
                className="cardImg"
              />
              <Card.Body>
                <Card.Title>
                  Automation Testing using Selenium Program
                </Card.Title>
                <Card.Text>
                  Gain in-depth knowledge of Selenium, the industry-standard for
                  web automation testing.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="col-sm-8 col-md-6 col-lg-4">
            <Card className="mb-5 truckingCart card4">
              <Card.Img
                variant="top"
                src="./assets/img_sm_17.jpg"
                className="cardImg"
              />
              <Card.Body>
                <Card.Title>UI/UX Program</Card.Title>
                <Card.Text>
                  Learn to use industry-standard design tools such as Adobe XD,
                  Sketch, and Figma. Gain hands-on experience to turn your
                  design ideas into interactive prototypes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className=" col-sm-8 col-md-6 col-lg-4">
            <Card className="mb-5  packageCart card5">
              <Card.Img
                variant="top"
                src="./assets/img_sm_18.jpg"
                className="cardImg"
              />
              <Card.Body>
                <Card.Title>Java Automation Testing Program</Card.Title>
                <Card.Text>
                  Develop a strong foundation in Java programming, tailored
                  specifically for automation testing. Learn key concepts,
                  syntax, and principles necessary for effective test scripting.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className=" col-sm-8 col-md-6 col-lg-4">
            <Card className="mb-5 wareHouseCard card6">
              <Card.Img
                variant="top"
                src="./assets/img_sm_19.jpg"
                className="cardImg"
              />
              <Card.Body>
                <Card.Title>DevOps Program</Card.Title>
                <Card.Text>
                  Gain a solid understanding of DevOps principles, practices,
                  and culture. Explore the importance of collaboration,
                  communication, and continuous improvement in a DevOps
                  environment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call To Action */}

      <div className="bgImageCenter">
        <h3 className="bgImageCenterhaed">Started @2014</h3>
        <p className="text-light">
          Initially started as a Computer and Tuition Coaching center. Focus
          towards the welfare of the students in both academic and social
          welfare. Started a project development center with first class
          training and realtime practical demo for both Mini and Major academic
          projects. Our Institute collaborated with various IT companies at
          Madurai, Coimbatore and Chennai to deliver high class Internship
          Training and Placement Training for the Students.
        </p>
        <button className="buttonCall">Call To Acton</button>
      </div>

      {/* Feature */}

      <Container className="feature">
        <Row>
          <Col lg={6} className="order-1 order-lg-1">
            <div>
              <img
                src="./assets/img_sm_22.jpg"
                alt=""
                className="imgfeature w-75 h-75"
              />
            </div>
          </Col>
          <Col lg={6} className="order-2 order-lg-2">
            <h3 className="imgfeaturehead ">
              Future Scope of Full Stack Training
            </h3>
            <p className="imgfeaturepara">
              The future scope of the full-stack developer is promising as they
              will have skills and experience in every layer of website
              development that contains the presentation, business logic, and
              database layer. They will know numerous modernized technologies
              and frameworks to fasten up the website development and they
              should be experts in delivering quality and error-free websites to
              their clients within the deadline.
            </p>

            <p className="imgfeaturepara">
              <i class="bi bi-check check"></i>
              Companies are looking to hire fewer resources who are technically
              sound in various technologies such as React.js, JavaScript,
              MongoDB, and Python.
            </p>
            <p className="imgfeaturepara">
              {" "}
              <i class="bi bi-check check"></i>
              Diverse knowledge and skillsets for working in multiple projects
              with the ability of single-handed that brings more benefits for
              the organization.
            </p>
            <p className="imgfeaturepara">
              {" "}
              <i class="bi bi-check check"></i>
              Full-stack developers can give quality applications as they are
              taking care of whole areas such as designing, developing, testing,
              debugging, and deploying.
            </p>
          </Col>
        </Row>
      </Container>

      {/* feature 2 */}
      <Container className="feature2">
        <Row>
          <Col className="order-2 order-lg-1 feature2Content">
            <h4 className="imgfeaturehead2 ">Master Data Science</h4>
            <p className="imgfeaturepara2">
              Understanding statistical concepts, probability theory, and
              mathematical foundations is crucial for data analysis and
              modeling. Proficiency in programming languages like Python and R,
              as well as knowledge of algorithms and data structures, is
              essential. Learning techniques to collect and gather data from
              various sources, including databases, APIs, and web scraping.
              Dealing with missing values, outliers, and preparing raw data for
              analysis. Using statistical and visual tools to understand the
              patterns, relationships, and distributions within the
              data.Creating effective visualizations to communicate findings and
              insights to both technical and non-technical stakeholders.
              Understanding and implementing different machine learning
              algorithms for classification, regression, clustering, and
              dimensionality reduction.Assessing model performance and
              optimizing hyperparameters for better results.Handling and
              processing large-scale datasets using distributed computing
              technologies. Exploring advanced techniques like deep learning for
              tasks such as image recognition, natural language processing, and
              more. Tailoring data science techniques to specific industries
              like finance, healthcare, marketing, etc.
            </p>
          </Col>
          <Col className="order-1 order-lg-2">
            <div>
              <img
                src="./assets/img_sm_23.jpg"
                alt=""
                className="imgfeature2 "
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* feature 3 */}
      <Container className="feature3">
        <Row>
          <Col className="order-1 order-lg-1">
            <div>
              <img
                src="./assets/img_sm_24.jpg"
                alt=""
                className="imgfeature3 w-75"
              />
            </div>
          </Col>
          <Col className="order-2 order-lg-2">
            <h3 className="imgfeaturehead3">
              Automation Testing using Selenium Program
            </h3>
            <p className="imgfeaturepara3">
              Selenium is often used within a test automation framework. A test
              automation framework is a set of guidelines, coding standards, and
              tools that help in efficient and effective test automation.
            </p>

            <p className="imgfeaturepara3">
              <i class="bi bi-check check"></i>
              Selenium supports multiple programming languages, including Java,
              Python, C#, Ruby, and JavaScript. You choose a language based on
              your team's expertise and project requirements.
            </p>
            <p className="imgfeaturepara3">
              {" "}
              <i class="bi bi-check check"></i>
              The WebDriver is a key component of Selenium that allows you to
              interact with web browsers. You need to set up the WebDriver for
              the browser you intend to automate (e.g., ChromeDriver for Chrome,
              GeckoDriver for Firefox).
            </p>
            <p className="imgfeaturepara3">
              {" "}
              <i class="bi bi-check check"></i>
              Create test scripts using the chosen programming language. Test
              scripts are sequences of commands that interact with web elements
              on a webpage. You can locate elements using various locators such
              as ID, name, class name, XPath, etc.
            </p>
          </Col>
        </Row>
      </Container>

      {/* feature 4 */}
      <Container className="feature4">
        <Row>
          <Col className="order-2 order-lg-1">
            <h4 className="imgfeaturehead4">UI/UX Program</h4>
            <p className="imgfeaturepara4">
              Introduction to the principles of user-centered design,
              emphasizing the importance of designing products with the end user
              in mind.Conducting user research to understand the target
              audience, their behaviors, preferences, and pain points.
              Techniques may include surveys, interviews, and usability
              testing.Organizing and structuring information to create a clear
              and logical flow within the interface. This involves creating
              sitemaps and defining navigation structures.Creating low-fidelity
              wireframes to outline the basic structure and layout of a design.
              Prototyping involves building interactive, clickable models to
              simulate user interactions.Exploring color theory, typography,
              iconography, and other visual elements to create visually
              appealing and cohesive designs. Understanding design tools like
              Adobe XD, Sketch, or Figma.Defining how users interact with the
              interface, including the design of buttons, forms, animations, and
              other interactive elements. Planning and conducting usability
              tests to gather feedback on prototypes or existing designs.
              Analyzing results and iterating on designs based on user feedback.
            </p>
          </Col>
          <Col className="order-1 order-lg-2">
            <div>
              <img
                src="./assets/img_sm_25.jpg"
                alt=""
                className="imgfeature4 w-75"
              />
            </div>
          </Col>
        </Row>
      </Container>
      {/* feature 5 */}

      <Container className="feature5">
        <Row>
          <Col lg={6} className="order-1 order-lg-1">
            <div>
              <img
                src="./assets/img_sm_27.jpg"
                alt=""
                className="imgfeature5 w-75 h-75"
              />
            </div>
          </Col>
          <Col lg={6} className="order-2 order-lg-2">
            <h3 className="imgfeaturehead5">Java Automation Testing Program</h3>
            <p className="imgfeaturepara5">
              These are popular testing frameworks for Java that provide
              annotations and assertions to structure and execute test cases.
              They also support test grouping, parallel execution, and test
              parameterization.
            </p>

            <p className="imgfeaturepara5">
              <i class="bi bi-check check"></i>
              These build tools help manage project dependencies, including
              testing frameworks, libraries, and WebDriver. They also facilitate
              the execution of test suites.
            </p>
            <p className="imgfeaturepara5">
              {" "}
              <i class="bi bi-check check"></i>
              Selenium is a powerful tool for automating web browsers. WebDriver
              allows Java developers to interact with web elements, perform
              actions, and retrieve information from web pages.
            </p>
            <p className="imgfeaturepara5">
              {" "}
              <i class="bi bi-check check"></i>
              The Page Object Model is a design pattern that promotes the
              creation of reusable and maintainable code. Page objects
              encapsulate the behavior and structure of web pages, making the
              test scripts more readable and modular.
            </p>
          </Col>
        </Row>
      </Container>

      {/* feature 6 */}
      <Container className="feature6">
        <Row>
          <Col className="order-2 order-lg-1 feature6Content">
            <h4 className="imgfeaturehead6 ">DevOps Program</h4>
            <p className="imgfeaturepara6">
              DevOps emphasizes a cultural shift, fostering collaboration and
              communication between traditionally siloed development and
              operations teams. The goal is to break down barriers and create a
              shared responsibility for the entire software delivery lifecycle.
              DevOps promotes a culture of continuous improvement, encouraging
              teams to regularly reflect on their processes and identify areas
              for optimization. This involves learning from failures,
              implementing feedback loops, and embracing a mindset of constant
              enhancement. A key tenet of DevOps is the automation of manual and
              repetitive tasks throughout the software development lifecycle.
              This includes automating testing, deployment, infrastructure
              provisioning, and more.Developers regularly integrate their code
              changes into a shared repository, where automated builds and tests
              are triggered. This helps identify and address integration issues
              early in the development process.With continuous delivery, the
              software is kept in a deployable state at all times
            </p>
          </Col>
          <Col className="order-1 order-lg-2">
            <div>
              <img
                src="./assets/img_sm_26.jpg"
                alt=""
                className="imgfeature6"
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Pricing */}

      {/* <Container>
        <Row>
          <div>
            <h3 className="priceHead">PRICING</h3>
          </div>
        </Row>
      </Container>

      <Container>
        <Row className="ms-5">
          <Col>
            <div className="freePlan1 col-lg-6">
              <h2 className="priceHead1">FullStack Development</h2>{" "}
              <h2>
                <i class="bi bi-currency-dollar dollar1"></i>{" "}
                <span className="zero1">50</span>
                <span className="fs-5 month1">/month</span>
              </h2>
              <p className="priceHead1Para1">
                <i class="bi bi-check check iconPara1"></i>Companies are looking
                to hire technologies such as React.js, JavaScript, MongoDB, and
                Python.
              </p>
              <p className="priceHead1Para1">
                <i class="bi bi-check check iconPara1"></i>Diverse knowledge and
                skillsets for working in multiple projects with the ability of
              </p>
              <p className="priceHead1Para1">
                <i class="bi bi-check check iconPara1"></i>Full-stack developers
                can give quality applications as they are taking care of whole
                areas such as designing, developing,
              </p>
              <Button className="paraButton1">Buy Now</Button>
            </div>
          </Col>

          <Col>
            <div className="freePlan2 col-lg-6">
              <h2 className="priceHead2">Automation Testing</h2>{" "}
              <h2>
                <i class="bi bi-currency-dollar dollar2 "></i>
                <span className="zero2">60</span>
                <span className="fs-5 month2">/month</span>
              </h2>
              <p className="priceHead1Para2">
                <i class="bi bi-check check iconPara2"></i>Selenium supports
                multiple programming languages, including Java, Python, C#,
                Ruby, and JavaScript.
              </p>
              <p className="priceHead1Para2">
                <i class="bi bi-check check iconPara2"></i>The WebDriver is a
                key component of Selenium that allows you to interact with web
                browsers.
              </p>
              <p className="priceHead1Para2">
                <i class="bi bi-check check iconPara2"></i>Create test scripts
                using the chosen programming language.
              </p>
              <Button className="paraButton2">Buy Now</Button>
            </div>
          </Col>

          <Col>
            <div className="freePlan3 col-lg-6">
              <h2 className="priceHead3">UI/UX Program</h2>{" "}
              <h2>
                <i class="bi bi-currency-dollar dollar3 "></i>
                <span className="zero3">70</span>
                <span className="fs-5 month3">/month</span>
              </h2>
              <p className="priceHead1Para3">
                <i class="bi bi-check check iconPara3"></i>Prototyping involves
                building interactive, clickable models to simulate user
                interactions.Exploring
              </p>
              <p className="priceHead1Para3">
                <i class="bi bi-check check iconPara3"></i>visual elements to
                create visually appealing and cohesive designs. Understanding
                design tools
              </p>
              <p className="priceHead1Para3">
                <i class="bi bi-check check iconPara3"></i>Defining how users
                interact with the interface, including the design of buttons,
              </p>
              <Button className="paraButton3">Buy Now</Button>
            </div>
          </Col>
        </Row>
      </Container> */}

      {/* carousel */}

      <Carousel className="testimoialsBg">
        <Carousel.Item>
          <div className="carousel-content">
            <img
              src="./assets/img_sm_28.jpg"
              className="testimonials"
              alt="..."
            />
          </div>
          <div className="text-center caption-containe">
            <div className="stars">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <div className="content">
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                The dynamic and visionary leader of our computer coaching
                center, brings a wealth of experience and a deep passion for
                technology education.
                <i class="bi bi-chat-right-quote-fill"></i>
              </p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-content">
            <img
              src="./assets/img_sm_29.jpg"
              className="testimonials"
              alt="..."
            />
          </div>
          <div className="text-center caption-container">
            <div class="stars">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <div className="content">
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                Responsible for creating spaces that foster collaboration,
                engagement, and optimal learning experiences, the designer
                combines artistic flair with a deep understanding of the
                technological and educational needs of our institution.
                <i class="bi bi-chat-right-quote-fill"></i>
              </p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-content">
            <img
              src="./assets/img_sm_30.jpg"
              className="testimonials"
              alt="..."
            />
          </div>
          <div className="text-center caption-container">
            <div class="stars">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <div className="content">
              <h3>Jena Karlis</h3>
              <h4>Full Stack Developer Staff</h4>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                The Full Stack Developer Staff plays a crucial role in
                designing, implementing, and maintaining the software
                applications that power our computer coaching center.
                <i class="bi bi-chat-right-quote-fill"></i>
              </p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-content">
            <img
              src="./assets/img_sm_31.jpg"
              className="testimonials"
              alt="..."
            />
          </div>
          <div className="text-center caption-container">
            <div class="stars">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <div className="content">
              <h3>Matt Brandon</h3>
              <h4>DevOps</h4>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                The DevOps Staff plays a crucial role in enhancing the
                efficiency, reliability, and scalability of our software
                development and deployment processes.
                <i class="bi bi-chat-right-quote-fill"></i>
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <img
              src="./assets/img_sm_32.jpg"
              className="testimonials"
              alt="..."
            />
          </div>
          <div className="text-center caption-container">
            <div class="stars">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <div className="content">
              <h3>John Larson</h3>
              <h4>Java Automation Staff</h4>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                The Java Automation Staff is responsible for designing,
                developing, and maintaining automated test scripts to ensure the
                reliability and efficiency of our software applications
                <i class="bi bi-chat-right-quote-fill"></i>
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row>
          <h1 className="frequentHead mt-5">FREQUENTLY ASKED QUESTIONS</h1>

          {/* Accordian */}

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {" "}
                <i
                  className="bi bi-question-circle question-icon"
                  style={{
                    color: "blue",
                    padding: "5px",
                    margin: "2px",
                  }}
                ></i>
                Who is eligible for this full stack developer course?
              </Accordion.Header>
              <Accordion.Body>
                To keep the opportunities fair, we provide a PreBootcamp session
                for Enlight Class Interested students as a way to understand how
                ready they are to become a Full Stack Developer. A Small
                Eligibility test will be conducted right after the Pre-Bootcamp
                to provide you with a final ticket to be part of Zen Bootcamp.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {" "}
                <i
                  className="bi bi-question-circle question-icon"
                  style={{
                    color: "blue",
                    padding: "5px",
                    margin: "2px",
                  }}
                ></i>
                I’m from a non-engineering background or New to programming. Am
                I eligible for this course?
              </Accordion.Header>
              <Accordion.Body>
                With the objective of creating as many job opportunities for our
                students, we do intend to help every student who is willing to
                “make the extra catching up needed” in terms of programming &
                Development logic.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                {" "}
                <i
                  className="bi bi-question-circle question-icon"
                  style={{
                    color: "blue",
                    padding: "5px",
                    margin: "2px",
                  }}
                ></i>
                Which companies will I be given opportunities for placements?
              </Accordion.Header>
              <Accordion.Body>
                We have partnered with over 200+ companies including Paypal,
                Freshworks,Zoho, Juspay, DBS, Scapic, OrangeScape, etc.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                {" "}
                <i
                  className="bi bi-question-circle question-icon"
                  style={{
                    color: "blue",
                    padding: "5px",
                    margin: "2px",
                  }}
                ></i>
                What is the duration of this course?
              </Accordion.Header>
              <Accordion.Body>
                3 Months for students (Monday to Friday), 5 Months for Working
                professional and Students (Saturday & Sunday)
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                {" "}
                <i
                  className="bi bi-question-circle question-icon"
                  style={{
                    color: "blue",
                    padding: "5px",
                    margin: "2px",
                  }}
                ></i>
                What are the payment options?
              </Accordion.Header>
              <Accordion.Body>
                For details regarding the payment reach us at 785264 78564.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
