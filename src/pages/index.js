import {lazy} from 'react';

const Home = lazy(() => import('./home/home.component'))
const About = lazy(() => import('./about/about.component'))
const NotFound = lazy(() => import('./notFound/notFound.component'))

export {
    Home,
    About,
    NotFound
}