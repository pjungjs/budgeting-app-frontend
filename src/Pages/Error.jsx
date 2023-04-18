import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <h1>Error</h1>
      <Link to="/">
        <button>Back to the Home Page</button>
      </Link>
    </div>
  )
}

export default Error;