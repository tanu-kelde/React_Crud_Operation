import { render } from "@testing-library/react";
import React, { Component, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListItem from "./ListItem";

function AddItem() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null);
  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => {
    setIsRefresh(false);
  }, [isRefresh]);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!data) {
      alert("Please add task");
    } else if (edit === null) {
      setData((prev) => [...prev, { title, description }]);
      setTitle("");
      setDescription("");
    } else {
      data.splice(edit, 1, { title, description });
      setIsRefresh(true);
      console.log({ data });
    }
  };
  return (
    <div className="AddItem">
      <Form className="add-form " onSubmit={handlesubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Desctiption</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Desctiption"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>

      <ListItem
        data={data}
        setTitle={setTitle}
        setDescription={setDescription}
        setData={setData}
        setEdit={setEdit}
      />
    </div>
  );
}

export default AddItem;
