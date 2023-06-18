import styled from '@emotion/styled';

export const StyledBannerParentDiv = styled.div`
height: 60vh;
position: relative;
top: 0;
color: white;
object-fit: contain;
`;
export const StyledBannerContentsDiv = styled.div`
height: 32vh;
padding-top: 18vh;
`;
export const StyledBannerTitle = styled.h1`
padding-left: 20px;
`;
export const StyledBannerButtonsDiv = styled.div`
padding-left: 20px;
`;
export const StyledBannerButton = styled.button`
margin-right: 10px;
padding: 5px 10px;
font-size: 1rem;
font-weight: 600;
color: white;
background: #3e3e3e;
border: none;
border-radius: 6px;
cursor: pointer;
`;

export const StyledBannerDescription = styled.h1`
font-size: 0.8rem;
width: 60%;
max-width: 450px;
padding-top: 10px;
padding-left: 20px;
height: 70px;
`;
export const StyledEmptyDiv = styled.div`
width: 100%;
height: 10vh;
background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
)
`;