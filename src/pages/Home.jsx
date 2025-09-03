import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to the Nandavanam Project</h1>
      <p>This is the home page of your site.</p>

      {/* Simple redirection link for testing */}
      <Link to="/maptool" style={{ color: "red", fontWeight: "bold" }}>
        Go to Map Tool →
      </Link>
    </div>
  );
}
