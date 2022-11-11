import Head from "next/head";
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

interface TwitterCard {
  card: string;
  site: string;
  title: string;
  description: string;
  creator: string;
  image: string;
}

interface OpenGraph {
  title: string;
  type: string;
  url: string;
  image: string;
  description: string;
  site_name: string;
}

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
  og?: OpenGraph;
  twitter?: TwitterCard;
}

const defaultMetaData: Required<Props> = {
  title: "Mubashir Hassan - MERN Stack Web Developer | mhm13.dev",
  description:
    "I am a MERN Stack Web Developer. I craft beautiful websites using ReactJS, NextJS on the Frontend and NodeJS, Express, MongoDB on the backend.",
  keywords:
    "mubashir hassan, mubashir, mhm13dev, mhm13, mern, web developer, mern stack developer",
  og: {
    type: "article",
    title: "Mubashir Hassan - MERN Stack Web Developer | mhm13.dev",
    description:
      "I am a MERN Stack Web Developer. I craft beautiful websites using ReactJS, NextJS on the Frontend and NodeJS, Express, MongoDB on the backend.",
    image: "https://mhm13.dev/images/mubashir-630x630.png",
    url: "https://mhm13.dev",
    site_name: "mhm13.dev",
  },
  twitter: {
    card: "summary",
    title: "Mubashir Hassan - MERN Stack Web Developer | mhm13.dev",
    description:
      "I am a MERN Stack Web Developer. I craft beautiful websites using ReactJS, NextJS on the Frontend and NodeJS, Express, MongoDB on the backend.",
    image: "https://mhm13.dev/images/mubashir-630x630.png",
    site: "@mhm13dev",
    creator: "@mhm13dev",
  },
};

const Meta: React.FC<Props> = (props: Props) => {
  const defaultMeta = defaultMetaData;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      {/* Twitter Card data  */}
      <meta
        name="twitter:card"
        content={props.twitter?.card ?? defaultMeta.twitter.card}
      />
      <meta
        name="twitter:title"
        content={props.twitter?.title ?? defaultMeta.twitter.title}
      />
      <meta
        name="twitter:description"
        content={props.twitter?.description ?? defaultMeta.twitter.description}
      />
      {/* Twitter Summary card images must be at least 120x120px  */}
      <meta
        name="twitter:image"
        content={props.twitter?.image ?? defaultMeta.twitter.image}
      />
      <meta
        name="twitter:site"
        content={props.twitter?.site ?? defaultMeta.twitter.site}
      />
      <meta
        name="twitter:creator"
        content={props.twitter?.creator ?? defaultMeta.twitter.creator}
      />
      {/* Open Graph data */}
      <meta
        property="og:type"
        content={props.og?.type ?? defaultMeta.og.type}
      />
      <meta
        property="og:title"
        content={props.og?.title ?? defaultMeta.og.title}
      />
      <meta
        property="og:description"
        content={props.og?.description ?? defaultMeta.og.description}
      />
      <meta
        property="og:image"
        content={props.og?.image ?? defaultMeta.og.image}
      />
      <meta property="og:url" content={props.og?.url ?? defaultMeta.og.url} />
      <meta
        property="og:site_name"
        content={props.og?.site_name ?? defaultMeta.og.site_name}
      />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />

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
};

export default Meta;
