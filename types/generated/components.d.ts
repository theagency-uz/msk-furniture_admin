import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductParamsParametry extends Schema.Component {
  collectionName: 'components_product_params_parametry';
  info: {
    displayName: '\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B';
  };
  attributes: {
    title: Attribute.String;
    value: Attribute.String;
  };
}

export interface CoverPokrytie extends Schema.Component {
  collectionName: 'components_cover_pokrytie';
  info: {
    displayName: '\u041F\u043E\u043A\u0440\u044B\u0442\u0438\u0435';
    description: '';
  };
  attributes: {
    cover_type: Attribute.Relation<
      'cover.pokrytie',
      'oneToOne',
      'api::cover-type.cover-type'
    >;
    colors: Attribute.Component<'colors.czveta', true>;
    previewImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true> &
      Attribute.Required;
    price: Attribute.Integer;
  };
}

export interface ColorsCzveta extends Schema.Component {
  collectionName: 'components_colors_czveta';
  info: {
    displayName: '\u0426\u0432\u0435\u0442\u0430';
    description: '';
  };
  attributes: {
    color: Attribute.Relation<'colors.czveta', 'oneToOne', 'api::color.color'>;
    previewImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product-params.parametry': ProductParamsParametry;
      'cover.pokrytie': CoverPokrytie;
      'colors.czveta': ColorsCzveta;
    }
  }
}
