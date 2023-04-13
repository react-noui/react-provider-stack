import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { PropsWithChildren } from 'react';

import ProviderStack from 'index';

function FakeProvider1({ children }: PropsWithChildren) {
  return <div data-testid="1">{children}</div>;
}

function FakeProvider2({ children }: PropsWithChildren) {
  return <div data-testid="2">{children}</div>;
}

function FakeProvider3({ children }: PropsWithChildren) {
  return <div data-testid="3">{children}</div>;
}

describe('#react-provider-stack', () => {
  it('renders providers in order', async () => {
    const { container, findByTestId } = render(
      <ProviderStack providers={[FakeProvider1, FakeProvider2, FakeProvider3]}>
        Hello, World!
      </ProviderStack>,
    );
    const $provider1 = await findByTestId('1');
    const $provider2 = await findByTestId('2');
    const $provider3 = await findByTestId('3');

    expect($provider1).toContainElement($provider2);
    expect($provider2).toContainElement($provider3);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('renders children', async () => {
    const { getByText } = render(
      <ProviderStack providers={[FakeProvider1, FakeProvider2, FakeProvider3]}>
        Hello, World!
      </ProviderStack>,
    );
    expect(getByText('Hello, World!')).toBeVisible();
  });
});
