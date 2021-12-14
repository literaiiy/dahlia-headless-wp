import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useState, useEffect } from 'react';
import { getAllPostsFromServer } from '../lib/utils';
import { COOL_POSTS } from '../lib/constants';
import Post from '../components/Post';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {

  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    let mounted = true;
    if (mounted) {
      const postsFromServer = await getAllPostsFromServer();
      setPosts(postsFromServer.data.posts.edges);
    }
    return () => (mounted = false);
  }, []);
  console.log(posts)

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
          {posts && (
            <div className={styles.posts_scroller}>
              {posts.map((post, id) => {
                return (
                  <>
                    <hr />
                    <Post key={posts.id} post={post} cool={COOL_POSTS.includes(post.node.slug)}/>
                  </>
                );
              })}
            </div>
          )}
      </main>
      <Footer />
    </div>
  )
}
