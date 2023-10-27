import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import styled from "styled-components";
import TodoList from "./TodoList";

const Content = () => {
    const { TodoValues } = useContext(TodoContext);
    console.log(TodoValues)
    return (
        <>
            <StyledContent>
                <StyledTodos>
                    {TodoValues.TodoList.map((todo, idx) => (
                        <TodoList key={idx} value={todo} />
                    ))}
                </StyledTodos>
            </StyledContent>
        </>
    )
}

const StyledContent = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
`;
const StyledTodos = styled.div`
    width: 480px;
    background: #f7f7f7;
    height: 600px;
    overflow-y: scroll;
    overflow-x: hidden;
`


export default Content;