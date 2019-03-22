let gradients = [
  {
    id: 1,
    category: "purple",
    title: "midnight",
    style:
      " linear-gradient(to top, #31cfd0 0%, #330867 100%)",
    button: "get code"
  },
  {
    id: 2,
    category: "blue",
    title: "skyline",
    style:
      "linear-gradient(to top, #48c6ef 0%, #6f86d5 100%)",
    button: "get code"
  },
  {
    id: 3,
    category: "orange",
    title: "sunrise",
    style:
      "linear-gradient(120deg, #f6d366 0%, #fda085 100%)",
    button: "get code"
  },
  {
    id: 4,
    category: "blue",
    title: "planets",
    style:
      "linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #58c6e1 42%, #b49fda 79%, #7ac5d8 100%)",
    button: "get code"
  },
  {
    id: 5,
    category: "grey",
    title: "eclipse",
    style:
      "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
    button: "get code"
  },
  {
    id: 6,
    category: "purple",
    title: "plum sky",
    style:
      "linear-gradient(to top, #cc208e 0%, #6713d2 100%)",
    button: "get code"
  },
  {
    id: 7,
    category: "green",
    title: "Azure",
    style:
      "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
    button: "get code"
  },
  {
    id: 8,
    category: "purple",
    title: "purple haze",
    style:
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    button: "get code"
  },{
    id: 9,
    category: "purple",
    title: "Surfers wave",
    style:
      "linear-gradient(to top, #3b41c5 0%, #a981bb 49%, #ffc8a9 100%)",
    button: "get code"
  },{
    id: 10,
    category: "orange",
    title: "day break",
    style:
      "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)",
    button: "get code"
  },{
    id: 11,
    category: "purple",
    title: "beach waves",
    style:
      "linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)",
    button: "get code"
  },
  {
    id: 12,
    category: "purple",
    title: "sherbert",
    style:
      "linear-gradient(to top, #e8198b 0%, #c7eafd 100%)",
    button: "get code"
  },
  {
    id: 12,
    category: "purple",
    title: "deep water",
    style:
      "linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%)",
    button: "get code"
  },
  {
    id: 12,
    category: "purple",
    title: "aruba",
    style:
      "linear-gradient(to top, #e14fad 0%, #f9d423 100%)",
    button: "get code"
  },
  {
    id: 12,
    category: "purple",
    title: "cotton",
    style:
      "linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)",
    button: "get code"
  },
  {
    id: 12,
    category: "purple",
    title: "cotton candy",
    style:
      "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)",
    button: "get code"
  },
  {
    id: 12,
    category: "purple",
    title: "hawaii ocean",
    style:
      "linear-gradient(-225deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 100%)",
    button: "get code"
  },
  {
    id: 12,
    category: "green",
    title: "wheat grass",
    style:
      "linear-gradient(to top, #9be15d 0%, #00e3ae 100%)",
    button: "get code"
  },
  {
    id: 12,
    category: "green",
    title: "deep space",
    style:
      "linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)",
    button: "get code"
  },{
    id: 12,
    category: "green",
    title: "grey matter",
    style:
      "linear-gradient(60deg, #29323c 0%, #485563 100%)",
    button: "get code"
  },
  
];

module.exports = {
  read: (req, res) => {
    res.status(200).send(gradients);
  }
};
