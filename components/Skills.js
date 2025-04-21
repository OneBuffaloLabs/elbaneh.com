"use client";
export const DesignSkills = () => {
  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">Design Skills</div>
        </div>
        <div className="skills">
          <ul>
            <li>
              <div className="name">Web Design</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Photoshop</div>
              <div className="progress">
                <div className="percentage" style={{ width: "55%" }}>
                  <span className="percent">55%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const LanguagesSkills = () => {
  useEffect(() => {
    glitcheUtils.dotResize();
    setTimeout(glitcheUtils.createSkillsDot(), 1000);
  }, []);

  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">Languages Skills</div>
        </div>
        <div className="skills dotted">
          <ul>
            <li>
              <div className="name">English</div>
              <div className="progress">
                <div className="percentage" style={{ width: "100%" }}>
                  <span className="percent">100%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const CodingSkills = () => {
  const skills = [
    { id: 1, title: "PHP / MYSQL", value: 95 },
    { id: 2, title: "HTML / CSS", value: 95 },
    { id: 3, title: "Python", value: 70 },
    { id: 4, title: "JavaScript / Typescript", value: 95 },
    { id: 5, title: "Golang", value: 65 },
  ];
  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">Coding Skills</div>
        </div>
        <div className="skills circles">
          <ul>
            {skills.map((skill) => (
              <li key={`skill-${skill.id}`}>
                <div className="name">{skill.title}</div>
                <div className={`progress p${skill.value}`}>
                  <div
                    className="percentage"
                    style={{ width: `${skill.value}%` }}
                  >
                    <span className="percent">{skill.value}%</span>
                  </div>
                  <span>{skill.value}%</span>
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export const Knowledge = () => {
  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">Knowledge</div>
        </div>
        <div className="skills list">
          <ul>
            <li>
              <div className="name">
                JavaScript / TypeScript (NodeJs, React, Next.js, Angular,
                Vue.js)
              </div>
            </li>
            <li>
              <div className="name">PHP (Laravel, CakePHP, WordPress)</div>
            </li>
            <li>
              <div className="name">Golang</div>
            </li>
            <li>
              <div className="name">Python (Django)</div>
            </li>
            <li>
              <div className="name">Website hosting</div>
            </li>
            <li>
              <div className="name">IOS and Android Apps</div>
            </li>
            <li>
              <div className="name">
                HTML5 & CSS3 (Material UI, Ant Design, Bootstrap, etc.)
              </div>
            </li>
            <li>
              <div className="name">RESTful API Development</div>
            </li>
            <li>
              <div className="name">Modern and mobile-ready</div>
            </li>
            <li>
              <div className="name">Search Engine Optimization (SEO)</div>
            </li>
            <li>
              <div className="name">
                Database Management (e.g., MySQL, PostgreSQL)
              </div>
            </li>
            <li>
              <div className="name">
                API Design & Development (REST, SOAP, GraphQL, gRPC)
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

import { glitcheUtils } from "@/utility";
import { Fragment, useEffect } from "react";
const Skills = ({
  design = true,
  languages = true,
  coding = true,
  knowledge = true,
}) => {
  return (
    <Fragment>
      {design && <DesignSkills />}
      {languages && <LanguagesSkills />}
      {coding && <CodingSkills />}
      {knowledge && <Knowledge />}
    </Fragment>
  );
};
export default Skills;
