import React from "react";
import Grid from "../components/Grid";

export default function Home({ userArray }) {
  return (
    <article>
      <Grid initialList={userArray} />
    </article>
  );
}
