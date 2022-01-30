import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

export const query = graphql`
    query CocktailQuery {
        file(name: {eq: "cocktail"}) {
            childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
        }
    }
`;

const AboutPage = ({ data }) => {

    return (
        <>
            <Layout
                title='About This Site'
                description='More information about this site'
            >
                <GatsbyImage
                    alt={'cocktail'}
                    image={getImage(data.file)}
                />
                <h1> About This Site</h1>
                <Link to={'/'}>Back to home</Link>
            </Layout>
        </>

    )
        ;
};

export default AboutPage;