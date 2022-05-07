import React from "react";

export const Table1 = ({ data1 }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>sl</th>
            <th>fname</th>
            <th>mname</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((item, key) => (
            <tr>
              <td>{key + 1}</td>
              <td>{item.fname}</td>
              <td>{item.mname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
