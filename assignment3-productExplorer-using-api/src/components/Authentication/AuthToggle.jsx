import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/userSlice";

const AuthToggle = () => {
  const { loggedIn, user } = useSelector(s => s.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      {loggedIn ? (
        <div className="flex items-center gap-2">
          <span className="font-medium">{user?.email}</span>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded"
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <button
            className="bg-blue-600 text-white px-2 py-1 rounded"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="bg-green-600 text-white px-2 py-1 rounded"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthToggle;
