
import Link from 'next/link'
import Layout from '../../src/components/layout'
import BlogPost from './[slug]'


export async function getStaticProps(){
    const res = await fetch(
        `https://webservices.jumpingcrab.com/posts`
    )
    const posts = await res.json()

    return{
        props: {
            posts,
        },
    }
}

export default BlogPost;