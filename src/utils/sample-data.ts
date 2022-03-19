import { User, Project } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]

export const projects: Project[] = [
  { id: 1, title: 'Movie App', path: '/movies', tech: ['Next', 'Public API', 'Styled-components'] },
  { id: 2, title: 'Ecommerce', path: '/ecommerce', tech: ['Next', 'Typescript', 'Styled-components'] },
  { id: 3, title: 'Real Estate App', path: '/realestate', tech: ['Next', 'Chakra UI', 'Rapid API'] },
  { id: 4, title: 'Travel Advisor', path: '/travel', tech: ['Next', 'Material UI', 'Google Maps API'] },
  { id: 5, title: 'Job Hunt App', path: '/jobs', tech: ['Next', 'Sanity', 'Tailwind'] },
  { id: 6, title: 'Chat App', path: '/chat', tech: ['React', 'Socket.io', 'Firebase'] },
 ]