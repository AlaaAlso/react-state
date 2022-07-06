import React, { useState } from "react";

const Hookcounter = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <input
        type=""
        value={name.firstName}
        onChange={(e) => setName({ firstName: e.target.value })}
      />
      <input
        type=""
        value={name.lastName}
        onChange={(e) => setName({ lastName: e.target.value })}
      />
      <h2> your first name - {name.firstName}</h2>
      <h2> your first name - {name.lastName}</h2>
    </div>
  );
};

export default Hookcounter;

// <div>
//   //  <button onClick={()=>  setCount (initialcount)}>Resat</button>
//   //  <button onClick={()=>  setCount (count + 1)}>Increment</button>
//   //  <span>{count}</span>
//   //  <button onClick={()=>  setCount (count - 1)}>Decrement</button>
//   //   </div>
