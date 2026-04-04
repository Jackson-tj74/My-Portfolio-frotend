import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { APIsRequestService } from "../Services/APIsRequestService";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
       const response = await APIsRequestService.SignInAPI({ email, password, });
     
      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful!");
        navigate("/dashboard");
      } else {
        toast.error(data.message || "UNAUTHORIZED");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <> 
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter text-gray-900 mt-20">
          MY<span className="text-secondary px-2">PORTFOLIO.</span>
        </Link>
      </div>

      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl">

          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-green-500 text-white rounded-xl font-semibold flex justify-center items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>

          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
