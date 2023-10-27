export interface SideMenuChildProps {
  key: string;
  label: string;
  title: string;
  link?: string;
  children?: SideMenuChildProps[];
}

export interface SideMenuProps {
  key: string;
  icon: () =>void;
  label: string;
  title: string;
  link?: string;
  children?: SideMenuChildProps[];
}
