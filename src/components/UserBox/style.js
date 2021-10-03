import styled from 'styled-components';


export const Container = styled.div`

  display: flex;
  flex-direction: column;
  margin: 1rem 0.5rem 0;
  padding: 1rem;

  border-radius: 5px;

  background-color: var(--color-primary);
`;

export const WrapperR = styled.div`

  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.5rem;

  & p {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-white)
  }

  & button {
    display: flex;
    align-self: flex-end;
  }
`;

// export const ImageDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 50%;
//   margin-bottom: 2rem;
// `;

// export const ImageTitle = styled.p`
//   color: var(--color-grey-dark);
//   font-weight: bold;
//   margin-top: 0.5rem;
//   margin-bottom: 1rem;
// `;

// export const Image = styled.img`
//   object-fit: cover;
//   width: 100%;

// `;
