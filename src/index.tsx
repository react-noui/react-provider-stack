import { PropsWithChildren, ReactNode, useMemo } from 'react';

interface ProviderStackProps {
  children: ReactNode;
  providers: Array<React.FC<PropsWithChildren>>;
}

export default function ProviderStack({
  providers,
  children,
}: ProviderStackProps) {
  const { Provider, remainingProviders, isFinal } = useMemo(() => {
    const [Provider, ...remainingProviders] = providers;
    return {
      Provider,
      remainingProviders,
      isFinal: providers.length === 0,
    };
  }, [providers]);

  return isFinal ? (
    <>{children}</>
  ) : (
    <Provider>
      <ProviderStack providers={remainingProviders}>{children}</ProviderStack>
    </Provider>
  );
}
