import {Props} from './type';

const Loading = ({isLoading, loadingComponent, children}: Props) => {
  return isLoading ? loadingComponent : children;
};

export default Loading;
