import styled from "styled-components";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { ClickBtn } from "../setting";
import Todomodal from "./Todomodal";

export default function Index() {
  return (
    <div>
      <h1>ToDoList</h1>
      <div>
        <Todomodal />
      </div>
      <ClickBtn>123</ClickBtn>
    </div>
  );
}
