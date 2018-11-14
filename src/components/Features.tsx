import React from 'react';
import PreviewCompatibleImage, { ImageInfo } from '../components/PreviewCompatibleImage';

export interface ImageInfoWithText extends ImageInfo {
  text?: string;
}

export interface FeatureGridProps {
  gridItems: ImageInfoWithText[];
}

const FeatureGrid: React.SFC<FeatureGridProps> = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);

export default FeatureGrid;
