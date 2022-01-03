import styles from '../styles/Home.module.scss'
import { useState, useEffect } from 'react';
import { getAllPostsFromServer } from '../lib/utils';
import { DESCRIPTION } from '../lib/constants';
import Header from '../components/Header';
import Layout from '../components/Layout';
import PostsScroller from '../components/PostsScroller';

export default function Home(props) {

  return (
    <div className="page">
      <Header />
      <Layout title={"Home"} desc={DESCRIPTION} />
      <main className={styles.main}>
        <PostsScroller posts={props.posts} />
      </main>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const j = await getAllPostsFromServer();
  const allPosts = j.data.posts.edges;
  return {
    props: { 
      posts: allPosts,
      preview
    }
  }
}