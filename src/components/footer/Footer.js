import "./Footer.css";
import Select from "../select/Select";

const Footer = () => {
  return (
    <footer>
      <div className="container pt-5">
        <a href="#">Questions? Contact us.</a>
        <div className="row pt-4">
          <div className="col-4">
            <a href="#">FAQ</a>
            <a href="#">Media Center</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Speed Test</a>
            <a href="#">Only on Netflix</a>
          </div>
          <div className="col-4">
            <a href="#">Help Center</a>
            <a href="#">Investor Relations</a>
            <a href="#">Terms of Use</a>
            <a href="#">Corporate Information</a>
            <a href="#">Legal Guarantee</a>
            <a href="#">Ad Choices</a>
          </div>
          <div className="col-4">
            <a href="#">Account</a>
            <a href="#">Jobs</a>
            <a href="#">Privacy</a>
            <a href="#">Contact Us</a>
            <a href="#">Legal Notices</a>
          </div>
        </div>
        <Select />
        <p>Netflix Lithuania</p>
      </div>
    </footer>
  );
};

export default Footer;
