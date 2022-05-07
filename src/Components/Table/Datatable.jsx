import React, { useState } from "react";

export const Datatable = ({ mydata }) => {
  const [data, setData] = useState([]);
  return (
    <React.Fragment>
      <input
        type="text"
        onChange={(e) => setData({ ...data, fname: e.target.value })}
      />
      <input
        type="text"
        onChange={(e) => setData({ ...data, mname: e.target.value })}
      />
      <button onClick={() => mydata(data)}>Add</button>
    </React.Fragment>
  );
};
