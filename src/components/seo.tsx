import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby';
import { graphql as gql } from 'graphql'

const Seo = (props: { title: any; description: any; image: any; path: any; }) => {
    const data = useStaticQuery(graphql`
        query GetSiteMetadata {
            site {
                siteMetadata {
                    title
                    description
                    image
                    siteUrl
                }
            }
        }
    `)

    const defaults = data?.site?.siteMetadata

    const title = props.title || defaults.title
    const description = props.description || defaults.description
    const image = new URL(props.image || defaults.image, defaults.siteUrl).toString()
    const url = new URL(props.path || '/', defaults.siteUrl).toString()

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            {image && <meta name="image" content={image}/>}

            <meta property="og:url" content={url}/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            {image && <meta property="og:image" content={image}/>}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}
        </Helmet>
    )
}

export default Seo