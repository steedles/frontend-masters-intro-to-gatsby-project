import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

import { imageWrapper } from '../styles/index.module.css';

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query GetBlogPosts {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                nodes {
                    id
                    slug
                    frontmatter {
                        title
                        date(fromNow: true)
                    }
                }
            }
            allSanityEpisode(
                sort: {fields: date, order: DESC}
                filter: {youtubeID: {ne: null}}
                limit: 20
            ) {
                nodes {
                    title
                    id
                    guest {
                        name
                    }
                    gatsbyPath(filePath: "/episode/{SanityEpisode.slug__current}")
                }
            }
        }
    `);

    const posts = data.allMdx.nodes;
    const episodes = data.allSanityEpisode.nodes

    return (
        <>
            <Layout>
                <div className={imageWrapper}>
                    <StaticImage
                        src={'../images/ivana-la-61jg6zviI7I-unsplash.jpg'}
                        alt={'corgi photo'}
                        placeholder='dominantColor'
                        width={300}
                        height={300}
                    />
                </div>
                <h1>Hello World!</h1>
                <Link to={'/about'}>About this site</Link>

                <h2>Check out my recent blog posts..</h2>
                <ul>
                    {posts.map((post: { slug: string; frontmatter: { title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; date: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; }) => (
                        <li>
                            <Link to={post.slug}>{post.frontmatter.title}</Link>&nbsp;
                            <small>posted {post.frontmatter.date}</small>
                        </li>
                    ))}
                </ul>

                <h2>Latest episodes of <em>Learn with Jason</em></h2>
                <ul>
                    {episodes.map((episode) => (
                        <li key={episode.id}>
                            <Link to={episode.gatsbyPath}>{episode.title} (with {episode.guest?.[0]?.name}</Link>
                        </li>
                    ))}
                </ul>
                <a href={"https://ww.learnwithjason.dev/"}>
                    Watch all episodes of <em>Learn With Jason</em>
                </a>
            </Layout>
        </>
    );
};

export default IndexPage;