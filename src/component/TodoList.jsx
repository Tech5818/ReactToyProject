import React, { useContext } from "react";
import { styled } from "styled-components";
import { TodoContext } from "../TodoContext";

const TodoList = ({value}) => {
    const { dispatch } = useContext(TodoContext);

    const delTodo = () => {
        dispatch({type: "del-Todo", load: {id: value.id}})
    }
    const TextEdit = () => {
        dispatch({type: "edit", load: {id: value.id}})
        console.log(value.check)
    }

    return (
        <StyledTodoList>
            <StyledTodoValue check={value.check} onClick={
            TextEdit
        }>
                {value.inputValue}
            </StyledTodoValue>
            
            <StyledDelButton onClick={
                delTodo
            }>X</StyledDelButton>
        </StyledTodoList>
    )
}

const StyledTodoList = styled.div`
    width: 480px;
    height: 70px;
    margin: 0;
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
`;
const StyledTodoValue = styled.p`
    text-decoration: ${(props) => props.check ? "line-through" : "none"};
    color: ${(props) => props.check ? "#aaa" : "black"};
`;

const StyledDelButton = styled.button`
    background: #fff;
    border: none;
    color: red;
    font-size: 32px;
    border-radius: 30px;
    width: 40px;
    height: 40px;

    &:hover {
        background: #ccc;
    }
`;

export default TodoList;