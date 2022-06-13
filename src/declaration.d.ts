/// <reference types="react-scripts" />
/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

interface IReduxProps {
  storeData?: Record<string, Types.Any>;
  setStoreData?(type: string, payload: Types.Any): object;
}

type CommonObjectType<T = Types.Any> = Record<string, T>;

declare module 'axios';
declare module 'lodash';
declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}
declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}
