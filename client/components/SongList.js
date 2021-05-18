import React from "react";
import qgl from "graphql-tag";
import { graphql } from "react-apollo";

function SongList({ data: { loading, songs = [] } }) {
  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {songs.map(({ title }) => {
        return <li key={title}>{title}</li>;
      })}
    </div>
  );
}

const query = qgl`
    {
        songs {
        title
        }
    }
`;

export default graphql(query)(SongList);
