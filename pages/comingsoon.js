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
      </Head>
      <div className='soonContainer'>
        <a href='/'>
          <div className='soonButton'></div>
        </a>
      </div>
    </div>
  );
};

export default Soon;
