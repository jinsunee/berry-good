import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Toast from 'react-native-toast-message';
import styled from 'styled-components/native';
import {RootStackNavigationType} from '../../navigators/RootStackNavigator';
import {DismissKeyboard} from '../../shared/DismissKeyboard';
import {SelectPicker} from '../../shared/SelectPicker';
import {Spacing} from '../../shared/Spacing';
import {Stack} from '../../shared/Stack';
import {TextField} from '../../shared/TextField';

const ageItems = [
  {label: '-', value: -1},
  ...Array.from({length: 80}).map((_, index) => {
    const item = index + 10;
    return {label: String(item), value: item};
  }),
];

const genderItems = [
  {label: '남자', value: 'Male'},
  {label: '여자', value: 'Female'},
  {label: '기타', value: 'Other'},
];

type Inputs = {
  userName?: string;
  age?: number;
  gender?: 'Male' | 'Female' | 'Other';
};

export default function AddUserInformation() {
  const {navigate} = useNavigation<RootStackNavigationType>();
  const {control, handleSubmit} = useForm<Inputs>({
    defaultValues: {
      userName: '',
      age: undefined,
      gender: undefined,
    },
  });

  const onSubmit = async ({userName, age, gender}: Inputs) => {
    if (!userName || !age || !gender) {
      Toast.show({
        type: 'plain',
        text2: '모든 항목을 입력해주세요 :)',
        position: 'top',
        visibilityTime: 2000,
      });
      return;
    }

    try {
      // 익명 로그인
      const userCredential = await auth().signInAnonymously();
      const user = userCredential.user;

      // 디바이스 정보 가져오기
      const deviceId = DeviceInfo.getUniqueId();
      const deviceName = DeviceInfo.getDeviceName();
      const deviceModel = DeviceInfo.getModel();
      // ... 여기에 더 많은 디바이스 정보를 추가할 수 있습니다.

      // Firestore에 데이터 저장
      const userDoc = {
        userName,
        gender,
        age,
        deviceId,
        deviceInfo: {
          deviceName,
          deviceModel,
          // ... 여기에 더 많은 디바이스 정보를 추가할 수 있습니다.
        },
      };

      await firestore().collection('users').doc(user.uid).set(userDoc);

      console.log('User data saved:', userDoc);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <StyledSafeAreaView>
      <DismissKeyboard>
        <Wrapper>
          <View>
            <Title>
              반가워요!{'\n'}
              여러분에 대해서 적어주세요
            </Title>
            <Spacing size={50} />
            <Stack spacing={10}>
              <Controller
                name="userName"
                control={control}
                render={({field: {onChange, value}}) => (
                  <TextField
                    value={value}
                    onChangeText={onChange}
                    placeholder="이름"
                  />
                )}
              />
              <Controller
                name="age"
                control={control}
                render={({field: {onChange, value}}) => (
                  <SelectPicker
                    value={value}
                    onConfirm={item => onChange(item!.value)}
                    items={ageItems}
                    placeholder="나이"
                  />
                )}
              />
              <Controller
                name="gender"
                control={control}
                render={({field: {onChange, value}}) => (
                  <SelectPicker
                    value={value}
                    onConfirm={item => onChange(item!.value)}
                    items={genderItems}
                    placeholder="성별"
                  />
                )}
              />
            </Stack>
            <Spacing size={10} />
            <InfoText>
              개인화된 동기부여 메세지나 팁을 제공하기 위한 용도로 사용됩니다.
            </InfoText>
          </View>

          <Bottom>
            <InfoText>
              아래 버튼을 눌러서 다음으로 이동 시,{' '}
              <StyledLink
                onPress={() =>
                  navigate('WebView', {
                    url: 'http://google.com',
                    title: '이용약관',
                  })
                }>
                이용약관
              </StyledLink>
              {' 및 '}
              <StyledLink
                onPress={() =>
                  navigate('WebView', {
                    url: 'http://google.com',
                    title: '개인정보처리방침',
                  })
                }>
                개인정보처리방침
              </StyledLink>
              에 동의한 것으로 간주됩니다.
            </InfoText>
            <Spacing size={15} />
            <SubmitButton onPress={handleSubmit(onSubmit)}>
              <SubmitText>저장</SubmitText>
            </SubmitButton>
          </Bottom>
        </Wrapper>
      </DismissKeyboard>
    </StyledSafeAreaView>
  );
}

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: ${({theme}) => theme.background};
  flex: 1;
`;

const Wrapper = styled.View`
  padding: 80px 20px 20px 20px;
  flex: 1;
  justify-content: space-between;
`;

const Title = styled.Text`
  color: ${({theme}) => theme.text};
  font-size: 25px;
  font-weight: bold;
  line-height: 35px;
`;

const InfoText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme}) => theme.secondary[1]};
  align-self: center;
`;

const Bottom = styled.View``;

const SubmitButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.text};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  padding: 15px 40px;
`;

const SubmitText = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.background};
  font-size: 16px;
`;

const StyledLink = styled.Text`
  text-decoration: underline;
  text-decoration-line: underline;
  text-decoration-color: ${({theme}) => theme.secondary[1]};
`;
