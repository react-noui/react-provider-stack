import { PropsWithChildren, ReactNode, useMemo } from 'react';

interface ProviderStackProps {
  children: ReactNode
  providers: Array<({ children }: PropsWithChildren) => JSX.Element>
}

export default function ProviderStack({ providers, children }: ProviderStackProps) {
  const Providers = useMemo(() => providers.reduceRight((Acc, Provider) => () => <Provider><Acc /></Provider>, () => <>{children}</>), [children, providers]);
  return <Providers />
}
