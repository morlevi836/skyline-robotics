import axios from "axios";
import React from "react";

const SubDog = ({
  dog,
  dogStorage,
}: {
  dog: string;
  dogStorage: Map<any, any>;
}) => {
  const [data, setData] = React.useState<string[]>([]);
  const [isClicked, setIsClicked] = React.useState<boolean>(false);

  const getSubBreedsByBreeds = async (dog: string) => {
    if (!dogStorage.get(dog)) {
      try {
        const res = await axios.get(`https://dog.ceo/api/breed/${dog}/list`);
        setData(res.data.message);

        setIsClicked(true);
        dogStorage.set(dog, res.data.message);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <li key={dog} onClick={() => getSubBreedsByBreeds(dog)}>
      {dog}

      {isClicked &&
        (data.length === 0 ? (
          <span className="pl-5">no sub dogs have</span>
        ) : (
          data.map((subDog) => {
            return (
              <span className="pl-5" key={subDog}>
                {subDog}
              </span>
            );
          })
        ))}
    </li>
  );
};

export default SubDog;
