import React, { useState } from "react";
import styled from "styled-components";

const TodolistStyle = styled.div`
  max-width: 1000px;
  margin: auto;
  .input-group {
    display: flex;
    border: 1px solid #ccc;
    height: 40px;

    input {
      width: 100%;
      padding: 0 10px;
    }
    button {
      background: #ccc;
      padding: 0 10px;
    }
  }
  .todoTitle {
    font-size: 30px;
  }
  .listboard {
    display: flex;
    gap: 10px;
    > div {
      flex: 1;
    }
    .item {
      display: flex;
      margin-top: 10px;
      flex-direction: column;
      gap: 10px;
    }
  }
`;

const ListTodo = () => [
  {
    id: 1,
    name: "Công việc A",
    isActive: false,
  },
  {
    id: 2,
    name: "Công việc B",
    isActive: true,
  },
  {
    id: 3,
    name: "Công việc C",
    isActive: false,
  },
];

//filter => trả về 1 array theo điều kiện

export default function Todolist() {
  const [todolist, setTodolist] = useState(ListTodo);




  const [value, setValue] = useState("");
  const todoDoing = todolist.filter((e) => e.isActive == false);
  const todoDone = todolist.filter((e) => e.isActive == true);

  const onChange = (e) => {

    let text = e.target.value;
    setValue(text);
  };
  const onAdd = () => {
    const task = {
      id: Date.now(),
      name: value,
      isActive: false,
    };
    setTodolist([...todolist, task]);
    setValue("");
  };

  const onActive = (id) => {
    const task = todolist.find((e) => e.id == id);
    task.isActive = true
    setTodolist([...todoDoing])
  };

  const onKey = (e) => {
    if(e.key == 'Enter'){
        onAdd()
    }
  }
  return (
    <TodolistStyle>
      <div className="input-group">
        <input
          type="text"
          placeholder="...add"
          onChange={(event) => onChange(event)}
          value={value}
          onKeyUp={onKey}
        />
        <button onClick={onAdd}>Add</button>
      </div>
      <div className="todoTitle">Danh sách công việc</div>
      <div className="listboard">
        <div className="board">
          <div className="title">Công việc đang làm</div>
          <div className="item">
            {todoDoing.map((e) => {
              return <TodoItem key={e?.id} {...e} onActive={onActive} />;
            })}
          </div>
        </div>

        <div className="board">
          <div className="title">Công việc đã hoàn thành</div>
          <div className="item">
            {todoDone.map((e) => {
              return <TodoItem key={e?.id} {...e} />;
            })}
          </div>
        </div>
      </div>
    </TodolistStyle>
  );
}

const TodoItemStyle = styled.div`
  display: flex;
  border: 1px solid #ccc;
  width: 100%;

  .name {
    flex: 1;
    padding: 0 10px;
  }
  button {
    background: #ccc;
    padding: 0 10px;
  }
  &.isActive {
    background: #ccc;
    text-decoration: line-through;
  }
`;
const TodoItem = ({ id, name, isActive, onActive }) => {
  const _onActive = () => {
    onActive(id);
  };

  return (
    <TodoItemStyle className={isActive ? "isActive" : ""}>
      <div className="name">{name}</div>
      <button onClick={_onActive}>✓</button>
    </TodoItemStyle>
  );
};
