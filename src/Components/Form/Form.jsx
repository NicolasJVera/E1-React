import {
  ButtonDelete,
  ButtonDeleteAll,
  ButtonSubmit,
  FormContainer,
  HrForm,
  InputContainer,
  InputForm,
  ItemContainer,
  ListContainer,
  TitleForm,
} from "./styles";

const Form = () => {
  return (
    <FormContainer>
      <TitleForm> Nuctasks </TitleForm>

      <InputContainer>
        <InputForm type="text" placeholder="¿Qué tarea deseas agregar?" />
        <ButtonSubmit type="submit"> Agregar </ButtonSubmit>
      </InputContainer>

      <ListContainer>
        <ItemContainer>
          <p>Tarea 1</p>
          <ButtonDelete>Borrar</ButtonDelete>
        </ItemContainer>
        <HrForm />
        <ItemContainer>
          <p>Tarea 2</p>
          <ButtonDelete>Borrar</ButtonDelete>
        </ItemContainer>
      </ListContainer>

      <ButtonDeleteAll>Borrar Todas</ButtonDeleteAll>
    </FormContainer>
  );
};

export default Form;
