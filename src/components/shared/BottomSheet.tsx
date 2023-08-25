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
  headerElement?: ReactNode;
}

export default function BottomSheet({
  isOpen,
  children,
  onClose,
  index = 2,
  headerElement,
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

  const snapPoints = useMemo(() => ['35%', '65%', '100%'], []);

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
      {headerElement}
      <View>{children}</View>
    </BottomSheetModal>
  );
}
