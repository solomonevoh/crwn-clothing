import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

export const ProfileName = styled.div`
  position: absolute;
  width: 200px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 20px;
  right: 260px;
  top: 3.5px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
