import React, { useState } from "react";

// Components
import Counter from "./counter";

const CountersList = () => {
  const initialCounters = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 2, name: "Ложка" },
    { id: 2, value: 4, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 1, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialCounters);

  function handleDelete(id) {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  }

  function incrementValues(id) {
    const newArrCounters = counters.slice();
    newArrCounters[id].value += 1;
    setCounters(newArrCounters);
  }

  function decrementValues(id) {
    const newArrCounters = counters.slice();
    newArrCounters[id].value -= 1;
    setCounters(newArrCounters);
  }

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={incrementValues}
          onDecrement={decrementValues}
        />
      ))}
    </>
  );
};

export default CountersList;
