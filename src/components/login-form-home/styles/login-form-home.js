import styled from "styled-components";

export const LoginFormHomeStyled = styled.div`
@media(min-width: 600px) {
  width: 60%;
  margin-top: 112px;
}
`

export const LoginFormContainer = styled.div`
margin: 40px 32px;
@media(min-width: 600px) {
  max-width: 288px;
  margin-left: 15%;
}

@media(min-width: 700px) {
  max-width: 288px;
  margin-left: 30%;
}
`

export const Title = styled.h2`
font-weight: 400;
font-size: 24px;
line-height: 32px;
color: #494F66;
margin-bottom: 24px;
`

export const Form = styled.form``


export const Ddi = styled.div`
margin-bottom: 16px;
`
export const DdiContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const PoliticsMessage = styled.div`
margin: 24px 0 32px 0;
`

export const PoliticsMessageContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
`

export const Message = styled.label`
flex: 1;
font-weight: 300;
font-size: 12px;
color: #676F8F;
line-height: 20px;
letter-spacing: 0.8px;
user-select: none;
`
export const Link = styled.a`
font-weight: 400;
color: #676F8F;
text-decoration: underline;
`

export const CheckedContainer = styled.div`
background-color: #e6e6e6;
border-radius: .2em;
width: 20px;
height: 20px;
margin-right: 12px;
overflow: hidden;
cursor: pointer;
&:hover {
  background-color: #c6c6c6;
}
`

export const CheckBox = styled.div`
width: 100%;
height: 100%;
background-color: #43B748;

display: flex;
justify-content: center;
align-items: center;
user-select: none;
`

export const Icon = styled.span`
left: 9px;
top: 5px;
width: 5px;
height: 10px;
border: solid white;
border-width: 0 3px 3px 0;
-webkit-transform: rotate(45deg);
-ms-transform: rotate(45deg);
transform: rotate(45deg);
`

export const SelectDocType = styled.div`
position: relative;
height: 56px;
`

export const SelectHeader = styled.div`
height: 100%;
display: flex;
align-items: center;
padding: 1em;
border-top: 1px solid #C5CBE0;
border-left: 1px solid #C5CBE0;
border-bottom: 1px solid #C5CBE0;
border-top-left-radius: .4em;
border-bottom-left-radius: .4em;
color: #494F66;
cursor: pointer;
user-select: none;

&:hover {
  background-color: #fafafa;
}
`

export const SelectBody = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: 100000;
background-color: rgba(0,0,0,.5);

@media(min-width: 600px) {
  left: 40%;
  width: 60%;
}

display: flex;
padding: 32px;
align-items: center;
`

export const SelectContent = styled.ul`
background-color: #ffffff;
list-style: none;
width: 100%;
border-radius: .4em;
animation: myAnimation .25s linear;
max-width: 400px;
margin: 0 auto;
overflow: hidden;

@keyframes myAnimation {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
`

export const Li = styled.li`
border-bottom: 1px solid #e6e6e6;
`
export const A = styled.a`
text-decoration: none;
width: 100%;
display: block;
padding: 16px;
height: 56px;
text-align: center;
`



export const DdiInput = styled.input`
height: 56px;
padding: 1em;
width: 100%;
border: 1px solid #C5CBE0;
color: #494F66;
border-top-right-radius:.4em;
border-bottom-right-radius:.4em;
font-size: 16px;
outline: none;
line-height: 24px;
&::placeholder {
  color: #A3ABCC;
}
&:focus {
  border-color: #6769FF;
}
`
export const Left = styled.div``
export const Right = styled.div`
flex: 1;
`

export const FormElement = styled.div`
position: relative;
margin-bottom: 16px;
`

export const Input = styled.input`
border: 1px solid #C5CBE0;
height: 56px;
padding: 16px;
border-radius: .4em;
width: 100%;
outline: none;
color: #A3ABCC;
font-size: 16px;
line-height: 24px;
color: #494F66;
&::placeholder {
  color: #A3ABCC;
}

&:focus {
  border-color: #6769FF;
}
`

export const InputError = styled.p`
font-size: 14px;
color: red;
margin-top: .5em;
text-align: center;
`


export const Button = styled.button`
height: 56px;
padding: 16px;
text-align: center;
background-color: #EF3340;
color: #ffffff;
outline: none;
width: 100%;
border: none;
border-radius: .4em;
font-size: 14px;
font-weight: 700;
cursor: pointer;

@media(min-width: 600px) {
  max-width: 192px;
}
`