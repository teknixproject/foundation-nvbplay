import dynamic from 'next/dynamic';

export const components = {
  background: dynamic(() => import('./background')),
  banner_video: dynamic(() => import('./bannerVideo')),
  button: dynamic(() => import('./button')),
  description: dynamic(() => import('./discription')),
  pagination: dynamic(() => import('./pagination')),
  icon: dynamic(() => import('./icon')),
  image: dynamic(() => import('./image')),
  link: dynamic(() => import('./link')),
  text: dynamic(() => import('./text')),
  title_complex: dynamic(() => import('./titleComplex')),
  title_header: dynamic(() => import('./titleHeader')),
  title_header_gradient: dynamic(() => import('./titleHeaderGradient')),
  faq_v2_faq: dynamic(() => import("./faqV2FAQ")),
  // faq_v2_f_a_q: dynamic(() => import("./faqV2FAQ")),
  support_v2_support: dynamic(() => import("./supportV2Support")),
  privacy_policy_privacy_policy: dynamic(() => import("./privacyPolicyPrivacyPolicy")),
};
