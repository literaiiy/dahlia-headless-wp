export const POSTS_API_URL = `https://dah.li/graphql?query=
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

export const SINGLE_POST_URL = [`https://dah.li/graphql?query=
  {
    post(id: "`, /* slug */ `", idType: SLUG)
    {
      id,
      content,
      title,
      date,
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
      uri
    } 
  }
`]

export const MEDIA_API_URL = "https://dah.li/a/wp-json/wp/v2/media"

export const COOL_POSTS = ["notion", "ticktick"]