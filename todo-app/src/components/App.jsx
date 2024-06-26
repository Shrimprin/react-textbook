import React, { useRef } from "react";

import { Container } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import TodoTitle from "./TodoTitle";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";

export default function App() {
  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem,
  } = useTodo();

  // TODOフォームで利用
  const inputEl = useRef(null);

  const handleAddTodoListItem = () => {
    if (inputEl.current.value === "") return;
    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  };

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  return (
    <Container centerContent p={{ base: "4", md: "6" }} maxWidth="3xl">
      <TodoTitle
        title="Todo App"
        as="h1"
        fontSize={{ base: "2xl", md: "3xl" }}
      />
      <TodoAdd
        placeholder="ADD TODO"
        leftIcon={<AddIcon />}
        buttonText="Add Todo"
        inputEl={inputEl}
        handleAddTodoListItem={handleAddTodoListItem}
      />

      <TodoList
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="Doing List"
        as="h2"
        fontSize={{ base: "xl", md: "2xl" }}
      />

      <TodoList
        todoList={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="Done List"
        as="h2"
        fontSize={{ base: "xl", md: "2xl" }}
      />
    </Container>
  );
}
