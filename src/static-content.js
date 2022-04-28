import Home from './Pages/Home.svelte';

const DefaultPage = Home;
export const pages = [
  { path: '/', href: '/', name: 'Home', component: DefaultPage, showInMainNav: false },
  { path: '/about', href: '#about', name: 'About', component: DefaultPage, showInMainNav: true },
  { path: '/contact', href: '#contact', name: 'Contact', component: DefaultPage, showInMainNav: true },
  { path: '/works', href: '#works', name: 'Works', component: DefaultPage, showInMainNav: false },
]

const address = (line1, city, state, zip5, mapLink) => ({ line1, city, state, zip5, mapLink, toString: () => `${line1}, ${city}, ${state}, ${zip5}`});
const site = ({
    name: 'Weisbrod Design',
    owner: 'Weisbrod Design',
    slogan: 'Lively and unique creative visaul design in many mediums.',
    email: 'weisbrodcreative@gmail.com',
    logo: './images/logo.png',
    logoMobile: './images/logo.png',
    address: address("", "", "", "", ""),
    contactPrompt: "Let's Collaborate",
    social: {
        instagram: 'https://www.instagram.com/weisbroddesign/',
    }
  });
  
export default site;