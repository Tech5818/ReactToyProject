import React from "react";
import styled from "styled-components";

export default function Info({userInfo, setUserInfo}) {
    
    return(
        <StyledInfoBox>
            <StyledForm onSubmit={e => {
                e.preventDefault();
                console.log("123")
                if (userInfo.name && userInfo.age && userInfo.sex && userInfo.introduce){
                    setUserInfo(prevInfo => ({
                        ...prevInfo,
                        authentication: true
                    }))
                    console.log("submit")
                }
            }}>
                <Styledtitle>
                    정보를 입력해 주세요.
                </Styledtitle>
                <StyledInput
                type="text"
                placeholder="이름을 입력해 주세요"
                value={userInfo.name || ""}
                onChange={ e => setUserInfo(prevInfo => ({
                    ...prevInfo,
                    name: e.target.value
                }))} />

                <StyledInput
                type="number"
                placeholder="나이를 입력해 주세요"
                value={userInfo.age || ""}
                onChange={ e => setUserInfo(prevInfo => ({
                    ...prevInfo,
                    age: e.target.value
                }))} />

                <StyledInput
                type="text"
                placeholder="성별을 입력해 주세요"
                value={userInfo.sex || ""}
                onChange={ e => setUserInfo(prevInfo => ({
                    ...prevInfo,
                    sex: e.target.value
                }))} />
                
                <StyledInput
                type="text"
                placeholder="간단한 소개를 해주세요"
                value={userInfo.introduce || ""}
                onChange={ e => setUserInfo(prevInfo => ({
                    ...prevInfo,
                    introduce: e.target.value
                }))} />
                <button>submit</button>
            </StyledForm>
        </StyledInfoBox>

            
    );
}

const StyledInfoBox = styled.div`

`;
const StyledForm = styled.form`
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
`;
const Styledtitle = styled.p`
    font-size : 32px;
    font-weight : bold;
`;
const StyledInput = styled.input`
    margin-bottom : 20px;
    width : 300px;
    height : 50px;
    font-size: 20px;
    border: 1px solid #aaa;
    transition: 0.3s;

    &:focus {
        outline: none;
        box-shadow: 0 0 10px;
    }
`;