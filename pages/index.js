import styles from '../styles/Home.module.scss'
import { useState, useEffect } from 'react';
import { getAllPostsFromServer } from '../lib/utils';
import { DESCRIPTION } from '../lib/constants';
import Header from '../components/Header';
import Layout from '../components/Layout';
import PostsScroller from '../components/PostsScroller';

export default function Home() {

  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    let mounted = true;
    if (mounted) {
      const postsFromServer = await getAllPostsFromServer();
      setPosts(postsFromServer.data.posts.edges);
    }
    return() => (mounted = false);
  }, []);

  return (
    <div className="page">
      <Header />
      <Layout title={"Home"} desc={DESCRIPTION} />
      <main className={styles.main}>
        <PostsScroller posts={posts} />
      </main>
    </div>
  )
}
