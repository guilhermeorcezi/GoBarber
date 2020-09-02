import React from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container, Title, BackToSignIn, BackToSignInText
} from './styles';

const SignUp: React.FC = () => (
  <>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Image source={logoImg} />

          <View>
            <Title>Crie sua conta</Title>
          </View>

          <Input name="name" icon="user" placeholder="Nome" />
          <Input name="email" icon="mail" placeholder="Email" />
          <Input name="password" icon="lock" placeholder="Senha" />

          <Button
            onPress={() => {
              console.log('deu');
            }}
          >
            Entrar
          </Button>
        </Container>
      </ScrollView>

      <BackToSignIn onPress={() => { }}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignInText>Voltar</BackToSignInText>
      </BackToSignIn>
    </KeyboardAvoidingView>
  </>
);

export default SignUp;
