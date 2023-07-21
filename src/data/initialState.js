import { v4 as uuidv4 } from "uuid";

export const initialState = {
  postsData: [
    {
      id: uuidv4(),
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300/v1686678457/cosmic-connect/userAvatar/neiltyson_bfxgye.jpg",
      userName: "Neil deGrasse Tyson",
      postedAt: "2023-03-28T14:41:43.959Z",
      content:
        "Mercury being closest to the Sun is not the hottest planet in our solar system - that title belongs to Venus.",
      reactions: {
        thumbsUp: 5,
        heart: 3,
        fire: 4,
      },
    },
    {
      id: uuidv4(),
      avatar:
        "https://res.cloudinary.com/dfuirkjxj/image/upload/w_300/v1686678458/cosmic-connect/userAvatar/tweetsauce_xgayps.png",
      userName: "Vsauce",
      postedAt: "2023-02-16T02:29:27.157Z",
      content: "To avoid crowds, visit areas that are less crowded.",
      reactions: {
        thumbsUp: 2,
        heart: 5,
        fire: 7,
      },
    },
  ],
  searchTerm: "",
};
