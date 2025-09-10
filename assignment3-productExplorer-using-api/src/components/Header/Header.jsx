import { useSelector } from "react-redux";
import AuthToggle from "./AuthToggle";
import ThemeToggle from "./ThemeToggle";

const Header = ({ onWishlistClick, onCartClick }) => {
  const { loggedIn, user } = useSelector(s => s.user);
  const wishlistCount = useSelector(s => s.wishlist.items.length);
  const cartCount = useSelector(s => s.cart.items.length);

  return (
    <header className="p-4 bg-white dark:bg-gray-800 shadow flex justify-between items-center">
      <h1 className="font-bold text-xl">Product Explorer</h1>
      <div className="flex items-center gap-5">
        <button className="relative" onClick={onWishlistClick} aria-label="wishlist">
          ❤️
          {wishlistCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white px-1 rounded-full text-xs">{wishlistCount}</span>
          )}
        </button>
        <button className="relative" onClick={onCartClick} aria-label="cart">
          🛒
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-green-500 text-white px-1 rounded-full text-xs">{cartCount}</span>
          )}
        </button>
        {loggedIn && (
          <div className="relative group">
            <button className="font-semibold underline cursor-pointer">
              {user.username}
            </button>
            <div className="absolute hidden group-hover:block group-focus:block left-0 mt-2 bg-white shadow rounded p-2 z-10">
              <button className="block mb-2" onClick={onWishlistClick}>My Wishlist</button>
              <button className="block" onClick={onCartClick}>Cart</button>
            </div>
          </div>
        )}
        <ThemeToggle />
        <AuthToggle />
      </div>
    </header>
  );
};

export default Header;
