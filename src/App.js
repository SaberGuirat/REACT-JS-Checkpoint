import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar  fixed-top navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            Company
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Documentation
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Example
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>
      <main>
        <h1 id="title">Company Contact Form</h1>
        <p id="description">
          Thank you for taking the time to help us improve the platform
        </p>
        <form class="container">
          <div class="form-row">
            <div class="col">
              <label for="first-name" id="first-name-label">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                name="first-name"
                placeholder="Enter Your First Name"
                id="first-name"
                required
              />
            </div>
            <div class="col">
              <label for="last-name" id="last-name-label">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                name="last-name"
                placeholder="Enter Your Last Name"
                id="last-name"
                required
              />
            </div>
          </div>
          <div class="form-row">
            <div class="col">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter Your Email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
              <small id="emailHelp" class="form-text text-muted">
                Enter valid email adress please!
              </small>
            </div>
            <div class="col">
              <label>your current role?</label>
              <select class="form-control" id="dropdown" name="role" required>
                <option disabled selected value>
                  Select current role
                </option>
                <option value="student">Student</option>
                <option value="Full time job">Full time job</option>
                <option value="Full time learner">Full time learner</option>
                <option value="Prefer not to say">Prefer not to say</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                name="city"
                placeholder="City..."
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option disabled selected value>
                  Choose...
                </option>
                <option>Tunis</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input
                type="text"
                class="form-control"
                id="inputZip"
                name="zip-code"
                placeholder="Zip..."
              />
            </div>
          </div>
          <p>Would you recommend our company?</p>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="recommended"
              id="Definitely"
              value="Definitely"
            />
            <label class="form-check-label" for="Definitely">
              Definitely
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="recommended"
              id="Maybe"
              value="Maybe"
            />
            <label class="form-check-label" for="Definitely1">
              Maybe
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="recommended"
              id="Not-sure"
              value="Not-sure"
            />
            <label class="form-check-label" for="Definitely1">
              Not sure
            </label>
          </div>
          <div class="form-group">
            <p>What is your favorite feature of our Company?</p>
            <select class="form-control" id="dropdown" name="favorite" required>
              <option disabled selected value>
                Select an option{" "}
              </option>
              <option value="challenges">Challenges</option>
              <option value="projects">Projects</option>
              <option value="Community">Community</option>
            </select>
          </div>
          <p>
            What would you like to see improved?
            <span id="apply">(Check all that apply)</span>
          </p>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="Front-end-Projects"
              name="like-to-improve"
              value="Front-end-Projects"
            />
            <label class="form-check-label" for="inlineCheckbox1">
              Front end Projects
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="Back-end-Projects"
              name="like-to-improve"
              value="Back-end-Projects"
            />
            <label class="form-check-label" for="Back-end-Projects">
              Back end Projects
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="Data-Visualization"
              name="like-to-improve"
              value="Data-Visualization"
            />
            <label class="form-check-label" for="Data-Visualization">
              Data Visualization
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="Additional-Courses"
              name="like-to-improve"
              value="Additional-Courses"
            />
            <label class="form-check-label" for="Additional-Courses">
              Additional Courses
            </label>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              Any comments or suggestions?
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="suggestions"
              placeholder="Enter your message here..."
            ></textarea>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck2"
                required
              />
              <label class="form-check-label" for="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <button class="btn btn-primary btn-lg btn-block" type="submit">
            Submit
          </button>
        </form>
      </main>
      <footer class="page-footer font-small">
        <div class="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="#"> Company.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
