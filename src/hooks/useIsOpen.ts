import {useReducer} from 'react';

export default function useIsOpen(defaultValue?: boolean) {
  const [isOpen, toggle] = useReducer(open => !open, defaultValue ?? false);
  return {isOpen, toggle};
}
