import { PropsWithChildren, ReactNode, useMemo } from 'react';

interface ProviderStackProps {
  children: ReactNode;
  providers: Array<React.FC<PropsWithChildren>>;
}

export default function ProviderStack({
  providers,
  children,
}: ProviderStackProps) {
  const Providers = useMemo(
    () =>
      providers.reduceRight(
        (Acc, Provider) =>
          Object.assign(
            () => (
              <Provider>
                <Acc />
              </Provider>
            ),
            { displayName: Provider.displayName },
          ),
        () => <>{children}</>,
      ),
    [children, providers],
  );

  return <Providers />;
}
