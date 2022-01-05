import styles from '../styles/Home.module.scss'
import { getAllPostsFromServer } from '../lib/utils';
import { DESCRIPTION } from '../lib/constants';
import Layout from '../components/Layout';
import PostsScroller from '../components/PostsScroller';

export default function Home(props) {

  return (
    <>
      <Layout title={"Home"} desc={DESCRIPTION} />
      <main className={styles.main}>
        <PostsScroller posts={props.posts} />
      </main>
    </>
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