import React from 'react';
import { WrapperLoader } from './Loader.styled';
import { Dna } from 'react-loader-spinner';

export const Loader = () => (
  <WrapperLoader>
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </WrapperLoader>
);
