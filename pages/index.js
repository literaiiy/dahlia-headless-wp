import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
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
    <div className={styles.page}>
      <Head>
        <title>dah.li/a test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="../images/dahlia-nextjs-smaller.webp" alt="dah.li/a" />
        <h3>literaiiy's blog built with Next.js and WordPress</h3>
        <div className={styles.post_scroller}>
          {posts && (
            <div key={posts.id}>
              {posts.map((post, id) => {
                return (
                  <Post post={post} />
                );
              })}
            </div>
          )}
        </div>
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
