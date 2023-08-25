import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';
import React, {
  ComponentProps,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import {View} from 'react-native';

interface Props {
  title?: string;
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  index?: number;
}

export default function BottomSheet({
  isOpen,
  children,
  onClose,
  index = 2,
}: Props) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleOpenModal = useCallback(
    () => bottomSheetModalRef.current?.present(),
    [],
  );
  const handleCloseModal = useCallback(
    () => bottomSheetModalRef.current?.close(),
    [],
  );

  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  const renderBackdrop = useCallback(
    (props: ComponentProps<typeof BottomSheetBackdrop>) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={2}
        onPress={() => {
          onClose();
        }}
      />
    ),
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      handleOpenModal();
    } else {
      handleCloseModal();
    }
  }, [handleOpenModal, handleCloseModal, isOpen]);

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      snapPoints={snapPoints}
      index={index}
      backdropComponent={renderBackdrop}
      onDismiss={handleCloseModal}
      handleComponent={null}>
      <View>{children}</View>
    </BottomSheetModal>
  );
}
