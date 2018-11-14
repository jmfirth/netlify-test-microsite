import { Iterable } from 'immutable';

export interface PreviewProps {
  entry: Iterable<any, any>;
  widgetFor: (name: string) => string;
  getAsset: <R>(name: string) => R;
}
