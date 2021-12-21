import React from "react";
import axios from "axios";
import { CATEGORIES_API_URL } from "../../lib/constants";
import { getSpecificCategory } from "../../lib/utils";
import Layout from "../../components/Layout";
import Header from "../../components/Header";

export default class Category extends React.Component {
  render() {
    return (
      <div className="page">
        <Layout title={this.props.name} desc={this.props.description} />
        <Header />
        <main>
          <h1>{this.props.name}</h1>
          <h3>{this.props.description}</h3>
        </main>
      </div>
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
  console.log(res)
  return {
    props: {
      slug: res.data.category.slug,
      name: res.data.category.name,
      description: res.data.category.description,
      posts: res.data.category.posts,
    },
  };
}