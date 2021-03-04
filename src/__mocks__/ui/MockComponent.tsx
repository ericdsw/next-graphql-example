import React from 'react';

type Props = {
  children?: React.ReactNode
}

const MockComponent = ({ children }: Props): JSX.Element => (
  <div>{children}</div>
);

export default MockComponent;
