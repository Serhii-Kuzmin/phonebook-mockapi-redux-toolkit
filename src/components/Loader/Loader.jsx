import { DNA } from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styled';

export const Loader = () => (
  <WrapperLoader>
    <DNA
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </WrapperLoader>
);
