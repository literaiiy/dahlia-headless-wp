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
export const MEDIA_API_URL = "https://dah.li/a/wp-json/wp/v2/media"

export const COOL_POSTS = ["notion", "ticktick"]