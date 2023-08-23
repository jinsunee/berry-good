import React, {ReactNode, useState} from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import CloseSvg from '../../assets/svgs/close.svg';
import colors from '../../utils/colors';
import {Spacing} from './Spacing';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => Promise<void>;
  children: ReactNode;
}

export function Dialog({
  isOpen,
  onClose,
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  children,
}: Props) {
  const [isLoading, setIsLoading] = useState<boolean>();

  return (
    <Modal isVisible={isOpen} onBackdropPress={onClose}>
      <DialogContainer>
        <CloseButton onPress={onClose}>
          <CloseSvg fill={colors.dark} />
        </CloseButton>
        <Spacing size={10} />
        {children}
        <Spacing size={20} />
        <View style={{flexDirection: 'row', margin: 15, gap: 5}}>
          <CancelButton onPress={onClose}>
            <Text
              style={{color: colors.dark, fontSize: 16, fontWeight: 'bold'}}>
              {cancelText}
            </Text>
          </CancelButton>
          <ConfirmButton
            disabled={isLoading}
            onPress={async () => {
              setIsLoading(true);
              await onConfirm?.();
              setIsLoading(false);
            }}>
            <Text
              style={{color: colors.white, fontSize: 16, fontWeight: 'bold'}}>
              {confirmText}
            </Text>
          </ConfirmButton>
        </View>
      </DialogContainer>
    </Modal>
  );
}

const DialogContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  min-width: 300px;
  background-color: ${colors.white};
  border-radius: 10px;
`;

const CloseButton = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  border-radius: 20px;
  padding: 10px;
`;

const ConfirmButton = styled.TouchableOpacity`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  flex: 1;
  background-color: ${colors.dark};
`;

const CancelButton = styled.TouchableOpacity`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  flex: 1;
  border: 1px solid ${({theme}) => theme.secondary[1]};
`;
