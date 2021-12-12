import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getAuthor, getFeaturedImage } from '../lib/utils';
import parse from 'html-react-parser';
import styles from '../styles/Post.module.scss'
import { formatPostDate } from '../lib/utils';

export default function Post({ post }) {

  const [postImgAndAuthor, setPostImgAndAuthor] = useState({ featImgUrl: '', author: '' });
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const author = getAuthor(post.author);
      const featuredImg = getFeaturedImage(post.featured_media);
      Promise.all([author, featuredImg]).then((res) => {
        setPostImgAndAuthor({
          author: res[0],
          featImgUrl: res[1],
        });
      });
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <section className={styles.post}>
        <div>
          <img className={styles.post_thumb} src={postImgAndAuthor ? postImgAndAuthor.featImgUrl : '/aeeiee-logo.png'} />
        </div>
        <div>
          <Link href={`/post/${post.id}`}><a className=""><h2>{post.title.rendered}</h2></a></Link>
          <div>{formatPostDate(new Date(post.date))}</div>
          <div>{new Date(post.date).toLocaleTimeString()}</div>
          <div className="">{parse(post.excerpt.rendered)[0]}</div>
          <Link href={`/post/${post.id}`}>
            <a className="">Read more</a>
          </Link>
        </div>
      </section>
      <hr />
    </>
  );
}

