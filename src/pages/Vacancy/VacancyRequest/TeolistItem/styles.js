import styled from 'styled-components';
import Content from '../../../../components/TeoField/Content';


export const Item = styled.div`
  display: flex;
  align-items: center;
  min-height: 50px;
  margin-top: 1.5rem;
  border: 1px solid var(--color-grey-medium);
  border-radius: 4px;
  cursor: pointer;
`;

export const ContentLink = styled(Content)`
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

export const ListTable = styled.table`
  width: 100%;
`;

export const ListTr = styled.tr`
  display: flex;
  flex-direction: row;

`;

export const ListTd = styled.td`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-right: 1px solid var(--color-grey-medium);

  & div {
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }
`;
