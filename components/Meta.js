import Head from 'next/head';
/*
* Template For Meta Tags - https://moz.com/blog/meta-data-templates-123

Standard Social Media Tag Template: Article
Page Title <title>Maximum length 60-70 characters</title>

<meta name="description" content="Page description. No longer than 155 characters." />

<!-- Twitter Card data -->
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@publisher_handle">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Page description less than 200 characters">
<meta name="twitter:creator" content="@author_handle">
<-- Twitter Summary card images must be at least 120x120px -->
<meta name="twitter:image" content="http://www.example.com/image.jpg">

<!-- Open Graph data -->
<meta property="og:title" content="Title Here" />
<meta property="og:type" content="article" />
<meta property="og:url" content="http://www.example.com/" />
<meta property="og:image" content="http://example.com/image.jpg" />
<meta property="og:description" content="Description Here" />
<meta property="og:site_name" content="Site Name, i.e. Moz" />

Every social platform has different standards for sizing. Typically, it's easier to keep it simple and choose one image size that will work for all services.
Twitter thumbnail: 120x120px
Twitter large image: 280x150px
Facebook: Standards vary, but an image at least 200x200px works best. Facebook recommends large images up to 1200x630px wide.

*/

const defaultMetaData = {
  title: 'Mubashir Hassan - MERN Stack Web Developer | mhm13.dev',
  description:
    'I am a MERN Stack Web Developer. I craft beautiful websites using ReactJS, NextJS on the Frontend and NodeJS, Express, MongoDB on the backend.',
  keywords:
    'mubashir hassan, mubashir, mhm13dev, mhm13, mern, web developer, mern stack developer',
  og: {
    type: 'article',
    title: 'Mubashir Hassan - MERN Stack Web Developer | mhm13.dev',
    description:
      'I am a MERN Stack Web Developer. I craft beautiful websites using ReactJS, NextJS on the Frontend and NodeJS, Express, MongoDB on the backend.',
    image: 'https://mhm13.dev/images/mubashir-630x630.png',
    url: 'https://mhm13.dev',
    site_name: 'mhm13.dev',
  },
  twitter: {
    card: 'summary',
    title: 'Mubashir Hassan - MERN Stack Web Developer | mhm13.dev',
    description:
      'I am a MERN Stack Web Developer. I craft beautiful websites using ReactJS, NextJS on the Frontend and NodeJS, Express, MongoDB on the backend.',
    image: 'https://mhm13.dev/images/mubashir-120x120.png',
    site: '@mhm13dev',
    creator: '@mhm13dev',
  },
};

export default function Meta({ metadata = { twitter: {}, og: {} } }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      {/* Twitter Card data  */}
      <meta
        name="twitter:card"
        value={metadata.twitter.card || defaultMetaData.twitter.card}
      />
      <meta
        name="twitter:title"
        content={metadata.twitter.title || defaultMetaData.twitter.title}
      />
      <meta
        name="twitter:description"
        content={
          metadata.twitter.description || defaultMetaData.twitter.description
        }
      />
      {/* Twitter Summary card images must be at least 120x120px  */}
      <meta
        name="twitter:image"
        content={metadata.twitter.image || defaultMetaData.twitter.image}
      />
      <meta
        name="twitter:site"
        content={metadata.twitter.site || defaultMetaData.twitter.site}
      />
      <meta
        name="twitter:creator"
        content={metadata.twitter.creator || defaultMetaData.twitter.creator}
      />
      {/* Open Graph data */}
      <meta
        property="og:type"
        content={metadata.og.type || defaultMetaData.og.type}
      />
      <meta
        property="og:title"
        content={metadata.og.title || defaultMetaData.og.title}
      />
      <meta
        property="og:description"
        content={metadata.og.description || defaultMetaData.og.description}
      />
      <meta
        property="og:image"
        content={metadata.og.image || defaultMetaData.og.image}
      />
      <meta
        property="og:url"
        content={metadata.og.url || defaultMetaData.og.url}
      />
      <meta
        property="og:site_name"
        content={metadata.og.site_name || defaultMetaData.og.site_name}
      />
      <title>{metadata.title || defaultMetaData.title}</title>
      <meta
        name="description"
        content={metadata.description || defaultMetaData.description}
      />
      <meta
        name="keywords"
        content={metadata.keywords || defaultMetaData.keywords}
      />

      {/* Favicons */}
      <link rel="icon" href="/favicons/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicons/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicons/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicons/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicons/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicons/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicons/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicons/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicons/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/favicons/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
      {/*    
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    */}
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
}
