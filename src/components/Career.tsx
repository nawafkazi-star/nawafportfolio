import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Engineer Intern</h4>
                <h5>Technip Energies | Ahmadi, Kuwait</h5>
              </div>
              <h3>KOC MEGA PROJECT</h3>
            </div>
            <p>
              Served within the Project Management Team (PMT) for a major Kuwait Oil Company (KOC) Mega Complex project.
              Assisted in reviewing engineering deliverables, ensuring pipeline and piping design compliance with KOC standards.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Piping Engineer Intern</h4>
                <h5>Mechanical Engineering & Contracting Co.</h5>
              </div>
              <h3>AHMADI, KUWAIT</h3>
            </div>
            <p>
              Developed and reviewed pipeline layouts for refinery process units and utility systems.
              Conducted site walkdowns to verify As-Built drawings against P&IDs and isometric diagrams.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>On-Site Mechanical Intern</h4>
                <h5>Kuwait Lube Oil Co. / Faddan</h5>
              </div>
              <h3>AHMADI, KUWAIT</h3>
            </div>
            <p>
              Gained hands-on exposure to mechanical systems supporting refinery operations.
              Monitored on-site pipeline installation and testing procedures, ensuring alignment with API and ASME codes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
