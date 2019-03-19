let gradients = [
  {
    id: 1,
    category: "purple",
    title: "midnight",
    style:
      "background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);",
    button: "get code"
  },
  {
    id: 2,
    category: "blue",
    title: "skyline",
    style:
      "background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);",
    button: "get code"
  },
  {
    id: 3,
    category: "purple",
    title: "sunrise",
    style:
      "background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);",
    button: "get code"
  },
  {
    id: 4,
    category: "blue",
    title: "planets",
    style:
      "background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);",
    button: "get code"
  }
];

module.exports = {
  read: (req, res) => {
    res.status(200).send(gradients);
  }
};
