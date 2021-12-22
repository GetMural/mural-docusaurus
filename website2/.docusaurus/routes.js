
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','ef8'),
    exact: true
  },
  {
    path: '/blog/2017/07/06/introducing-mural',
    component: ComponentCreator('/blog/2017/07/06/introducing-mural','029'),
    exact: true
  },
  {
    path: '/blog/2018/06/04/what-we-learned',
    component: ComponentCreator('/blog/2018/06/04/what-we-learned','e35'),
    exact: true
  },
  {
    path: '/blog/2019/10/27/mozfest-2019',
    component: ComponentCreator('/blog/2019/10/27/mozfest-2019','95f'),
    exact: true
  },
  {
    path: '/blog/2020/09/23/media-party-2020',
    component: ComponentCreator('/blog/2020/09/23/media-party-2020','ed3'),
    exact: true
  },
  {
    path: '/blog/2020/10/24/grant-for-the-web',
    component: ComponentCreator('/blog/2020/10/24/grant-for-the-web','faf'),
    exact: true
  },
  {
    path: '/blog/2020/11/23/mural-and-wordpress',
    component: ComponentCreator('/blog/2020/11/23/mural-and-wordpress','b81'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/download',
    component: ComponentCreator('/download','344'),
    exact: true
  },
  {
    path: '/help',
    component: ComponentCreator('/help','416'),
    exact: true
  },
  {
    path: '/stories',
    component: ComponentCreator('/stories','534'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','61e'),
    routes: [
      {
        path: '/docs/backgroundvideo',
        component: ComponentCreator('/docs/backgroundvideo','0ed'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/centredtext',
        component: ComponentCreator('/docs/centredtext','1ed'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/fullpagevideo',
        component: ComponentCreator('/docs/fullpagevideo','fd2'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/getting-started',
        component: ComponentCreator('/docs/getting-started','0ee'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/horizontalslideshow',
        component: ComponentCreator('/docs/horizontalslideshow','c69'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/how-it-works',
        component: ComponentCreator('/docs/how-it-works','402'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/image-workflow',
        component: ComponentCreator('/docs/image-workflow','d5c'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/imageaudio',
        component: ComponentCreator('/docs/imageaudio','021'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/imagebackground',
        component: ComponentCreator('/docs/imagebackground','d76'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/imageparallax',
        component: ComponentCreator('/docs/imageparallax','cd7'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','a16'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/metadata',
        component: ComponentCreator('/docs/metadata','066'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/verticalslideshow',
        component: ComponentCreator('/docs/verticalslideshow','bee'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/youtube',
        component: ComponentCreator('/docs/youtube','7d9'),
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
