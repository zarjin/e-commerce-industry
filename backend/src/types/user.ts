import { IWishList } from "./wishlist";

export interface IUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
  role: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  wishlist: IWishList;
}
