import { useEffect, useState } from "react";
import axios from "axios";
import SubDog from "./subDog";

function App() {
  const [allDogs, setallDogs] = useState<{ [key: string]: string[] }>({});

  const dogStorage = new Map();

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get("https://dog.ceo/api/breeds/list/all");
        setallDogs(res.data.message);
      } catch (error) {
        console.log(error);
      }
    };

    getItems();
  }, []);

  return (
    <ul>
      {Object.keys(allDogs).map((dog) => {
        return <SubDog dog={dog} key={dog} dogStorage={dogStorage} />;
      })}
    </ul>
  );
}

export default App;
