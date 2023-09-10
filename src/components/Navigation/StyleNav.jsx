import styled from 'styled-components';
import { NavLink } from "react-router-dom"

export const StyledNavLink = styled(NavLink)`
  color: #212121;
  &.active {
    color: orange;
  }
`;

export const toolbarStyle = {
    display: 'flex',
    columnGap: 3,
};
