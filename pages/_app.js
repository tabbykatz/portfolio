import Head from 'next/head'

import '../styles/base.css'
function MyApp({ Component, pageProps }) {
  const og = pageProps.data?.og
  const title = pageProps.data?.title

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta property="og:title" content={title || `Tabitha O'Melay: Software Engineer`} />
        <meta property="og:site_name" content="Tabitha O'Melay: Software Engineer" />
        <meta property="og:description" content={og ? og.description : `Software Engineering student at Holberton School. Lover of books, games, and gardens. Skilled daydreamer. Enthusiast. she/her `} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tabby__katz" />

        <script async src="https://platform.twitter.com/widgets.js" charsset="utf-8"></script>

        <title>{title || `Tabitha O'Melay: Software Engineer`}</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
