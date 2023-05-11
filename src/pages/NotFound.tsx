import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Not Found page !</h1>
      <Link to="/">Go Back</Link>
    </>
  );
}

export default NotFound;
