import Wrapper from "../assests/wrappers/ErrorWrapper.js";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <div className="grid">
        <div className="title">Page Not Found 404</div>
        <Link className="btn home-btn" to="/">
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;
