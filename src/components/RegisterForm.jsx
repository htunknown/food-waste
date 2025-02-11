import { useState } from "react";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    // You can add registration logic here
  };

  return (
    <div className="container-fluid p-0">
      {/* Main Content */}
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "calc(100vh - 140px)" }}>
        <div className="col-12 col-md-6 col-lg-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <h2 className="text-center">Register</h2>
              <label htmlFor="name" className="form-label text-start">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label text-start">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label text-start">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label text-start">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-secondary w-100">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
