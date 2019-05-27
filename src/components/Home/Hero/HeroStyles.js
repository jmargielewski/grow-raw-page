import styled from 'styled-components';
import { moveToLeft, moveToRight } from '../../../styles/animations';
import heroImg from '../../../assets/images/hero1.jpg';

const Header = styled.header`
  height: 95vh;
  position: relative;
  background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.8),
      rgba(20, 20, 20, 0.8)
    ),
    url(${heroImg});
  background-size: cover;
  background-position: bottom;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
`;

const LogoBox = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
`;

const Logo = styled.img`
  height: 60px;
  border-radius: 50%;
`;

const HeaderTextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HeadingPrimary = styled.h1`
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  backface-visibility: hidden;
`;

const HeadingPrimaryText = styled.span`
  display: block;
  letter-spacing: ${({ main }) => (main ? '35px' : '17.5px')};
  font-size: ${({ main }) => (main ? '60px' : '20px')};
  font-weight: ${({ main }) => (main ? '400' : '700')};
  animation: ${({ main }) => (main ? moveToRight : moveToLeft)} 1s ease-out;
`;

export {
 Header, LogoBox, Logo, HeaderTextBox, HeadingPrimary, HeadingPrimaryText 
};
