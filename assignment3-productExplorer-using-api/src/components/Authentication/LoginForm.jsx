import { useSnackbar } from "notistack";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/userSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogin = e => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored && email === stored.email && password === stored.password) {
      dispatch(login(stored));
      enqueueSnackbar("Login successful!", { variant: "success" });
      navigate("/");
    } else {
      enqueueSnackbar("Wrong credentials!", { variant: "error" });
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto bg-white p-6 rounded shadow mt-8">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        className="block w-full mb-2 p-2 border rounded"
        type="email"
        value={email}
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        className="block w-full mb-2 p-2 border rounded"
        type="password"
        value={password}
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-2" type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
