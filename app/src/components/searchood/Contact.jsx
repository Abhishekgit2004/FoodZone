// Footer.js
import React from 'react';
import styled from 'styled-components';

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  align-items: center;
  height: 6rem; /* h-24 */
  width: 100%;
  background-color: #1f2937; /* bg-gray-950 */
  padding-top: 3rem; /* pt-12 */
`;

const FooterContainer = styled.div`
  background-color: #1f2937; /* bg-gray-950 */
  height: 5rem; /* h-20 */
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <>
      <SocialLinks>
        <a href="https://www.instagram.com/abhishekpal2843?igsh=MTN2eThhMTlvc2lk/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.freepik.com/premium-photo/instagram-logo-neon-light-instagram-glow-dark_609989-1401.jpg?w=740" alt="Instagram" width="30px" height="30px" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100062160074086&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <img src="https://i.pinimg.com/originals/2e/3d/34/2e3d345716543c0988555dc2070844b6.jpg" alt="Facebook" width="30px" height="30px" />
        </a>
        <a href="https://x.com/i/flow/login?redirect_after_login=%2Fparasmaldugad" target="_blank" rel="noopener noreferrer">
          <img src="https://img.freepik.com/premium-vector/twitter-neon-logo-twitter-icon-social-media-icons-realistic-twitter-app-set-logo-vector-zaporizhzhia-ukraine-july-24-2021_399089-2010.jpg?w=740" alt="Twitter" width="30px" height="30px" />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=8097087386&text=Advance+Yoga+By+Parasmal+Dugad&app_absent=0" target="_blank" rel="noopener noreferrer">
          <img src="https://static.vecteezy.com/system/resources/previews/023/986/631/non_2x/whatsapp-logo-whatsapp-logo-transparent-whatsapp-icon-transparent-free-free-png.png" alt="WhatsApp" width="30px" height="30px" />
        </a>
      </SocialLinks>
      <FooterContainer>
        Copyright © 2014-2024 Abhishek pal – All Rights Reserved
      </FooterContainer>
    </>
  );
};

export default Footer;