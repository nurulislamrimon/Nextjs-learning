import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const News = ({ allNews }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>#All News</h1>
      <Row>
        {allNews.map((news) => (
          <Col
            key={news.id}
            style={{
              height: 200,
              margin: "0 10px",
            }}
          >
            <Image src={news.image_url} alt="" width={300} height={200} />
            <p>{news.title}</p>

            <Link href={`/news/${news.id}`}>
              <button>View News</button>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default News;
