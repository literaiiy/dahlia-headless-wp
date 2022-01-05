import Post from "./Post";
import { COOL_POSTS } from "../lib/constants";
import styles from '../styles/PostsScroller.module.scss'

export default function PostsScroller(props) {
  return (
    <>
      {props.posts && (
        <div className={styles.posts_scroller}>
          {props.posts.map((post) => {
            return (
              <>
                <Post post={post} cool={COOL_POSTS.includes(post.node.slug)}/>
                <hr />
              </>
            );
          })}
        </div>
      )}
    </>
  )
}