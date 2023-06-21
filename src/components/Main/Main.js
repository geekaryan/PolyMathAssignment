import { useSession, signIn, signOut } from "next-auth/react";
import Header from "../Header/Header";
import { useState } from "react";
import Cat from "./Cat";

const Main = () => {
  const { data: session } = useSession();
  const [inputValue, setInputValue] = useState("");
  const [apiData, setApiData] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  console.log(inputValue);

  const apiFetchHanlder = async () => {
    console.log("hi from api handler");
    try {
      const response = await fetch("https://cat-fact.herokuapp.com/facts");
      const result = await response.json();
      setApiData(result);
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  // console.log(session);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex gap-4 items-center justify-center mt-2">
        <div>
          <button
            className="bg-red-500 px-3 py-3 rounded-xl"
            onClick={apiFetchHanlder}
          >
            S Fetch data for Cat Facts
          </button>
        </div>
      </div>
      <div className="mx-4">
        {apiData.map((e) => (
          <Cat key={e.user} data={e} />
        ))}
      </div>
    </div>
  );
};

export default Main;
