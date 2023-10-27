import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TodoContext } from "../TodoContext";

const Header = () => {
    const { dispatch } = useContext(TodoContext);
    const [input, setInput] = useState("");
    const handleSubmitInput = () => {
        dispatch({ type : "submit_input", load : {input} });
    }


    return (
        <StyledHeader>
            <StyledTitle>TodoList</StyledTitle>
            <StyledTodoForm onSubmit={e => {
                e.preventDefault();
                handleSubmitInput();
                setInput("");
                console.log(input)
            }}>
                <StyledTodoInput type="text" placeholder="할 일을 입력해 주세요!" value={input} onChange={
                    e => {setInput(e.target.value)}
                }/>
                <StyledTodoButton>+</StyledTodoButton>
            </StyledTodoForm>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledTitle = styled.p`
    font-size: 80px;
    font-weight: bold;
    margin: 0;
`;
const StyledTodoInput = styled.input`
    width: 350px;
    height: 30px;
    padding: 10px 25px;
    border-radius: 50px;
    border: 1px solid #aaa;
    font-size: 20px;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    margin-right: 25px;
    &:focus {
        outline: none;
    }
`;
const StyledTodoForm = styled.form`
    border-bottom: 1px solid #bbb;
    width: 480px;
    height: 80px;
`;
const StyledTodoButton = styled.button`
    width: 52px;
    height: 52px;
    font-size: 32px;
    border-radius: 23px;
    border: 1px solid #aaa;
    background: #fff;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
`;

export default Header;