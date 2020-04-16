const items = [
  {
    name: "Armadyl God Sword",
  },
];

export function getItems() {
  return items;
}

export function getItem(name) {
  return items.find((m) => m.name === name);
}
