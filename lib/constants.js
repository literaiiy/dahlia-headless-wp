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

export const MEDIA_API_URL = "https://dah.li/a/wp-json/wp/v2/media"

export const COOL_POSTS = ["notion", "ticktick"]

export const DESCRIPTION = "Welcome to literaiiy’s personal blog, dah.li/a or dahlia! Here, I’ll post about a variety of things, most prominently smartphones, cool software I find, stuff I buy, among other fun topics!"