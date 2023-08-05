import { useRouter } from "next/router";
import React from "react";

const IndividualNews = ({ news }) => {
  return (
    <div>
      This is from news {news.id}
      <p>Title: {news.title}</p>
    </div>
  );
};

export default IndividualNews;

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/api`);
  const data = await res.json();

  const paths = data.data.map((news) => ({
    params: {
      newsId: news.id.toString(),
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/api/${params.newsId}`);
  const data = await res.json();

  return {
    props: {
      news: data.data,
    },
  };
};
