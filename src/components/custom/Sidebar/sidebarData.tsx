import {
  Clock,
  Dashboard,
  Program,
  Resource,
  Settings,
  UserOutline,
  Users,
} from '@/assets';

export const sidebarData = [
  {
    id: '1sd423',
    name: 'Dashboard',
    link: '/design-system',
    icon: <Dashboard />,
    subMenu: null,
  },
  {
    id: 'fj378d',
    name: 'Patients',
    link: '#',
    icon: <UserOutline />,
    subMenu: null,
  },
  {
    id: '1f83fj',
    name: 'Reminders',
    link: '#',
    icon: <Clock />,
    subMenu: null,
  },
  {
    id: '12f01c',
    name: 'Contacts',
    link: '',
    icon: <Users />,
    subMenu: [
      { id: 'jh92ld', name: 'Provider', link: '#' },
      { id: 'f37j3s', name: 'Medical Group', link: '#' },
      { id: '1j30ow', name: 'Community', link: '#' },
      { id: '1m3bgy', name: 'Care Manager', link: '#' },
    ],
  },
  {
    id: 'x3wl8e',
    name: 'Resources',
    link: '#',
    icon: <Resource />,
    subMenu: null,
  },
  {
    id: '4j82dh',
    name: 'Programs',
    link: '#',
    icon: <Program />,
    subMenu: null,
  },
  {
    id: 'mz0hlq',
    name: 'Settings',
    link: '',
    icon: <Settings />,
    subMenu: [
      { id: '01mz6i', name: 'Account', link: '#' },
      { id: 'm1kha2', name: 'Medication', link: '#' },
    ],
  },
];
