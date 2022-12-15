
import Link from 'next/link'
import Layout from '../../src/components/layout'
import Seo from '../../src/components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Noticias">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link href={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}



export const Head = () => <Seo title="Noticias" />

export default BlogPage