import styled from 'styled-components';


export const Item = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: 50px;
  margin-top: 1.5rem;

  border: 1px solid var(--color-grey-medium);
  border-radius: 2px;
`;

export const ContentLink = styled.p`
  color: white;
  font-size: 1rem;
  font-weight: bold;

`;


export const Left = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  padding-right: 1rem;
`;

export const Right = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  padding-left: 1rem;
`;

export const ImgThumb = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  object-fit: cover;
  overflow: hidden;
  margin-right: 2rem;
  border : 1px solid var(--color-grey-medium);
`;

export const DivColumn = styled.div`
display: flex;
  justify-content:center;
  align-items: center;
  padding-right: 1rem;
  width: 100%;
  border : 1px solid white;
  background-color: var(--color-grey-medium);

`;