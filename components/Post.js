import React from "react";
import Link from 'next/link';
import parse from 'html-react-parser';
import styles from '../styles/Post.module.scss'
import { formatPostDate, formatPostTime } from '../lib/utils';

const Post = ({ post, cool }) => {  
  if (!cool) {
    return (
      <>
        <section className={styles.post}>
          <div>
            <Link href={`/post/${post.node.slug}`}><img className={styles.post_thumb} src={post.node.featuredImage.node.sourceUrl || '/jacket.png'} /></Link>
          </div>
          <div>
            {/* Title */} <Link href={`/post/${post.node.slug}`}><a className=""><h2 className={styles.post_title}>{post.node.title}</h2></a></Link>
            {/* Category */} <div ><span className="boxed">{post.node.categories.edges[0].node.name}</span></div>
            {/* Date */} <div>{formatPostDate(new Date(post.node.date))}</div>
            {/* Time */} <div>{new Date(post.node.date).toLocaleTimeString()}</div>
            {/* Excerpt */} <div className="">{parse(post.node.excerpt)[0]}</div> 
            {/* Read more */} <Link href={`/post/${post.node.slug}`}><a className="styled_a">Read more</a></Link>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className={styles.cool_post}>
          <div className={styles.cool_post_text} style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url(${post.node.featuredImage.node.sourceUrl})`}}>
            {/* Title */} <span><Link href={`/post/${post.node.slug}`}><a className=""><h2 className={styles.cool_post_title}>{post.node.title}</h2></a></Link></span>
          </div>
          {/* Category */} <div ><span className="boxed">{post.node.categories.edges[0].node.name}</span></div>
          {/* Date */} <div>{formatPostDate(new Date(post.node.date))}</div>
          {/* Time */} <div>{new Date(post.node.date).toLocaleTimeString()}</div>
          {/* Excerpt */} <div className="">{parse(post.node.excerpt)[0]}</div> 
          {/* Read more */} <Link href={`/post/${post.node.slug}`}><a className="styled_a">Read more</a></Link>
        </section>
      </>
    )
  }
}

export default Post