import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/eventos/1.webp',
    name: 'Fiestas',
    category: 'Fiestas',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    company: {
      name: 'Grab',
      logo: '/images/companies/grab.png',
    },
  },
  {
    id: 2,
    photo: '/images/eventos/2.webp',
    name: 'Eventos',
    category: 'Eventos',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    company: {
      name: 'Google',
      logo: '/images/companies/google.png',
    },
  },
  {
    id: 3,
    photo: '/images/eventos/3.webp',
    name: 'Banquetes',
    category: 'Banquetes',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    company: {
      name: 'Airbnb',
      logo: '/images/companies/airbnb.png',
    },
  },
  {
    id: 4,
    photo: '/images/eventos/4.webp',
    name: 'Musica',
    category: 'Musica',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    company: {
      name: 'Microsoft',
      logo: '/images/companies/microsoft.png',
    },
  },
]
