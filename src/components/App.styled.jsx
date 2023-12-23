import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  margin: 0px auto;
`;

export const LabelStyle = styled.label`
  width: 400px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 4px 5px;
`;

export const InputStyle = styled.input`
  height: 25px;
  padding: 4px;
  width: 200px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

export const ButtonStyle = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  &:hover {
    background-color: #45a049;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
