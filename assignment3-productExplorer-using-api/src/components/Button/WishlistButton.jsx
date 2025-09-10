import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToWishlist, removeFromWishlist } from "../../features/wishlistSlice";

const WishlistButton = ({ productId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { loggedIn } = useSelector(s => s.user);
  const items = useSelector(s => s.wishlist.items);
  const inWishlist = items.includes(productId);

  const toggleWishlist = () => {
    if (!loggedIn) {
      enqueueSnackbar("Please login to add to wishlist", { variant: "warning" });
      navigate("/login");
      return;
    }
    if (inWishlist) {
      dispatch(removeFromWishlist(productId));
      enqueueSnackbar("Removed from wishlist", { variant: "info" });
    } else {
      dispatch(addToWishlist(productId));
      enqueueSnackbar("Added to wishlist", { variant: "success" });
    }
  };

  return (
    <button
      className="absolute top-2 right-2 p-2 bg-white rounded-full shadow"
      onClick={toggleWishlist}
      aria-label="Add to Wishlist"
    >
      {inWishlist ? "❤️" : "🤍"}
    </button>
  );
};

export default WishlistButton;
