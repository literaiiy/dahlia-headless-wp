import Head from "next/head"

export default function Layout(props) {
  return (
    <Head>
      <title>{props.title} - dah.li/a</title>
      <meta property="og:title" content={props.title}/>
      <meta property="og:site_name" content="dah.li/a"/>
      <meta property="og:url" content="https://dah.li/a"/>
      <meta property="og:description" content={props.desc}/>
      <meta property="og:image" content={props.image || `https://user-images.githubusercontent.com/64048778/146714484-009ed8c3-cde4-4db5-ad3f-8a81cf28d435.png`}/>

      <meta name="description" content={props.desc} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="UTF-8" />
    </Head>
  )
}