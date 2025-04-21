const About = () => {
  const age = new Date().getFullYear() - 1992;
  return (
    <div className="section about section_" id="section-resume">
      <div className="content">
        <div className="title">
          <div className="title_inner">About Me</div>
        </div>
        <div className="image">
          <img src="images/man1.jpg" alt="" />
        </div>
        <div className="desc">
          <p>
            Hello, I&apos;m Andrew Elbaneh, a full-stack software engineer
            hailing from the heart of Buffalo, NY. Since 2014, I&apos;ve been
            immersed in professional development, building upon a lifelong
            passion for coding. My expertise spans the entire software stack,
            driven by a deep curiosity for technology and a love for creating
            innovative solutions. When I&apos;m not coding, you&apos;ll find me
            cheering on the Buffalo Bills, exploring the vibrant culture of my
            hometown, or diving into the latest video games and tech
            advancements. I bring a blend of technical skill and genuine
            enthusiasm to every project, rooted in my love for both technology
            and the spirit of Buffalo.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Name:</strong> Andrew Elbaneh
              </li>
              <li>
                <strong>Age:</strong> {age} Years Old
              </li>
              <li>
                <strong>Job:</strong> Senior Full Stack Engineer
              </li>
              <li>
                <strong>Citizenship:</strong> US
              </li>
              <li>
                <strong>Residence: </strong> Buffalo, NY
              </li>
              <li>
                <strong>E-mail:</strong>{" "}
                <a href="mailto:andrewelbaneh@gmail.com">
                  andrewelbaneh@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="bts">
            <a
              href="/files/andrew-elbaneh-resume.pdf"
              className="btn fill"
              data-text="Download CV"
              download="andrew-elbaneh-resume.pdf"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
