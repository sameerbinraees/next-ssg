import { useRouter } from 'next/router';

export default function PostById({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>Post id # {router.query.postId}:</h1>
      <h3>
        {post.id} {post.title}
      </h3>
    </>
  );
}

export async function getStaticProps(context) {
  const post = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.postId}`)
  ).json();

  if (!post.id) {
    return {
      notFound: true,
    };
  }

  console.log('Generating link for post id: ', context.params.postId);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
