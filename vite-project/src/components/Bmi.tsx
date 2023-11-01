import React from "react";
import { useState } from "react";

function Bmi() {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  let bmi = 0;
  bmi = weight / (height * height);

  const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(+event.target.value);
  };
  const onChangeHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(+event.target.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted");
  };
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <h1>Your BMI : {bmi.toFixed(2)}</h1>
          <label htmlFor="weight">weight</label>
          <input
            type="text"
            id="weight"
            name="weight"
            onChange={onChangeWeight}
          />
          <label htmlFor="username">height (m)</label>
          <input
            type="text"
            id="height"
            name="height"
            onChange={onChangeHeight}
          />
        </form>
      </div>
    </>
  );
}

export default Bmi;
