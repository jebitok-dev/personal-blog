import Head from 'next/head'

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
        {posts.map((post, index) => (
          <div>
            {post.title},
            {post.excerpt}
          </div>
        ))}
        <div className="lg:col-span-4 col-span1">

        </div>
      </div>
    </div>
  )
}
