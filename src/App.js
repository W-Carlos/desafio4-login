import React from 'react'

import Image from '../src/assets/wallpaper.svg'
import Google from '../src/assets/login-google.svg'

import {
  Container,
  ContainerImage,
  ContainerForm,
  Input,
  Links,
  ButtonEntrar,
  ButtonGoogle,
  LinkCadastro

} from './styles'

function App() {
  return (
    
    <Container>
      <ContainerImage>
          <img src={Image}/>
      </ContainerImage>

      <ContainerForm>
        <form>
          <p>Bem vindo de volta</p>
          <h1>Faça login na sua conta</h1>

          <label for="email">E-mail</label>
          <Input type="email" id='email'></Input>

          <label for="senha">Senha</label>
          <Input type="password" id='senha'></Input>

          <Links>
            <label for="radio">
              <input type="radio" id='radio'></input>Lembre de mim
            </label>

            <a href='#'>Esqueceu sua senha?</a>
          </Links>

          <ButtonEntrar>
            Entrar
          </ButtonEntrar>

          <ButtonGoogle>
            <img src={Google}/>
            Ou faça login com o Google 
          </ButtonGoogle>

        </form>
   
          <LinkCadastro>
            Não tem uma conta? &nbsp; <a href='#'>Cadastre-se</a>
          </LinkCadastro>
      </ContainerForm>
    </Container>

  );
  
}

export default App