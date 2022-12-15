import React, { useState } from 'react';
import animalData from '../animalData';

function AnimalDisplay() {
  const [animal, setAnimal] = useState(animalData);
  const [typeInput, setTypeInput] = useState('');
  return (
    <>
      <div>
        <span>Animal type: {animal.type} </span>
        <span>Journey Count {animal.journeysNo} </span>
        <span>Is animal here?: {String(animal.isHere)} </span>
      </div>
      <form>
        <input type='text' name='animal-type' onChange={changeInput} />
        <button onClick={saveType}>Save Animal</button>
      </form>
      {animal.isHere ? (
        <button onClick={() => journey()}>Go on a Journey</button>
      ) : (
        <button onClick={() => journey()}>Return from a Journey</button>
      )}
    </>
  );

  //
  function changeInput(e) {
    setTypeInput((state) => ({ ...state, type: e.target.value }));
  }

  function saveType(e) {
    e.preventDefault();
    setAnimal((state) => ({ ...state, type: typeInput }));
  }

  function journey() {
    if (animal.journeysNo && animal.isHere) {
      setAnimal((state) => ({
        ...state,
        isHere: true,
        journeysNo: (state.journeysNo += 1),
      }));
    }
  }
}

export default AnimalDisplay;
