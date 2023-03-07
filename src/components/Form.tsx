import React from "react";

const Form: React.FC = () => {
  const [inputText, setInputText] = React.useState("Uwu");

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <form>
      <input type="text" placeholder="try Rikako Aida" onChange={inputTextHandler} value={inputText} />
      <button>Search</button>
      <div>
        {inputText}
      </div>
    </form>
  );
};

export default Form;
