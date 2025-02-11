import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    console.log("Email:", email);
    console.log("Password:", password);
    // You can add authentication logic here
  };

  return (
    <>
      <div className="container-fluid p-0">
        {/* Main Content */}
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "calc(100vh - 140px)" }}>
          <div
            className="form-container"
            style={{
              width: "80vw",       // Responsive width based on the viewport width
              maxWidth: "500px",   // Optional: Limit the max width of the form
              padding: "20px",     // Add some padding for spacing
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <h2 className="text-center">Login</h2>
                <br />
                <label htmlFor="exampleInputEmail1" className="form-label text-start">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label text-start">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label text-start" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>

              <div className="mb-3 text-end">
                <button type="button" className="btn btn-link p-0">
                  Forgot Password?
                </button>
              </div>

              <button type="submit" className="btn btn-secondary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
