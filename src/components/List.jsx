import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
    //todos배열에 필터 메서드를 호출하고 그 결과값을 반환
    //필터링하는 기준: 모든 투두아이템을 순회하면서 todo.content.includes(search) 의 결과값이
    //참이 되는 투두아이템만 필터링.
  };

  const filterdeTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 📝</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filterdeTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
