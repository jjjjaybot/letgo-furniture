const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Lamp",
    value: 1
  },
  {
    backgroundColor: "#fd9644",
    icon: "chair-school",
    label: "Chair",
    value: 2
  },
  {
    backgroundColor: "#fed330",
    icon: "pillar",
    label: "Desk",
    value: 3
  },
  {
    backgroundColor: "#26de81",
    icon: "printer",
    label: "Office",
    value: 4
  },
  {
    backgroundColor: "#2bcbba",
    icon: "image",
    label: "Art",
    value: 5
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 6
  }
];

const getCategories = () => categories;

const getCategory = id => categories.find(c => c.id === id);

module.exports = {
  getCategories,
  getCategory
};
