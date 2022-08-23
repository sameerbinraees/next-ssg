import Link from 'next/link';

export default function PostsList({ posts }) {
  return (
    <>
      <h1>Posts:</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
  return {
    props: {
      posts: posts,
    },
  };
}
