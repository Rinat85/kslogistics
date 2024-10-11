import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} - Logistics & Transportation Business`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Founded in 2021, KC’S LOGISTICS LLC has developed a highly efficient system that allows trailer owners, manufacturers, dealers, and both for-hire and private motor carriers to have their trailers delivered or repositioned as needed, whenever and wherever required." />
      <meta name="robots" content="noindex, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;