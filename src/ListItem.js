import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ListItem = ({ data, setData,setEdit,setTitle,setDescription }) => {
  const handleDelete = (id) => {
    const newArray = [...data];
    newArray.splice(id, 1);
    setData(newArray);
  };

  const handleEdit = (id) => {
    let newEditItem = data.find((elem, ind) => {
      return ind=== id;
    });
    setTitle(newEditItem.title)
    setDescription(newEditItem.description)
    const finalData = data.splice(id, 1,newEditItem);
    setEdit(id);
    // setData(data);
  };

  return (
    <div className="card mt-5">
      {data?.map((item, index) => (
        // console.log(item,index)
        <Card key={index} id={index} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              Title: {item.title}
              <br />
              Description: {item.description}
            </Card.Subtitle>
            <Button
              className="btn btn-danger"
              onClick={() => {
                handleDelete(index);
              }}
            >
              Delete
            </Button>
            <Button
              className="btn btn-success"
              onClick={() => {
                handleEdit(index);
              }}
            >
              Edit
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ListItem;
