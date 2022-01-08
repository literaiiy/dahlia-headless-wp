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
        <h2>Welcome!</h2>
        <p>
          Welcome to literaiiy's personal blog, dah.li/a or dahlia. 
          Here, I'll talk about a wide variety of topics that I'm passionate about, 
          including (but not limited to) useful software I find, smartphones, cool 
          products and gadgets, and whatever I want to discuss at any given moment.
          Thanks for stopping by— I hope you enjoy some of the stuff that I
          write about!
        </p>
        <hr />
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