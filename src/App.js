import React from "react";
import logo from "./logo.svg";
import linkedin from "./logo/logo3.svg";
import dev from "./logo/logo1.svg";
import git from "./logo/logo2.svg";
import tweet from "./logo/logo4.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="Top-line"></div>
        <header className="App-header">
          <h1 className="Name">Marius Malaiška</h1>
          <h2 className="Black-line">Programer</h2>
          {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        </header>
        <div className="cv">
          <div className="About">
            <div className="About-links box">
              <h1 className="Sub-title">Links</h1>
              <div className="Sub-line"></div>
              <ul>
                <li>
                  <img src={linkedin}></img>
                  <a>Linkedin</a>
                </li>
                <li>
                  <img src={tweet}></img>
                  <a>TITTER</a>
                </li>
                <li>
                  <img src={git}></img>
                  <a>GITHUB</a>
                </li>
                <li>
                  <img src={dev}></img>
                  <a>BLOG</a>
                </li>
              </ul>
            </div>
            <div className="About-me box">
              <h1 className="Sub-title">About Me</h1>
              <div className="Sub-line"></div>
              <p>
                React components implement a render() method that takes input
                data and returns what to display. This example uses an XML-like
                syntax called JSX. Input data that is passed into the component
                can be accessed by render() via this.props. JSX is optional and
                not required to use React. Try the Babel REPL to see the raw
                JavaScript code produced by the JSX compilation step. LIVE JSX
                EDITOR JSX? class HelloMessage extends React.Component
                document.getElementById('hello-example') ); RESULT Hello Taylor
              </p>
            </div>
          </div>
          <div className="Skills">
            <div className="education box">
              <h1 className="Sub-title">Education</h1>
              <div className="Sub-line"></div>
              <ul>
                <li>
                  <span>School name</span>
                </li>
                <li>
                  <span>2009-20013</span>
                </li>
                <li>
                  {" "}
                  <span>Degree</span>
                </li>
              </ul>
              <div className="line"></div>
              <ul>
                <li>
                  <span>School name</span>
                </li>
                <li>
                  <span>2009-20013</span>
                </li>
                <li>
                  {" "}
                  <span>Degree</span>
                </li>
              </ul>
            </div>
            <div className="Skills-personal box">
              <h1 className="Sub-title">PERSONAL SKILLS</h1>
              <div className="Sub-line"></div>
              <ul>
                <li className="team-work">TEAMWORK</li>
                <li className="Comunication">COMUNICTION</li>
                <li className="Organisation">ORGANISATION</li>
              </ul>
            </div>
            <div className="Skills-technikal box">
              <h1 className="Sub-title">TECHNIKAL SKILLS</h1>
              <div className="Sub-line"></div>
              <ul>
                <li className="Html">HTML</li>
                <li className="Css">CSS/SCSS</li>
                <li className="Javascript">JAVASCRIPT</li>
                <li className="React">REACT.JS</li>
              </ul>
            </div>
          </div>
          <div className="Work">
            <div>
              <h1 className="Work-experience">WORK EXPERIENCE</h1>
              <div className="Sub-line"></div>
            </div>
            <div className="Jobs">
              <div className="Job-position Job-one box">
                <h2 className="Job-position-one">JOB POSITION</h2>
                <p> React components</p>
                <p> 2008 - components</p>
                <p className="Text-left box">
                  React components implement a render() method that takes input
                  data and returns what to display. This example uses an
                  XML-like syntax called JSX. Input data that is passed into the
                  see the raw JavaScript code produced by the JSX compilation
                </p>
                <ul>
                  <li>raw JavaScript</li>
                  <li>raw JavaScript</li>
                </ul>
              </div>
              <div className="Job-position Job-two box">
                <h2 className="Job-position-two">JOB POSITION</h2>
                <p> React components</p>
                <p> 2008 - components</p>
                <p className="Text-left box">
                  React components implement a render() method that takes input
                  data and returns what to display. This example uses an
                  XML-like syntax called JSX. Input data that is passed into the
                  component can be accessed by render() via this.props. JSX is
                  optional and not required to use React. Try the Babel REPL to
                  see the raw JavaScript code produced by the JSX compilation
                </p>
                <ul>
                  <li>raw JavaScript</li>
                  <li>raw JavaScript</li>
                </ul>
              </div>
              <div className="Job-position Job-three box">
                <h2 className="Job-position-three">JOB POSITION</h2>
                <p> React components</p>
                <p> 2008 - components</p>
                <p className="Text-left box">
                  React components implement a render() method that takes input
                  data and returns what to display. This example uses an
                  XML-like syntax called JSX. Input data that is passed into the
                  optional and not required to use React. Try the Babel REPL to
                  see the raw JavaScript code produced by the JSX compilation
                </p>
                <ul>
                  <li>raw JavaScript</li>
                  <li>raw JavaScript</li>
                </ul>
              </div>
            </div>
            <div className="line"></div>
          </div>
          <div className="Contacts">
            <div className="Adress box">
              <h2 className="Black-line Bottom">ADRESS</h2>
              <ul>
                <li>
                  <a href="+37060516387">+37060516387</a>
                </li>
                <li>
                  <a href="+37060516387">+37060516387</a>
                </li>
              </ul>
            </div>
            <div className="Contact box">
              <h2 className="Black-line Bottom">CONTACT</h2>
              <ul>
                <li>
                  <a href="+37060516387">+37060516387</a>
                </li>
                <li>
                  <a href="+37060516387">+37060516387</a>
                </li>
              </ul>
            </div>
            <div className="Social box">
              <h2 className="Black-line Bottom">PROGRAMER</h2>
              <ul>
                <li>
                  <a href="+37060516387">+37060516387</a>
                </li>
                <li>
                  <a href="+37060516387">+37060516387</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
