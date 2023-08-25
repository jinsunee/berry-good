import {useReducer} from 'react';

export default function useBoolean(defaultValue?: boolean) {
  const [value, onToggle] = useReducer(open => !open, defaultValue ?? false);
  return [value, onToggle] as [boolean, () => void];
}
