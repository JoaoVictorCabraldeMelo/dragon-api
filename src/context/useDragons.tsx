import { useContext, createContext, ReactNode, useState } from "react";
import { client } from "../services/Api";
import { compareDragons } from "../utils/comparable";

export type Dragon = {
  createdAt: Date;
  name: string;
  type: string;
  histories: string[];
  id: string;
};

export type DragonRequest = {
  name?: string;
  type?: string;
  histories?: string[];
};

export type Dragons = {
  dragon: Dragon[];
};

export interface DragonContextParam {
  dragons: Dragons | null;
  showedDragon: Dragon | null;
  error: Error | null;
  getAllDragons: () => void;
  updateDragon: (id: string, params: DragonRequest) => void;
  deleteDragon: (id: string) => void;
  createDragon: (params: DragonRequest) => void;
  showDragon: (id: string) => void;
}

export const DragonContext = createContext<DragonContextParam | null>(null);

export interface DragonProviderInterface {
  children: ReactNode;
}

export const DragonContextProvider: React.FC<DragonProviderInterface> = ({
  children,
}) => {
  const [dragons, setDragons] = useState<Dragons | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [showedDragon, setShowedDragon] = useState<Dragon | null>(null);

  const getAllDragons = () => {
    client
      .get("")
      .then((res) => {
        setDragons({ dragon: res.data.sort(compareDragons) });
      })
      .catch((error: Error) => setError(error));
  };

  const showDragon = (id: string) => {
    client
      .get(id)
      .then((res) => setShowedDragon(res.data))
      .catch((error: Error) => setError(error));
  };

  const updateDragon = (id: string, params: DragonRequest) => {
    client
      .put(id, params)
      .then((res) => {
        let index = Number(id);

        if (dragons) {
          let updatedDragon = res.data;
          setShowedDragon(res.data);
          let newDragons = dragons;
          newDragons.dragon[index] = updatedDragon;
          newDragons.dragon = newDragons.dragon.sort(compareDragons);
          setDragons(newDragons);
        }
      })
      .catch((error: Error) => setError(error));
  };

  const deleteDragon = (id: string) => {
    client
      .delete(id)
      .then((res) => {
        if (dragons) {
          const filteredDragon = dragons.dragon.filter(
            (dragon) => dragon.id !== id
          );
          setDragons({ dragon: filteredDragon });
        }
      })
      .catch((error: Error) => setError(error));
  };

  const createDragon = (params: DragonRequest) => {
    client
      .post("", params)
      .then((res) => {
        let newDragon = res.data;
        if (dragons)
          setDragons({
            dragon: [...dragons.dragon, newDragon].sort(compareDragons),
          });
      })
      .catch((error) => setError(error));
  };

  return (
    <DragonContext.Provider
      value={{
        getAllDragons,
        updateDragon,
        deleteDragon,
        createDragon,
        showDragon,
        showedDragon,
        dragons,
        error,
      }}
    >
      {children}
    </DragonContext.Provider>
  );
};

export const useDragons = () => useContext(DragonContext) as DragonContextParam;
