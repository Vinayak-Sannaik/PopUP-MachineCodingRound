import "./About.css";
import img1 from "./Frame.png";
import img2 from "./Frame (1).png";

const About = () => {
  return (
    <div className="about">
      <div className="section-header">
        <img className="decor-img-right" src={img1} alt="decor" />
        <h1>About</h1>
        <img className="decor-img-left" src={img1} alt="decor" />
      </div>

      <div className="section-body">
        <img className="decor-img2-right" src={img2} alt="decor" />
        <p>
          Our products are crafted exclusively from the dreams and screams of
          young kids who wanted to show their mastery in their chosen fields,
          but were directed towards a factory for daily wages. Each cracker
          bursts brighter than their lost smiles, and can be heard louder than
          their cries for miles. Buy them, burst them, brag about them. <br />
          <span>The choice is yours. Because they don’t have one.</span>
        </p>
        <img className="decor-img2-left" src={img2} alt="decor" />
      </div>
    </div>
  );
};

export default About;
