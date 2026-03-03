import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/v1/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/more-about-me"); // protected route
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-white to-gray-100">
      <div className="w-full max-w-md bg-white p-10 rounded-[40px] shadow-xl border border-gray-200">
        <h2 className="text-4xl font-extrabold text-center mb-6">Welcome Back 👋</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="font-bold ml-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="bg-gray-50 p-4 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2 relative">
            <label className="font-bold ml-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="bg-gray-50 p-4 pr-12 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[52px] cursor-pointer text-gray-500"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-5 bg-green-500 text-white rounded-2xl font-bold text-lg hover:shadow-lg active:scale-95 transition-all"
          >
            Login
          </button>

          <p className="text-center text-gray-500 text-sm">
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-green-500 font-semibold cursor-pointer"
            >
              Sign up
            </button>
          </p>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;