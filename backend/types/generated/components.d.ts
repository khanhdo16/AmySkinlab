import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsNotificationTemplate extends Schema.Component {
  collectionName: 'components_elements_notification_templates';
  info: {
    displayName: 'Notification Template';
  };
  attributes: {
    content: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 15;
      }>;
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface SharedImage extends Schema.Component {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    file: Attribute.Media & Attribute.Required;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'MetaSocial';
    icon: 'project-diagram';
    description: '';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
  };
}

export interface SharedVideoEmbed extends Schema.Component {
  collectionName: 'components_shared_video_embeds';
  info: {
    displayName: 'Video embed';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.notification-template': ElementsNotificationTemplate;
      'shared.image': SharedImage;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'shared.video-embed': SharedVideoEmbed;
    }
  }
}
