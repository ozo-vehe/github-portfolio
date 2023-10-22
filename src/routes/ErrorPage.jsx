import { Link } from "react-router-dom";

function ErrorPage () {
  return (
    <section className="errorPage">
      <div>
        <p>Oops!!! page not found</p>
        <h1 className="gradient">404</h1>
        <p>We are sorry, but the page you requested was not found</p>
        <Link to="/">Go back to homepage</Link>
      </div>
    </section>
  )
}

export default ErrorPage;