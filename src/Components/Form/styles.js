import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: #fcfcfc;
  min-width: 700px;
  display: flex;
  padding: 16px;
  gap: 35px;
  border-radius: 5px;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.75) 2px 2px 31px -17px;

  @media (max-width: 992px) {
    min-width: 600px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    min-width: 600px;
  }

  @media (max-width: 572px) {
    min-width: 350px;
  }
`;

export const TitleForm = styled.h1`
  font-size: 1.7rem;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InputForm = styled.input`
    padding: 10px;
    display: flex;
    border-radius: 5px;
    width: 100%;
    border: 1px solid rgb(220, 220, 220);

    &:focus {
    outline: none;
  }
`;

export const ButtonSubmit = styled.button`
    padding: 10px 26px;
    border-radius: 5px;
    border: none;
    background-color: rgb(0, 123, 255);
    color: rgb(255, 255, 255);
    cursor: pointer;
`;

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

export const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%
`;

export const List = styled.ul``;

export const ListItem = styled.li``;

export const ButtonDelete = styled.button`
    padding: 6px 12px;
    border-radius: 5px;
    border: none;
    background-color: rgb(255, 77, 77);
    color: rgb(255, 255, 255);
    cursor: pointer;
`;

export const ButtonDeleteAll = styled.button`
    width: 100%;
    padding: 10px 26px;
    background-color: rgb(255, 77, 77);
    border: none;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    cursor: pointer;
`;

export const HrForm = styled.hr`
    width: 100%;
    opacity: 0.3;
`;
