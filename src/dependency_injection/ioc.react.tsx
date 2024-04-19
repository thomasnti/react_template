import { Container, interfaces } from 'inversify';
import React, { PropsWithChildren, useContext } from 'react';

// Inversion of control for our React app
const InversifyContext = React.createContext<{ container: Container | null }>({
  container: null,
});

type InversifyProps = {
  container: Container;
};

type InversifyPropsWithChildren = InversifyProps & PropsWithChildren;

// // eslint-disable-next-line react/function-component-definition
// export const IocProvider: React.FC<InversifyPropsWithChildren> = ({
//   container,
//   children,
// }) => {
//   return (
//     <InversifyContext.Provider value={{ container }}>
//       {children}
//     </InversifyContext.Provider>
//   );
// };

// Context Provider Component
export function IocProvider({
  container,
  children,
}: InversifyPropsWithChildren) {
  return (
    // TODO: See how the below warning affects our app
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <InversifyContext.Provider value={{ container }}>
      {children}
    </InversifyContext.Provider>
  );
}

// A hook that works as a service locator
export function useInjection<T>(identifier: interfaces.ServiceIdentifier<T>) {
  const { container } = useContext(InversifyContext);

  if (container == null) {
    throw new Error('Setup for IOC is gone wrong');
  }

  return container.get<T>(identifier);
}
