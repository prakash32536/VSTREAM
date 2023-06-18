import { Card, Typography , Button, Dialog, TextField } from "@mui/material";
import styled from "@emotion/styled";

export const StyledCard = styled(Card)`
min-width: 270px;
width: 50%;
display: flex;
justify-content: center;
text-align: center;
align-items: center;
max-width: 450px;
height: 45vh;
margin: 19px;
flex-direction : column;
background: #f7fffc;
padding :20px;
`;
export const StyledTypography = styled(Typography)`
font-weight: bold;
`;
export const StyledButton = styled(Button)`
height: 100%;
`;

export const StyledDialog = styled(Dialog)`
.css-uhb5lp{
    background: black;
    color: white;
    border: 1px solid #393939;
    border-radius: 10px;
    align-items: center;
}

`;

export const StyledLoginParentDiv = styled.div`
height:100vh;
Width:100%;
display: flex;
justify-content: center ;
align-items: center;
`;

export const StyledForm = styled.form`
display :flex;
flex-direction : column;
justify-content : center;
align-item : center
margin-top : 10px;
`;

export const StyledTextField = styled(TextField)`
color: white;
margin-top : 10px;
`;

export const StyledButtonForLoginAndSignin = styled(Button)`
color: white;
background : black;
margin-top : 10px;
`;
export const StyledP = styled.p`

`;
export const StyledSpan = styled.span`
color: purple;
cursor: pointer;
font-weight: bold;
`;




