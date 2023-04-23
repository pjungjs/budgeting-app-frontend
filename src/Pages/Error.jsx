import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">
        Error
      </h1>
      <Link to="/">
        <button>Back to the Home Page</button>
      </Link>
    </div>
  )
}

export default Error;