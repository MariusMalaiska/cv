import React from "react";
import logo from "./logo.svg";
import linkedin from "./logo/logo3.svg";
import dev from "./logo/logo1.svg";
import git from "./logo/logo2.svg";
import tweet from "./logo/logo4.svg";
import "./App.css";

// import Title from "./components/Title";
import ContentBlock from "./components/ContentBlock";
import BlackLine from "./components/BlackLine";
import BorderBox from "./components/BorderBox";
import SeparatorClear from "./components/SeparatorClear";
import Pill from "./components/Pill";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="Top-line"></div>
        <header className="App-header">
          <h1 className="Name">Marius Malaiška</h1>
          <BlackLine className="" title="Programer"></BlackLine>
        </header>
        <div className="cv">
          <div className="About">
            <ContentBlock className="flex-1 links" title="Links">
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
            </ContentBlock>
            <ContentBlock className="flex-2" title="About Me">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend
              diam vel tempor lacinia. Suspendisse non augue egestas, dapibus
              justo et, lobortis ex. Nullam tortor diam, venenatis at enim a,
              lacinia porttitor erat. Vivamus tempor dictum leo id aliquam.
              Praesent elit lacus, tempus ac vehicula in, imperdiet dapibus
              elit. Nullam scelerisque euismod leo id vestibulum. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Maecenas ut justo
              libero. Vestibulum vitae mattis diam.
            </ContentBlock>
          </div>
          <div className="Skills">
            <ContentBlock className="flex-1 education" title="EDUCATION">
              <ul>
                <li>
                  <span>Code Academy</span>
                </li>
                <li>
                  <span>2019-2020</span>
                </li>
                <li>
                  <span>Front-end</span>
                </li>
              </ul>

              <SeparatorClear />
              <ul>
                <li>
                  <span>Vilniaus turizmo ir prekybos verslo mokykla</span>
                </li>
                <li>
                  <span>2009-2011</span>
                </li>
                <li>
                  {" "}
                  <span>Virėjas</span>
                </li>
              </ul>
              <SeparatorClear />
              <ul>
                <li>
                  <span>Vilniaus Jono Basanavičiaus gimnazija</span>
                </li>
                <li>
                  <span>1997-2009</span>
                </li>
                <li>
                  {" "}
                  <span>Vidurinis</span>
                </li>
              </ul>
            </ContentBlock>
            <ContentBlock className="flex-1 education" title="PERSONAL SKILLS">
              <ul>
                <li>
                  <Pill className="Team-work" title="TEAMWORK" />
                </li>
                <li>
                  <Pill className="Comunication" title="COMUNICTION" />
                </li>
                <li>
                  <Pill className="Organisation" title="ORGANISATION" />{" "}
                </li>
              </ul>
            </ContentBlock>

            <ContentBlock
              className="flex-1 Skills-technikal"
              title="TECHNIKAL SKILLS"
            >
              <ul>
                <li>
                  <Pill className="Html" title="HTML" />
                </li>
                <li>
                  <Pill className="Css" title="CSS/SCSS" />
                </li>
                <li>
                  <Pill className="Javascript" title="Javascript" />
                </li>
                <li>
                  <Pill className="React" title="REACT.JS" />
                </li>
              </ul>
            </ContentBlock>
          </div>
          <div className="Work">
            <div>
              <ContentBlock
                className="flex-1 Work-experience"
                title="WORK EXPERIENCE"
              ></ContentBlock>
            </div>
            <div className="Jobs">
              <BorderBox className="flex-1 Job-position">
                <h2 className="Job-position-one">JOB POSITION</h2>
                <p> React components</p>
                <p> 2008 - components</p>
                <p className="Text-left">
                  React components implement a render() method that takes input
                  data and returns what to display. This example uses an
                  XML-like syntax called JSX. Input data that is passed into the
                  see the raw JavaScript code produced by the JSX compilation
                </p>
                <ul>
                  <li>raw JavaScript</li>
                  <li>raw JavaScript</li>
                </ul>
              </BorderBox>
              {/* </div> */}
              <BorderBox className="flex-1 Job-position Job-two">
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
              </BorderBox>
              <BorderBox className="flex-1 Job-position">
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
              </BorderBox>
            </div>
            <SeparatorClear />
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
