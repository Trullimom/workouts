import React, { useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import { WorkoutList } from "./components/workoutList";
import SearchBox from "./components/SearchBox";

function App() {
  const [input, setInput] = useState("");
  const onSearchMode = (e) => {
    setInput(e.target.value);
  };

  const filteredList = WorkoutList.filter((item) => {
    return item.title.toLowerCase().includes(input.toLowerCase());
  });

  return (
    <div className="App">
      <h1>WORKOUTS</h1>
      <SearchBox inputValue={input} onChange={onSearchMode} />
      <hr></hr>
      <CardList workouts={filteredList} />
    </div>
  );
}

export default App;
