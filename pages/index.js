import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from "../lib/posts";

export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hello, I'm <b>Kevin</b>. I'm a student at the Apple Developer Academy PUCPR, and am learning nextJS
                    to build a landing page to our project.</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            {title}
                            <br/>
                            {id}
                            <br/>
                            {date}
                        </li>
                    ))}
                </ul>
                <form name="contact" action="/success" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <input type="text" name="firstname" id="firstname" />
                        <label htmlFor="yourname">
                            Your Name:
                        </label> <br />
                        <input type="text" name="name" id="yourname" />
                    </p>
                    <p>
                        <label htmlFor="youremail">
                            Your Email:
                        </label> <br />
                        <input type="email" name="email" id="youremail" />
                    </p>
                    <p>
                        <label htmlFor="yourmessage">
                            Message:
                        </label> <br />
                        <textarea name="message" id="yourmessage"></textarea>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}