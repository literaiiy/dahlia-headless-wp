import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useState, useEffect } from 'react';
import { getAllPostsFromServer } from '../lib/utils';
import { COOL_POSTS, DESCRIPTION } from '../lib/constants';
import Post from '../components/Post';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
  console.log(posts)

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
