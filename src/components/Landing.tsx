import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro neon-text">
            <h2 className="neon-text">Hello! I'm</h2>
            <h1 className="neon-text bold-font">
              NAWAF ABDUL
              <br />
              KARIM KAZI
            </h1>
          </div>
          <div className="landing-info neon-text">
            <h3 className="neon-text">A Professional</h3>
            <h1 className="neon-text bold-font">
              PIPING DESIGN
              <br />
              ENGINEER
            </h1>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
