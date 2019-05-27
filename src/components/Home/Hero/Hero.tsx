import React from 'react';
import * as S from './HeroStyles';
import logo from '../../../assets/images/logo.jpg';

const Hero = () => (
  <S.Header>
    <S.LogoBox>
      <S.Logo src={logo} alt="hero" />
    </S.LogoBox>
    <S.HeaderTextBox>
      <S.HeadingPrimary>
        <S.HeadingPrimaryText main>grow raw</S.HeadingPrimaryText>
        <S.HeadingPrimaryText>concrete handmade items</S.HeadingPrimaryText>
      </S.HeadingPrimary>
    </S.HeaderTextBox>
  </S.Header>
);

export default Hero;
