import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

import profile from './profile.json';

export type ContactId = 'linkedin' | 'facebook' | 'email';

export interface ContactItem {
  id: ContactId;
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    id: 'linkedin',
    link: 'https://www.linkedin.com/in/ray-andrew-manila-2126b4275/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    id: 'facebook',
    link: 'https://www.facebook.com/profile.php?id=100092542480793',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    id: 'email',
    // One public address, shared with the contact CTA and JSON-LD.
    link: `mailto:${profile.email}`,
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
