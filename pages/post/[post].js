import axios from "axios";
import React from "react";
import parse from "html-react-parser";
import { formatPostDate, getSpecificPost } from "../../lib/utils";
import { POSTS_API_URL } from "../../lib/constants";
import styles from '../../styles/SinglePost.module.scss';
import Layout from "../../components/Layout";
export default class SinglePost extends React.Component {
  render() {
    return (
      <>
        <Layout title={this.props.title} desc={parse(this.props.excerpt)[0].props.children || this.props.title} image={this.props.image}/>
        <main id='single_post_main'>
          <section className='single_post'>
            <div>
              <img className={styles.featured_image} src={this.props.image} alt={this.props.title} />
              <h1 className={styles.single_post_title}>{this.props.title}</h1>
              <div className={styles.metadata}>
                <div className={styles.category_format}><span>{this.props.category}</span></div>
                <div className={styles.metadata_format}>{formatPostDate(new Date(this.props.date))}</div>
              </div>
            </div>
            {parse(this.props.content)}
          </section>
        </main>
      </>
    )
  }
}

export async function getStaticPaths() {
  const response = await axios.get(POSTS_API_URL)
  const posts = response.data.data.posts.edges

  const paths = posts.map((thisPost) => ({
    params: { post: thisPost.node.slug || "invalid" },
  }));
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await getSpecificPost(params.post);
  return {
    props: {
      content: res.data.post.content,
      title: res.data.post.title,
      date: res.data.post.date,
      image: res.data.post.featuredImage.node.sourceUrl,
      category: res.data.post.categories.edges[0].node.name,
      excerpt: res.data.post.excerpt
    },
  };
}
