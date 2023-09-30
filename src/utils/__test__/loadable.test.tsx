import React from 'react';
import { render } from '@testing-library/react';
import { lazyLoad } from '../loadable';

const LoadingIndicator = () => <div>Loading</div>;

const LazyComponentWithDefaultExport = lazyLoad(
  () => import('../../../internals/testing/loadable.mock'),
);

const LazyComponentWithExportedFunction = lazyLoad(
  () => import('../../../internals/testing/loadable.mock'),
  module => module.ExportedFunc,
);

const LazyComponentWithFallback = lazyLoad(
  () => import('../../../internals/testing/loadable.mock'),
  undefined,
  {
    fallback: <LoadingIndicator />,
  },
);

describe('loadable', () => {
  it('should render null by default', () => {
    const {
      container: { firstChild },
    } = render(<LazyComponentWithDefaultExport />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render null by default with enpty option', () => {
    const {
      container: { firstChild },
    } = render(<LazyComponentWithExportedFunction />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render lazyComponent after waiting for it to load', () => {
    const {
      container: { firstChild },
    } = render(<LazyComponentWithExportedFunction />);
    LazyComponentWithExportedFunction({});
    expect(firstChild).toMatchSnapshot();
  });
});
