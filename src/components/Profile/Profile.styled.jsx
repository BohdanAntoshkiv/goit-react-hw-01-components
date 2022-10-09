import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  padding-top: 32px;
  border-radius: 4px;
  background-color: #d4bfd1;
  box-shadow: 0px 0px 13px -3px rgba(66, 68, 90, 1);
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  width: 100px;
  height: 100%;
  border-radius: 50%;
  background-color: #ffffff;
`;
export const Name = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 8px;
  color: #555555;
`;
export const Tag = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  color: #555555;
`;
export const Location = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  color: #555555;
`;

export const StatusList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #5d8ba8;
  color: #ffffff;
  margin: 0;
  padding: 0;
  width: 100%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border: 1px solid #2c7b8c;
`;

export const StatusItem = styled.li`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  &:not(:first-of-type) {
    border-left: 1px solid #2c7b8c;
  }
`;

export const Label = styled.span`
  margin-bottom: 4px;
`;
export const Quantity = styled.span`
  font-weight: 600;
`;
