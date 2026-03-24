import { useContext } from "react";
import { WishlistContext } from "./wishlistContext";

export const useWishlistContext = () => {
  return useContext(WishlistContext);
};
