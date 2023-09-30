import React, { useEffect, useState } from "react";

function TableData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  const changeStatus = (id) => {
    let updatedData = data.map((item, index) =>
      item.id === id
        ? {
            ...item,
            completed: !item?.completed,
          }
        : item
    );
    setData(updatedData);
  };

  const deleteData = (id) => {
    let updatedData = data.filter((item, index) => item.id !== id);
    setData(updatedData);
  };

  const changeTitle = (id, e) => {
    let updatedData = data.map((item, index) =>
      item.id === id
        ? {
            ...item,
            title: e.target.value,
          }
        : item
    );
    setData(updatedData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {["ID", "Title", "Status", "Change Status", "Delete"].map(
              (item, index) => (
                <th key={index}>{item}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr className={item?.completed ? "Completed" : "NotCompleted"}>
              <td>{item?.id}</td>
              <td>
                <textarea
                  value={item?.title}
                  onChange={(e) => changeTitle(item.id, e)}
                />
              </td>
              <td>{item?.completed ? "Completed" : "Not Completed"}</td>
              <td>
                <button onClick={() => changeStatus(item.id)}>
                  Change Status
                </button>
              </td>
              <td>
                <button onClick={() => deleteData(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
