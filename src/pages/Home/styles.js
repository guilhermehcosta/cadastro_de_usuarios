import styled from "styled-components"

export const Container = styled.div`
     background: #181f36;
     display: flex;
     align-items: center;
     flex-direction: column;
     justify-content: space-evenly;
     padding: 20px;
     height: 100vh;
`

export const Title = styled.div`
     color: #fff;
     text-align: center;
     font-size: 38px;
     font-style: normal;
     font-weight: 600;

`



export const Form = styled.form`
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 20px;
     max-width: 500px;
`

export const ContainerInputs = styled.div`
     display: flex;
     gap: 20px;

`

export const Input = styled.input`
     border-radius: 10px;
     border: 1px solid #d2dae2;
     background: #fff;
     padding: 12px 20px;
     outline: none;
     width: 100%;
`

export const InputLabel = styled.label`
     color: #fff;
     font-size: 12px;
     font-weight: 500;

     span {
          color: #ef4f45;
          font-weight: bold;
     }
`





