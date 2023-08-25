import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View} from 'react-native';
import styled from 'styled-components/native';
import useBoolean from '../../../hooks/useBoolean';
import {RootStackNavigationType} from '../../navigators/RootStackNavigator';
import BottomSheet from '../../shared/BottomSheet';
import {DismissKeyboard} from '../../shared/DismissKeyboard';
import {Spacing} from '../../shared/Spacing';
import {Stack} from '../../shared/Stack';
import {TextField} from '../../shared/TextField';

type Inputs = {
  userName?: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
};

export default function AddUserInformation() {
  const {navigate} = useNavigation<RootStackNavigationType>();
  const [isOpenAge, toggleAge] = useBoolean();
  const [isOpenGender, toggleGender] = useBoolean();

  const [selectedLanguage, setSelectedLanguage] = useState();

  const {
    control,
    formState: {errors},
  } = useForm<Inputs>();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

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
                  <>
                    <InputWrapper onPress={() => toggleAge()}>
                      <InputText haveValue={!!value}>나이</InputText>
                    </InputWrapper>
                    <BottomSheet isOpen={isOpenAge} onClose={toggleAge}>
                      <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={itemValue => onChange(itemValue)}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                      </Picker>
                    </BottomSheet>
                  </>
                )}
              />
              <Controller
                name="gender"
                control={control}
                render={({field: {onChange, value}}) => (
                  <TextField
                    value={value}
                    onChangeText={onChange}
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
            <SubmitButton>
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
