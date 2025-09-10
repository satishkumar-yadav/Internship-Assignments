import { useSnackbar } from "notistack";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../features/userSlice";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleRegister = e => {
    e.preventDefault();
    if (!email || !password) {
      enqueueSnackbar("All fields are required!", { variant: "warning" });
      return;
    }
    const userData = { email, password };
    dispatch(register(userData));
    localStorage.setItem("user", JSON.stringify(userData));
    enqueueSnackbar("Registration successful!", { variant: "success" });
    navigate("/");
  };

  return (
    <form onSubmit={handleRegister} className="max-w-sm mx-auto bg-white p-6 rounded shadow mt-8">
      <h2 className="text-xl font-bold mb-4">Register</h2>
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
      <button className="bg-green-600 text-white px-4 py-2 rounded w-full mt-2" type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
