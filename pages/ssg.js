import React from "react";
import Grid from "../components/Grid";

export async function getStaticProps() {
  // Fetch the initial 5 photos from your API or source
  const res = await fetch(`https://tinyfac.es/api/data?limit=5&quality=0`);
  const users = await res.json();
  const userArray = [];
  for (let user of users) {
    userArray.push({ id: user.id, url: user.url });
  }

  return {
    props: {
      userArray,
    },
  };
}

export default function Home({ userArray }) {
  return (
    <article>
      <Grid initialList={userArray} />
    </article>
  );
}
