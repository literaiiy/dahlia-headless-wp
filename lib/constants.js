const BASE_URL = `https://api2.dah.li/graphql?query=`

export const POSTS_API_URL = `${BASE_URL}
{
  posts(first: 500)
    {
    edges {
      node {
        featuredImage {
          node {
            id,
            sourceUrl
          }
        }
        categories {
          edges {
            node {
              name
            }
          }
        }
        excerpt,
        slug,
        title,
        date
      }
    }
  }
}`

export const CATEGORIES_API_URL = `${BASE_URL}
{
  categories {
    edges {
      node {
        slug,
        name,
        description,
        posts {
          edges {
            node {
              featuredImage {
                node {
                  id,
                  sourceUrl
                }
              }
              excerpt,
              slug,
              title,
              date
            }
          }
        }
      }
    }
  }
}
`

export const CATEGORIES_SIMPLE_URL = `${BASE_URL}
{
  categories {
    edges {
      node {
        slug,
        name
      }
    }
  }
}
`

export const SINGLE_POST_URL = [`${BASE_URL}
  {
    post(id: "`, /* slug */ `", idType: SLUG)
    {
      id,
      content,
      title,
      date,
      excerpt,
      featuredImage {
        node {
          id,
          sourceUrl
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
    } 
  }
`]

export const CATEGORY_URL = [`${BASE_URL}
{
  category(id: "`, /* slug */ `", idType: SLUG) {
    id,
    name,
    slug,
    description,
    posts {
      edges {
        node {
          featuredImage {
            node {
              id
              sourceUrl
            }
          }
          categories {
            edges {
              node {
                name
              }
            }
          }
          excerpt,
          slug,
          title,
          date
        }
      }
    }
  }
}
`]

export const COOL_POSTS = ["notion", "used-phones", "ticktick"]

export const DESCRIPTION = "Welcome to literaiiy’s personal blog, dah.li/a or dahlia. Here, I’ll post about a variety of things, most prominently smartphones, software, and stuff I find."