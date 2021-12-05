import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { getAllPostsFromServer } from '../lib/utils';
import Post from '../components/Post';

export default function Home() {

  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    let mounted = true;
    if (mounted) {
      const postsFromServer = await getAllPostsFromServer();
      setPosts(postsFromServer);
    }
    return () => (mounted = false);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>dah.li/a test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>dah.li/a</h1>
        <h2>Please work</h2>
        {posts && (
          <div>
            {posts.map((post, id) => {
              return (
                <div key={id}>
                  <Post post={post} />
                </div>
              );
            })}
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
