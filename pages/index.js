import Head from 'next/head';
import {PostCard, Categories, PostWidget} from '../components/index';

const posts = [
  {
    title: "React Intro",
    excerpt: "React is an open-source Javascript library made by developer at Facebook",
  },
  {
    title: "Setting up React with Tailwind CSS",
    excerpt: "React can be styled using Tailwind CSS which is popular CSS Framework",
  }
];
/* eslint-disable*/ 
export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Personal-Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => <PostCard post={post} key={post.title} /> )}
        </div>
        <div className="lg:col-span-4 col-span1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
        </div>
      </div>
    </div>
  )
}
