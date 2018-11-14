import React from 'react';
import { AboutPageTemplate } from '../../templates/about-page';
import { PreviewProps } from './common';

export interface AboutPagePreviewProps extends PreviewProps {}

const AboutPagePreview: React.SFC<AboutPagePreviewProps> = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

export default AboutPagePreview;
