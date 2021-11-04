import styled from 'styled-components';
import Content from '../../../../components/TeoField/Content';


export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 50px;
  margin-top: 1.5rem;

  border: 1px solid var(--color-grey-medium);
  border-radius: 2px;
  &:hover {
    background-color: var(--color-grey-light)
  }
`;

export const ContentLink = styled(Content)`
  align-self: center;
  cursor: pointer;
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
