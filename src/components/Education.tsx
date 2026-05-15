import "./styles/Career.css";

const Education = () => {
  return (
    <div className="career-section section-container" id="education">
      <div className="career-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Post Graduation in Piping Design Engineering</h4>
                <h5>Excel Technical Institute, Thane</h5>
              </div>
              <h3>Grade: A+</h3>
            </div>
            <p>
              Core Focus: Piping Layout, Stress Analysis, ASME Codes, E3D, CAESAR II.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BTech in Mechanical Engineering</h4>
                <h5>Mumbai University</h5>
              </div>
              <h3>9.75 SGPA</h3>
            </div>
            <p>Result: 1st Class Distinction.</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Mechanical Engineering</h4>
                <h5>Saboo Siddik Polytechnic</h5>
              </div>
              <h3>8.2 CGPA</h3>
            </div>
            <p>Result: 1st Class Distinction.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
