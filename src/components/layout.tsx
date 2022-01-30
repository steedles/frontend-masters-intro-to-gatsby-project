import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Seo from "./seo";

// @ts-ignore
import { header, content } from "../styles/layout.module.css"
import "../styles/global.css"

const Layout = ({
    children,
    title = "",
    description = "",
    image = "",
    path = ""
}) => {
    const data = useStaticQuery(graphql`
        query GetSiteTitle {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const meta = data?.site?.siteMetadata ?? {}

    return (
        <>
            <Seo title={title} description={description} image={image} path={path} />
            <header className={header}>
                <Link to="/">{meta.title}</Link>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
            </header>
            <main className={content}>
                {children}
            </main>
        </>
    )
}

export default Layout