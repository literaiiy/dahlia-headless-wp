import React from "react";
import axios from "axios";
import { CATEGORIES_API_URL } from "../../lib/constants";
import { getSpecificCategory } from "../../lib/utils";
import Layout from "../../components/Layout";
import PostsScroller from "../../components/PostsScroller"
import styles from '../../styles/Category.module.scss'

export default class Category extends React.Component {
  render() {
    return (
      <>
        <Layout title={this.props.name} desc={this.props.description} />
        <main className={styles.main}>
          <div className={styles.category_header}>
            <h1>{this.props.name}</h1>
            <div className='description'>{this.props.description}</div>
          </div>
          <hr/>
          <PostsScroller posts={this.props.posts.edges}/>
        </main>
      </>
    )
  }
}

export async function getStaticPaths() {
  const res = await axios.get(CATEGORIES_API_URL);
  const categories = res.data.data.categories.edges;
  const paths = categories.map((cat) => ({
    params: { category: cat.node.slug || "invalid" },
  }));
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await getSpecificCategory(params.category);
  return {
    props: {
      slug: res.data.category.slug,
      name: res.data.category.name,
      description: res.data.category.description,
      posts: res.data.category.posts,
    },
  };
}