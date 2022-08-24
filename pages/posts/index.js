import AllPosts from "../../components/posts/all-posts";

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

function AllPostsPage() {
  return (
    <AllPosts posts={DUMMY_POSTS} />
  );
}
export default AllPostsPage;