const getRandomNumber = () => {
  return (Math.floor(Math.random()*10));
}
export const Users = [
  {
    id:1,
    profilePicture: '1600x900/?man?' + Math.floor(Math.random()*30),
    username: "Safak Kocaoglu",
  },
  {
    id:2,
    profilePicture: '1600x900/?woman?' + Math.floor(Math.random()*30),
    username: "Janell Shrum",
  },
  {
    id:3,
    profilePicture: '1600x900/?man?' + Math.floor(Math.random()*30),
    username: "Alex Durden",
  },
  {
    id:4,
    profilePicture: '1600x900/?woman?' + Math.floor(Math.random()*30),
    username: "Dora Hawks",
  },
  {
    id:5,
    profilePicture: '1600x900/?man?' + Math.floor(Math.random()*30),
    username: "Thomas Holden",
  },
  {
    id:6,
    profilePicture: '1600x900/?woman?' + Math.floor(Math.random()*30),
    username: "Shirley Beauchamp",
  },
  {
    id:7,
    profilePicture: '1600x900/?man?' + Math.floor(Math.random()*30),
    username: "Travis Bennett",
  },
  {
    id:8,
    profilePicture: '1600x900/?woman?' + Math.floor(Math.random()*30),
    username: "Kristen Thomas",
  },
  {
    id:9,
    profilePicture: '1600x900/?man?' + Math.floor(Math.random()*30),
    username: "Gary Duty",
  },
  {
    id:10,
    profilePicture: '1600x900/?woman?' + Math.floor(Math.random()*30),
    username: "Safak Kocaoglu",
  },
];

export const Posts = [
  {
    id: 1,
    desc: "Love For All",
    photo: '1600x900/?woman?' + Math.floor(Math.random()*30),
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    photo: '1600x900/?woman?' + Math.floor(Math.random()*30),
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    desc: "Every moment is a fresh beginning.",
    photo: '1600x900/?woman?' + Math.floor(Math.random()*30),
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    photo: '1600x900/?woman?' + Math.floor(Math.random()*30),
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    photo: '1600x900/?man?' + Math.floor(Math.random()*30),
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
  },
  {
    id: 6,
    photo: '1600x900/?woman?' + Math.floor(Math.random()*30),
    date: "1 day ago",
    userId: 6,
    like: 44,
    comment: 6,
  },
  {
    id: 7,
    desc: "Never regret anything that made you smile.",
    photo: '1600x900/?man?' + Math.floor(Math.random()*30),
    date: "2 days ago",
    userId: 7,
    like: 52,
    comment: 3,
  },
  {
    id: 8,
    photo: '1600x900/?woman?' + Math.floor(Math.random()*30),
    date: "3 days ago",
    userId: 8,
    like: 15,
    comment: 1,
  },
  {
    id: 9,
    desc: "Change the world by being yourself.",
    photo: '1600x900/?man?' + Math.floor(Math.random()*30),
    date: "5 days ago",
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 10,
    photo: '1600x900/?woman?' + Math.floor(Math.random()*30),
    date: "1 week ago",
    userId: 10,
    like: 104,
    comment: 12,
  },
];
