import React, { useState } from "react";
import { Datatable } from "./Datatable";
import { Table1 } from "./Table1";

export const TableManager = () => {
  const [data1, setdata1] = useState([]);
  const mydata = (data) => {
    setdata1([...data1, data]);
  };
  return (
    <div>
      <Datatable mydata={mydata} />
      <Table1 data1={data1} />
    </div>
  );
};
