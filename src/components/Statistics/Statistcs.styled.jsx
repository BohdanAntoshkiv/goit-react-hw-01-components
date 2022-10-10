import styled from '@emotion/styled';

export const StatSection = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
`;
export const StatTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;
  color: #555555;
`;
export const StatList = styled.ul`
  list-style: none;
  display: flex;
  width: 300px;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;
const colorPicker = i => {
  const colors = ['#FF5733', '#FFBD33', '#DBFF33', '#75FF33', '#33FF57'];
  return colors[i];
};

export const StatItem = styled.li`
  width: 52px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #555555;
  background-color: ${props => colorPicker(props.i)};
`;
export const Label = styled.span`
  font-size: 12px;
  margin-bottom: 8px;
`;
