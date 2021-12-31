import { useEffect } from 'react';
import '../styles/globals.scss'
import '../styles/normalize.min.css'
import Footer from '../components/Footer';
import { getSimpleCategories } from '../lib/utils';

let categoriesCache
function MyApp({ Component, pageProps, categoriesProps }) {
  
  useEffect(() => {
    categoriesCache = categoriesProps
  }, [])

  return (
    <> 
      <Component {...pageProps} />
      <Footer categories={categoriesProps}/>
    </>
  )
}

MyApp.getInitialProps = async() => {
  if (categoriesCache) {
    return {categoriesProps: categoriesCache}
  }

  const cp = await getSimpleCategories();
  const cp2 = cp.data.categories.edges;
  categoriesCache = cp2;
  console.log("chuther")
  console.log(cp2)
  return { categoriesProps: cp2 }
}

export default MyApp
