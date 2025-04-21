const Services = () => {
  return (
    <div className="section service">
      <div className="content">
        <div className="title">
          <div className="title_inner">My Services</div>
        </div>
        <div className="service-items">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-social-html5" />
            </div>
            <div className="name">Front-end</div>
            <p>
              I focus on creating intuitive, responsive, and engaging user
              interfaces. Using modern tools like React, Angular, Vue.js, and
              various UI libraries, I build front-ends that look great and work
              perfectly on any device &ndash; desktops, tablets, or phones.
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-ipad" />
            </div>
            <div className="name">Mobile Application</div>
            <p>
              Bringing your application to mobile users. Whether it's through
              responsive web design, Progressive Web Apps (PWAs), or
              cross-platform development, I ensure your users have a great
              experience on their phones and tablets.
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-ios-search-strong" />
            </div>
            <div className="name">Debugging & Troubleshooting</div>
            <p>
              Running into tricky bugs, slow performance, or unexpected issues?
              I enjoy diving deep into code and systems to diagnose problems,
              troubleshoot effectively, and implement robust solutions to get
              your application running smoothly again.
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-code" />
            </div>
            <div className="name">Programming</div>
            <p>
              This is the engine under the hood. I build secure, scalable, and
              efficient server-side logic and APIs using languages like PHP,
              NodeJs, Python, and Golang, ensuring your application has a
              powerful and reliable backend.
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-help-buoy" />
            </div>
            <div className="name">Maintenance & Support</div>
            <p>
              Launching your project is just the beginning. I offer reliable
              ongoing support and maintenance services to keep your website or
              application secure, up-to-date, and performing optimally, giving
              you peace of mind.
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-social-chrome" />
            </div>
            <div className="name">Full-Stack Development</div>
            <p>
              From the initial concept to final deployment and beyond. I handle
              the complete web development process, bringing together front-end
              visuals, backend logic, database management, server setup
              (including DNS), and deployment to deliver comprehensive, fully
              functional web solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
