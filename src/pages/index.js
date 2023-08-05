import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
// import Banner from "@/components/UI/Banner";
import News from "@/components/News";
import dynamic from "next/dynamic";

const HomePage = ({ allData }) => {
  const DynamicBanner = dynamic(() => import("@/components/UI/Banner"), {
    loading: () => <p>Loading...</p>,
  });
  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicBanner />
      <News allNews={allData} />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/api");
  const data = await res.json();
  return {
    props: {
      allData: data.data,
    },
    // revalidate in 30second for ssg
    // revalidate: 30,
  };
};
