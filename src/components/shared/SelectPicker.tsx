import {Picker} from '@react-native-picker/picker';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import styled from 'styled-components/native';
import useBoolean from '../../hooks/useBoolean';
import BottomSheet from './BottomSheet';

type Item<T> = {
  label: string;
  value: T;
};

interface Props<T> {
  value: T;
  onConfirm: (value: Item<T>) => void;
  placeholder?: string;
  items: Item<T>[];
}

export function SelectPicker<T>({
  value,
  onConfirm,
  placeholder,
  items,
}: Props<T>) {
  const [isOpen, toggle] = useBoolean();
  const [displayedItem, setDisplayedItem] = useState<Item<T> | undefined>();
  const [selectedItem, setSelectedItem] = useState<Item<T> | undefined>();

  const isHaveValue = !!displayedItem;

  const handleConfirm = useCallback(() => {
    if (selectedItem) {
      onConfirm?.(selectedItem);
    }
    toggle();
  }, [onConfirm, selectedItem, toggle]);

  const pickerItems = useMemo(() => {
    return items.map(item => (
      <Picker.Item key={item.label} label={item.label} value={item} />
    ));
  }, [items]);

  useEffect(() => {
    const _item = items.find(item => item.value === value);
    setSelectedItem(_item);
    setDisplayedItem(_item);
  }, [items, value]);

  return (
    <>
      <InputWrapper onPress={toggle}>
        {isHaveValue && (
          <InputText haveValue={true}>{displayedItem.label}</InputText>
        )}
        {!isHaveValue && <InputText haveValue={false}>{placeholder}</InputText>}
      </InputWrapper>
      <BottomSheet
        isOpen={isOpen}
        onClose={toggle}
        index={0}
        headerElement={
          <Header>
            <HeaderButton onPress={toggle}>
              <HeaderText>취소</HeaderText>
            </HeaderButton>
            <HeaderButton onPress={handleConfirm}>
              <HeaderText>완료</HeaderText>
            </HeaderButton>
          </Header>
        }>
        <Picker
          selectedValue={selectedItem}
          onValueChange={itemValue => {
            setSelectedItem(itemValue);
          }}>
          {pickerItems}
        </Picker>
      </BottomSheet>
    </>
  );
}

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InputWrapper = styled.Pressable`
  border-radius: 30px;
  border: 1px solid ${({theme}) => theme.secondary[1]};
  padding: 15px 20px;
`;

const InputText = styled.Text<{haveValue: boolean}>`
  font-size: 16px;
  font-weight: bold;
  color: ${({theme, haveValue}) =>
    haveValue ? theme.text : theme.secondary[1]};
`;

const HeaderButton = styled.Pressable`
  padding: 20px;
`;

const HeaderText = styled.Text`
  color: ${({theme}) => theme.text};
  font-weight: bold;
  font-size: 16px;
`;
