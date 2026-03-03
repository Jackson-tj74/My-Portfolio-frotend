import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const res = await fetch(`http://localhost:3000/api/v1/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account created successfully!");
        navigate("/login");
      } else {
        alert(data.message || data.error || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-lg">
        <h2 className="text-4xl font-extrabold text-center mb-6">Create Account 🚀</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="font-bold">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              className="w-full p-4 mt-2 rounded-xl border focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="font-bold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full p-4 mt-2 rounded-xl border focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

          <div className="relative">
            <label className="font-bold">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-4 mt-2 rounded-xl border focus:ring-2 focus:ring-green-500 outline-none pr-12"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-12 cursor-pointer text-gray-500"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div>
            <label className="font-bold">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full p-4 mt-2 rounded-xl border focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <button onClick={() => navigate("/login")} className="text-green-500 font-semibold">
            Login
          </button>
        </p>
      </div>
    </section>
  );
}

export default SignupForm;