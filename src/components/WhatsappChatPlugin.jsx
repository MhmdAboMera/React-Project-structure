import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import avatar from '../assets/images/najez_logo.png';

function WhatsappChatPlugin() {
  const buttonStyle = {
    backgroundColor: '#25d366', // Change background color
    borderColor: '#25d366', // Change border color
    borderRadius: '50%', // Make button circular
    width: '60px', // Set width
    height: '60px', // Set height
    bottom: '30px', // Adjust position from bottom
    right: '30px', // Adjust position from right
  };

  return (
    <FloatingWhatsApp
      phoneNumber={'+01021798849'}
      // phoneNumber={settiengs.tel1 && '+2' + settiengs.tel1}
      accountName={`Najez Soft`} //
      message="مرحبا، كيف أستطيع مساعدتك؟"
      dataTip="يتم الرد عادةً خلال ساعة واحدة"
      buttonStyle={buttonStyle}
      allowEsc
      allowClickAway
      notification
      notificationSound
      avatar={avatar}
    />
  );
}

export default WhatsappChatPlugin;
