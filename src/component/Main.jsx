import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Header() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const inputRef = useRef("");
    const prevNumber = useRef(null);
    const mathSymbol = useRef("");

    useEffect(()=> {
        inputRef.current.focus()
    },[])
        
    const calButtonArray = [
        "C", "/", "7", "8", "9", "*",
        "4", "5", "6", "+", "1", "2",
        "3", "-", "", "0", "", "="
    ];

    const handleInputChange = (e) => {
        const inputValue = e.target.value;

        if (/^[0-9+\-*/.]*$/.test(inputValue)) {
            setInput(inputValue);
            const lastValue = inputValue.slice(-1);
            console.log(lastValue)
            if (/^[+\-*/.]*$/.test(lastValue)) {
                prevNumber.current = inputValue.slice(0, inputValue.length -1);
                mathSymbol.current = lastValue;
                setInput("");
            };
        };
        console.log("Input Chage to")
    };
    const handleResult = () => {
        if (mathSymbol.current !== "" && prevNumber.current !== null && input !== "") {
            if (mathSymbol.current === "+") {
                plus(prevNumber.current, input)
            } else if (mathSymbol.current === "-") {
                minus(prevNumber.current, input)
            } else if (mathSymbol.current === "*") {
                multiply(prevNumber.current, input)
            } else if (mathSymbol.current === "/") {
                divide(prevNumber.current, input)
            }
        }
        setInput(result);
    }
    const reset = () => {
        setInput("");
        setResult("");
        prevNumber.current = "";
        mathSymbol.current = "";
    }
    const plus = (prevNumber,number) => {
        prevNumber = Number(prevNumber);
        number = Number(number);
            const newResult = prevNumber+number;
            setResult(newResult);
            console.log("계산함")
            console.log(`결과는 ${result}`)
    }
    const minus = (prevNumber,number) => {
        prevNumber = Number(prevNumber);
        number = Number(number);
        try {
            const newResult = prevNumber-number;
            setResult(newResult);
        }
        catch (error){
            alert("ERROR");
            reset()
        }
    }
    const multiply = (prevNumber, number) => {
        prevNumber = Number(prevNumber);
        number = Number(number);
        try {
            const newResult = prevNumber*number;
            setResult(newResult);
        }
        catch (error){
            alert("ERROR");
            reset()
        }
    }
    const divide = (prevNumber, number) => {
        prevNumber = Number(prevNumber);
        number = Number(number);
        try {
            const newResult = prevNumber/number;
            setResult(newResult);
        }
        catch (error){
            alert("ERROR");
            reset()
        }
    }
  return (
    <>
      <StyledHeader>
        <StyledForm onSubmit={e => {
            e.preventDefault();
            console.log(input)
            handleResult()
        }}>
            <StyledInput
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            />
        </StyledForm>
        <StyledCalButtons>
          {calButtonArray.map((button, idx) => (
            <StyledButton
              key={idx}
              // onClick={() => handleKeyDown(button)}
            >
              {button}
            </StyledButton>
          ))}
        </StyledCalButtons>
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.div`
  width: 500px;
`;
const StyledForm = styled.form`

`;
const StyledInput = styled.input`
  width: 500px;
  height: 100px;
  font-size: 32px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;
const StyledCalButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 100px);
  gap: 10px;

  button:nth-child(1) {
    grid-column: 1/4;
  }
`;
const StyledButton = styled.button`
  font-size: 32px;
`;
