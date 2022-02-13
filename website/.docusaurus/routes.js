
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug/',
    component: ComponentCreator('/__docusaurus/debug/','60e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config/',
    component: ComponentCreator('/__docusaurus/debug/config/','647'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content/',
    component: ComponentCreator('/__docusaurus/debug/content/','8e2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData/',
    component: ComponentCreator('/__docusaurus/debug/globalData/','4f6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata/',
    component: ComponentCreator('/__docusaurus/debug/metadata/','363'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry/',
    component: ComponentCreator('/__docusaurus/debug/registry/','fb4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes/',
    component: ComponentCreator('/__docusaurus/debug/routes/','b09'),
    exact: true
  },
  {
    path: '/blog/',
    component: ComponentCreator('/blog/','0a6'),
    exact: true
  },
  {
    path: '/blog/2017/07/06/introducing-mural/',
    component: ComponentCreator('/blog/2017/07/06/introducing-mural/','2de'),
    exact: true
  },
  {
    path: '/blog/2018/06/04/what-we-learned/',
    component: ComponentCreator('/blog/2018/06/04/what-we-learned/','a70'),
    exact: true
  },
  {
    path: '/blog/2019/10/27/mozfest-2019/',
    component: ComponentCreator('/blog/2019/10/27/mozfest-2019/','0b5'),
    exact: true
  },
  {
    path: '/blog/2020/09/23/media-party-2020/',
    component: ComponentCreator('/blog/2020/09/23/media-party-2020/','d83'),
    exact: true
  },
  {
    path: '/blog/2020/10/24/grant-for-the-web/',
    component: ComponentCreator('/blog/2020/10/24/grant-for-the-web/','5c1'),
    exact: true
  },
  {
    path: '/blog/2020/11/23/mural-and-wordpress/',
    component: ComponentCreator('/blog/2020/11/23/mural-and-wordpress/','37e'),
    exact: true
  },
  {
    path: '/blog/archive/',
    component: ComponentCreator('/blog/archive/','38a'),
    exact: true
  },
  {
    path: '/coilcommissions/',
    component: ComponentCreator('/coilcommissions/','a81'),
    exact: true
  },
  {
    path: '/cookies/',
    component: ComponentCreator('/cookies/','94a'),
    exact: true
  },
  {
    path: '/download/',
    component: ComponentCreator('/download/','4f7'),
    exact: true
  },
  {
    path: '/help/',
    component: ComponentCreator('/help/','4ff'),
    exact: true
  },
  {
    path: '/privacy/',
    component: ComponentCreator('/privacy/','cdf'),
    exact: true
  },
  {
    path: '/stories/',
    component: ComponentCreator('/stories/','f02'),
    exact: true
  },
  {
    path: '/webmonetization/',
    component: ComponentCreator('/webmonetization/','980'),
    exact: true
  },
  {
    path: '/docs/0.4.0/',
    component: ComponentCreator('/docs/0.4.0/','61a'),
    routes: [
      {
        path: '/docs/0.4.0/backgroundvideo/',
        component: ComponentCreator('/docs/0.4.0/backgroundvideo/','2d7'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/0.4.0/centredtext/',
        component: ComponentCreator('/docs/0.4.0/centredtext/','aa6'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/0.4.0/fullpagevideo/',
        component: ComponentCreator('/docs/0.4.0/fullpagevideo/','9f2'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/0.4.0/getting-started/',
        component: ComponentCreator('/docs/0.4.0/getting-started/','193'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/0.4.0/horizontalslideshow/',
        component: ComponentCreator('/docs/0.4.0/horizontalslideshow/','769'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/0.4.0/how-it-works/',
        component: ComponentCreator('/docs/0.4.0/how-it-works/','519'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/0.4.0/image-workflow/',
        component: ComponentCreator('/docs/0.4.0/image-workflow/','206'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/0.4.0/imageaudio/',
        component: ComponentCreator('/docs/0.4.0/imageaudio/','984'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/0.4.0/imagebackground/',
        component: ComponentCreator('/docs/0.4.0/imagebackground/','502'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/0.4.0/imageparallax/',
        component: ComponentCreator('/docs/0.4.0/imageparallax/','bc1'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/0.4.0/intro/',
        component: ComponentCreator('/docs/0.4.0/intro/','2fc'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/0.4.0/metadata/',
        component: ComponentCreator('/docs/0.4.0/metadata/','dd9'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/0.4.0/verticalslideshow/',
        component: ComponentCreator('/docs/0.4.0/verticalslideshow/','46f'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/0.4.0/youtube/',
        component: ComponentCreator('/docs/0.4.0/youtube/','829'),
        exact: true,
        'sidebar': "docs"
      }
    ]
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/','699'),
    routes: [
      {
        path: '/docs/backgroundvideo/',
        component: ComponentCreator('/docs/backgroundvideo/','299'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/centredtext/',
        component: ComponentCreator('/docs/centredtext/','234'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/embed/',
        component: ComponentCreator('/docs/embed/','7db'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/fullpagevideo/',
        component: ComponentCreator('/docs/fullpagevideo/','6b2'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/getting-started/',
        component: ComponentCreator('/docs/getting-started/','26e'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/horizontalslideshow/',
        component: ComponentCreator('/docs/horizontalslideshow/','8e7'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/how-it-works/',
        component: ComponentCreator('/docs/how-it-works/','b9c'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/image-workflow/',
        component: ComponentCreator('/docs/image-workflow/','7f6'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/imageaudio/',
        component: ComponentCreator('/docs/imageaudio/','c2b'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/imagebackground/',
        component: ComponentCreator('/docs/imagebackground/','1ca'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/imageparallax/',
        component: ComponentCreator('/docs/imageparallax/','73e'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/intro/',
        component: ComponentCreator('/docs/intro/','8f4'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/metadata/',
        component: ComponentCreator('/docs/metadata/','941'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/payments/',
        component: ComponentCreator('/docs/payments/','4fa'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/verticalslideshow/',
        component: ComponentCreator('/docs/verticalslideshow/','fba'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/webmonetization/',
        component: ComponentCreator('/docs/webmonetization/','c98'),
        exact: true,
        'sidebar': "docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
