import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Frontmatter } from './blog-post';

export interface Edge<F extends Frontmatter = Frontmatter> {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: F;
  };
}

export interface TagRouteProps<F extends Frontmatter = Frontmatter> {
  data: {
    allMarkdownRemark: {
      edges: Edge<F>[];
      totalCount: number;
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  pageContext: {
    tag: string;
  };
}

class TagRoute extends React.Component<TagRouteProps> {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`;

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                <ul className="taglist">{postLinks}</ul>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;