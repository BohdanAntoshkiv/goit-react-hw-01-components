import styled from '@emotion/styled';

export const Friend = styled.li`
  width: 300px;
  box-shadow: 0px 0px 13px -3px rgba(66, 68, 90, 1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px 16px;
`;
const UserOnline = props => {
  return props.isOnline ? 'green' : 'red';
};

export const Status = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${UserOnline};
  margin-right: 8px;
`;
export const FriendAvatar = styled.img`
  width: 40px;
  height: 100%;
  margin-right: 8px;
`;
export const FriendName = styled.p`
  color: #555555;
`;
