import { useAuth } from "../../context/useAuth";
import { useDragons, DragonRequest } from "../../context/useDragons";
import { GreenButton, RedButton } from "../../components/Buttons/Buttons";
import { useEffect, useState } from "react";
import { HomeContainer, ContainerDragon } from "../../components/Layout/Home";
import { useNavigate } from "react-router-dom";
import { FormWrapper } from "../../components/Layout/Login";
import Input from "../../components/Input/Input";

const Home = () => {
  const { handleLogout } = useAuth();
  const { getAllDragons, dragons, deleteDragon, createDragon } = useDragons();

  const [data, setData] = useState<DragonRequest>({
    name: "",
    type: "",
    histories: [],
  });

  useEffect(() => {
    getAllDragons();
  }, []);

  const navigate = useNavigate();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <HomeContainer>
      <h2>Home</h2>
      <RedButton onClick={handleLogout}>Logout</RedButton>
      <Input
        label="Dragon Name"
        name="name"
        type="text"
        onChange={onChange}
        required
      />
      <Input
        label="Type"
        name="type"
        type="text"
        onChange={onChange}
        required
      />
      <GreenButton onClick={() => createDragon(data)}>
        Create a new dragon
      </GreenButton>

      {dragons?.dragon.map((dragon) => {
        return (
          <>
            <ContainerDragon
              key={dragon.id}
              onClick={() => navigate(`/dragons/${dragon.id}`)}
            >
              <p>{dragon.name}</p>
            </ContainerDragon>
            <RedButton
              onClick={() => deleteDragon(dragon.id)}
              margin="0 0 5px 0"
            >
              Delete
            </RedButton>
          </>
        );
      })}
    </HomeContainer>
  );
};

export default Home;
