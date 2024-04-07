import React from 'react';
import image320w from '../../../images/certificate-awarded-template_qrqgh1_c_scale,w_320.jpg';
import image630w from '../../../images/certificate-awarded-template_qrqgh1_c_scale,w_646.jpg';
import image977w from '../../../images/certificate-awarded-template_qrqgh1_c_scale,w_1016.jpg';
import image1220w from '../../../images/certificate-awarded-template_qrqgh1_c_scale,w_1270.jpg';
import image1438w from '../../../images/certificate-awarded-template_qrqgh1_c_scale,w_1727.jpg';
import image1759w from '../../../images/certificate-awarded-template_qrqgh1_c_scale,w_2018.jpg';
import image1984w from '../../../images/certificate-awarded-template_qrqgh1_c_scale,w_2027.jpg';
import image2043w from '../../../images/certificate-awarded-template_qrqgh1_c_scale,w_2043.jpg';

export default function HomePageCertificateTemplateImage() {
  return (
    <img
      srcSet={`
      ${image320w} 320w,
      ${image630w} 630w,
      ${image977w} 977w,
      ${image1220w} 1220w,
      ${image1438w} 1438w,
      ${image1759w} 1759w,
      ${image1984w} 1984w,
      ${image2043w} 2043w
    `}
      sizes="(max-width: 320px) 280px,
             (max-width: 630px) 600px,
             (max-width: 977px) 950px,
             (max-width: 1220px) 1200px,
             (max-width: 1438px) 1400px,
             (max-width: 1759px) 1700px,
             (max-width: 1984px) 1900px,
             (max-width: 2043px) 2000px,                                    
          "
      src={image2043w}
      alt="An example of a certificate layout that can be issued to someone."
      style={{
        width: '100%',
        height: 'auto',
        display: 'block',
      }}
    />
  );
}
