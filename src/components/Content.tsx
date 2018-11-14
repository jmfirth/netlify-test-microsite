import React from 'react';

export interface BaseContentProps<C> {
  content: C;
  className?: string;
}

export interface HTMLContentProps extends BaseContentProps<string> {}

export interface ContentProps extends BaseContentProps<React.ReactText> {}

export const HTMLContent: React.SFC<HTMLContentProps> = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content: React.SFC<ContentProps> = ({ content, className }) => (
  <div className={className}>{content}</div>
)

export default Content
