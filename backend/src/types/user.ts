import { IAddress } from "./address";
import { IWishList } from "./wishlist";

export interface IUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
  role: string;
  address: IAddress;
  wishlist: IWishList;
}
