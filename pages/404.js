import Layout from "../components/Layout"
import styles from "../styles/404.module.scss"

export default function The404() {
  return (
    <>
      <Layout title={"404"} desc={"Page not found."}/>
      <section className={styles.main}>
        <h1 className={styles.title}>404</h1>
        <p>It seems as though what you were looking for isn't here. Maybe check under the bed.</p>
        <p>Or, click one of the categories below to look for a post.</p>
      </section>
    </>
  )
}