import React from 'react';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export interface IRoutedNavItemProps {
  to: string;
  children: any;
}
export default function RoutedNavItem(props: IRoutedNavItemProps) {
  return (
    <NavItem>
      <NavLink exact to={props.to} className="nav-link">{props.children}</NavLink>
    </NavItem>
  );
}
