/** @format */
import Head from "next/head";
const Soon = () => {
  return (
    <div className='comingSoon'>
      <Head>
        <title>Page Coming Soon - RRHS Computer Science Club</title>
        <meta
          name='description'
          content='This page is currently under construction. Check out the home page to learn more about the Ronald Reagan Computer Science Club.'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className='soonContainer' title='Snake with wrench'>
        <h1 className='soonTitle'>
          the requested <strong>URL</strong> is currently under construction
        </h1>
        <a href='/'>
          <div className='soonButton'></div>
        </a>
      </div>
    </div>
  );
};

export default Soon;
