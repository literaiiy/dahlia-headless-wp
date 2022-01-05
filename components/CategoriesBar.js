import styles from '../styles/CategoriesBar.module.scss'
import Link from "next/link";

export default function CategoriesBar(props) {
  return (
    <div className={styles.categories}>
      <ul>
        {props.categories.map((edge) => 
          <li>
            <Link href={`/category/${edge.node.slug}`}>{edge.node.name}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}