import React from 'react';
import Card from 'components/card';
import Padding from 'components/padding';
import Spacer from 'components/spacer';
import got from 'got';

export default function Home({ posts }) {
  return (
    <>
      <h2 align="center">Posts</h2>
      <Padding all={2}>
        {posts.map((postItem) => (
          <React.Fragment key={`post-${postItem.id}`}>
            <Card>
              <Padding all={2}>
                {postItem.title}
                <Spacer y={1} />
                {postItem.description}
              </Padding>
            </Card>
            <Spacer y={1} />
          </React.Fragment>
        ))}
      </Padding>
    </>
  );
}

export async function getStaticProps(ctx) {
  const response = await got('posts', {
    responseType: 'json',
    prefixUrl: 'http://localhost:3000/api',
  });

  return {
    props: {
      posts: response.body.posts,
    },
  };
}
