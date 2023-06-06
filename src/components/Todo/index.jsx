import React, { useState } from "react";
import styled from "styled-components";

const TodoListStyled = styled.div`
  max-width: 1300px;
  margin: auto;
  .input-group {
    display: flex;
    border: 1px solid #ccc;
    height: 40px;
    button {
      background: #ccc;
      padding: 0 10px;
    }
    input {
      width: 100%;
      padding: 0 10px;
    }
  }
  .list-board {
    display: flex;
    margin-top: 10px;
    gap: 50px;
    > div {
      flex: 1;
    }
    .title {
      margin-bottom: 10px;
    }
    .item {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;

const dataTodoList = () => [
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
export default function Todo() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState(dataTodoList);
  const taskDoding = todoList?.filter((e) => !e.isActive);
  const taskDone = todoList?.filter((e) => e.isActive);

  const onChange = (ev) => {
    let value = ev.target.value.trim();
    setValue(value);
  };

 
  const onAdd = () => {
    if(value){
      const task = {
        id: Date.now(),
        name: value.trim(),
        isActive: false,
      };
      setTodoList([...todoList, task]);
      setValue('')
    }

  };
  const onKey = (e) => {
    if(e.key == 'Enter'){
      onAdd()
    }
  }
  const onAcitve= (id) => {
    let task = todoList?.find(e => e.id == id)
    task.isActive = true
    setTodoList([...todoList])
  }

  return (
    <TodoListStyled>
      <div className="input-group">
        <input
          type="text"
          placeholder="...Thêm công việc"
          onChange={onChange}
          value={value.trim()}
          onKeyUp={onKey}
        />
        <button disabled={!value.trim()} onClick={onAdd}>
          Add
        </button>
      </div>

      <div className="list-board">
        <div className="board">
          <div className="title">Công việc đang làm</div>
          <div className="item">
            {taskDoding?.map((e, i) => (
              <TodoItem  key={i} {...e}  onAcitve={onAcitve}/>
            ))}
          </div>
        </div>
        <div className="board">
          <div className="title">Công việc đã hoàn thành</div>
          <div className="item">

          {taskDone?.map((e, i) => (
              <TodoItem key={i} {...e}  onAcitve={onAcitve}/>
            ))}
          </div>
        </div>
      </div>
    </TodoListStyled>
  );
}

const TodoItemsStyle = styled.div`
  display:flex;
  padding: 10px;
  border:1px solid #ccc;
  &.isActive{
    background:#ccc;
    text-decoration: line-through;
  }
  .name{
    flex:1;
  }
  button{
    background:#ccc;
    padding: 0 10px;
  }

`;
const TodoItem = (props) => {
  return (
    <TodoItemsStyle className={props?.isActive ? 'isActive': ''}>
      <div className="name">{props?.name}</div>
      <button onClick={() => props?.onAcitve(props?.id)}>✓</button>
    </TodoItemsStyle>
  );
};
