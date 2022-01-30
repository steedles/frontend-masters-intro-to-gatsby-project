module.exports = {
    siteMetadata: {
        siteUrl: 'https://electrotestinstrumentation.co.za',
        title: 'Electro Test Instrumentation',
        description: 'The best place to buy your stuff',
        image: 'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true, // defaults to false
                jsxPragma: `jsx`, // defaults to "React"
                allExtensions: true, // defaults to false
            },
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/src/posts`,
            },
        },
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/posts`,
            },
        },
        'gatsby-remark-images',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
                defaultLayouts: {
                    posts: require.resolve('./src/components/post-layout.tsx'),
                },
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: 'vnkupgyb',
                dataset: 'production'
            }
        }
    ],
};