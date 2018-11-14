import React from 'react';
import { BlogPostTemplate } from '../../templates/blog-post';
import { PreviewProps } from './common';

export interface BlogPostPreviewProps extends PreviewProps {}

const BlogPostPreview: React.SFC<BlogPostPreviewProps> = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

export default BlogPostPreview;
