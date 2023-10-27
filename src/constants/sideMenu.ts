import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined
} from '@ant-design/icons-vue';
import { h } from 'vue';
import type { SideMenuProps } from '../types';


export const sideMenuData: SideMenuProps[] = [
  {
    key: '1',
    icon: () => h(PieChartOutlined),
    label: 'Home',
    title: 'Home',
    link: 'home',
  },
  {
    key: '2',
    icon: () => h(DesktopOutlined),
    label: 'About',
    title: 'About',
    link: 'about',
  },
  {
    key: '3',
    icon: () => h(InboxOutlined),
    label: 'Contact',
    title: 'Contact',
    link: 'coming',
  },
  {
    key: 'sub1',
    icon: () => h(MailOutlined),
    label: 'Navigation One',
    title: 'Navigation One',
    children: [
      {
        key: '5',
        label: 'Option 5',
        title: 'Option 5',
        link: 'coming',
      },
      {
        key: '6',
        label: 'Option 6',
        title: 'Option 6',
        link: 'coming',
      },
      {
        key: '7',
        label: 'Option 7',
        title: 'Option 7',
        link: 'coming',
      },
      {
        key: '8',
        label: 'Option 8',
        title: 'Option 8',
        link: 'coming',
      },
    ],
  },
  {
    key: 'sub2',
    icon: () => h(AppstoreOutlined),
    label: 'Navigation Two',
    title: 'Navigation Two',
    children: [
      {
        key: '9',
        label: 'Option 9',
        title: 'Option 9',
        link: 'coming',
      },
      {
        key: '10',
        label: 'Option 10',
        title: 'Option 10',
        link: 'coming',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        title: 'Submenu',
        children: [
          {
            key: '11',
            label: 'Option 11',
            title: 'Option 11',
            link: 'coming',
          },
          {
            key: '12',
            label: 'Option 12',
            title: 'Option 12',
            link: 'coming',
          },
        ],
      },
    ],
  },
]