import { Dragon } from "../context/useDragons";

export const compareDragons = (firstDragon: Dragon, secondDragon: Dragon) => {

  let firstDragonName = firstDragon.name.toUpperCase();
  let secondDragonName = secondDragon.name.toUpperCase();

  if (firstDragonName < secondDragonName) return -1;

  if (firstDragonName > secondDragonName) return 1;

  return 0;
};
