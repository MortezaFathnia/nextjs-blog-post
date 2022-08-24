import { Fragment } from "react";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-next-js',
    title: 'Getting Started With NextJs',
    image: 'getting-started-nextjs.png',
    excerpt: 
    'NextJs is a the react framework for production - it make building fullstack react apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-next-js2',
    title: 'Getting Started With NextJs',
    image: 'getting-started-nextjs.png',
    excerpt: 
    'NextJs is a the react framework for production - it make building fullstack react apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-next-js3',
    title: 'Getting Started With NextJs',
    image: 'getting-started-nextjs.png',
    excerpt: 
    'NextJs is a the react framework for production - it make building fullstack react apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-next-js4',
    title: 'Getting Started With NextJs',
    image: 'getting-started-nextjs.png',
    excerpt: 
    'NextJs is a the react framework for production - it make building fullstack react apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10'
  }
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  )
}
export default HomePage;