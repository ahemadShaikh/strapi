import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCta extends Schema.Component {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.Text;
    form: Attribute.Component<'blocks.form'>;
  };
}

export interface BlocksForm extends Schema.Component {
  collectionName: 'components_blocks_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    heading: Attribute.String;
    desc: Attribute.String;
    input: Attribute.Component<'elements.input', true>;
    button: Attribute.Component<'elements.button'>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Desc: Attribute.Text;
    image: Attribute.Media;
    button: Attribute.Component<'elements.button'>;
  };
}

export interface BlocksPricing extends Schema.Component {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'pricing';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.Text;
    plan: Attribute.Component<'elements.pricing-cart', true>;
  };
}

export interface BlocksRow extends Schema.Component {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'row';
  };
  attributes: {
    cards: Attribute.Component<'elements.card', true>;
  };
}

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    text: Attribute.String;
    link: Attribute.Text;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface ElementsInput extends Schema.Component {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'input';
  };
  attributes: {
    placeholder: Attribute.String;
    type: Attribute.String;
    label: Attribute.String;
  };
}

export interface ElementsPricingCart extends Schema.Component {
  collectionName: 'components_elements_pricing_carts';
  info: {
    displayName: 'pricing-cart';
  };
  attributes: {
    planType: Attribute.String;
    planPrice: Attribute.String;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    services: Attribute.Relation<
      'elements.pricing-cart',
      'oneToMany',
      'api::service.service'
    >;
    button: Attribute.Component<'elements.button'>;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'MetaData';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDesc: Attribute.Text;
    slug: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.cta': BlocksCta;
      'blocks.form': BlocksForm;
      'blocks.hero': BlocksHero;
      'blocks.pricing': BlocksPricing;
      'blocks.row': BlocksRow;
      'elements.button': ElementsButton;
      'elements.card': ElementsCard;
      'elements.input': ElementsInput;
      'elements.pricing-cart': ElementsPricingCart;
      'seo.meta-data': SeoMetaData;
    }
  }
}
