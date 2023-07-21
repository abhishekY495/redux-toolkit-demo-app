import { v4 as uuidv4 } from "uuid";

export const defaultAvatarLink =
  "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300,c_fill,ar_1:1,r_max/v1686678458/cosmic-connect/userAvatar/johndoe77_bk7q8k.png";

export const avatarLinks = [
  {
    id: uuidv4(),
    link: `https://api.dicebear.com/6.x/bottts/svg?seed=${uuidv4()}`,
  },
  {
    id: uuidv4(),
    link: `https://api.dicebear.com/6.x/bottts/svg?seed=${uuidv4()}`,
  },
  {
    id: uuidv4(),
    link: `https://api.dicebear.com/6.x/bottts/svg?seed=${uuidv4()}`,
  },
  {
    id: uuidv4(),
    link: `https://api.dicebear.com/6.x/bottts/svg?seed=${uuidv4()}`,
  },
  {
    id: uuidv4(),
    link: `https://api.dicebear.com/6.x/bottts/svg?seed=${uuidv4()}`,
  },
];
