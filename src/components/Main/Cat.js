import { useState } from "react";

const Cat = ({ data }) => {
  const [button, setButton] = useState("Save fact to user");
  const postHandler = async () => {
    try {
      setButton("Sending data..");
      const response = await fetch(
        "https://assignment-53959-default-rtdb.firebaseio.com/cat.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data.text),
        }
      );
      const results = await response.json();
      console.log(results);
      setButton("Data sent");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <div>
        <h1>
          <p>{data.text}</p>
        </h1>
      </div>
      <div className="my-2 ">
        <button
          className="bg-green-400 px-2 py-2 border-r-2 rounded-xl"
          onClick={postHandler}
        >
          {button}
        </button>
      </div>
    </div>
  );
};

export default Cat;
