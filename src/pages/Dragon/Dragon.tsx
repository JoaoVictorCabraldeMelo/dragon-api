import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DragonDiv } from "../../components/Layout/Dragon";
import { FormWrapper } from "../../components/Layout/Login";
import Input from "../../components/Input/Input";
import { useDragons, DragonRequest } from "../../context/useDragons";
import { GreenButton } from "../../components/Buttons/Buttons";

const DragonShow = () => {
  const { showDragon, showedDragon, updateDragon } = useDragons();
  const params = useParams();

  useEffect(() => {
    if (params.id) showDragon(params?.id);
  }, []);

  const [data, setData] = useState<DragonRequest>({
    name: "",
    type: "",
    histories: [],
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <DragonDiv>
      <p>{showedDragon?.name}</p>
      <p>{showedDragon?.type}</p>
      <h2>Histories</h2>
      {showedDragon?.histories.map((history) => (
        <p>{history}</p>
      ))}
      <FormWrapper>
        <h2>Update Dragon</h2>
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
        <GreenButton
          onClick={() =>
            params.id
              ? updateDragon(params?.id, data)
              : console.log("Param not found")
          }
        >
          Update Dragon
        </GreenButton>
      </FormWrapper>
    </DragonDiv>
  );
};

export default DragonShow;
