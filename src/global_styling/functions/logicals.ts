/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { keysOf } from '../../components/common';

/**
 * EUI utilizes logical CSS properties to enable directional writing-modes.
 * To encourage use of logical properties, we provide a few helper utilities to
 * convert certain directional properties to logical properties.
 * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties
 */

export const logicalSide = {
  left: 'inline-start',
  right: 'inline-end',
  top: 'block-start',
  bottom: 'block-end',
  horizontal: 'inline',
  vertical: 'block',
};

export const LOGICAL_SIDES = keysOf(logicalSide);
export type LogicalSides = typeof LOGICAL_SIDES[number];

const logicalMargins = {
  'margin-left': 'margin-inline-start',
  'margin-right': 'margin-inline-end',
  'margin-top': 'margin-block-start',
  'margin-bottom': 'margin-block-end',
  'margin-horizontal': 'margin-inline',
  'margin-vertical': 'margin-block',
};

const logicalPaddings = {
  'padding-left': 'padding-inline-start',
  'padding-right': 'padding-inline-end',
  'padding-top': 'padding-block-start',
  'padding-bottom': 'padding-block-end',
  'padding-horizontal': 'padding-inline',
  'padding-vertical': 'padding-block',
};

const logicalPosition = {
  top: 'inset-block-start',
  right: 'inset-inline-end',
  bottom: 'inset-block-end',
  left: 'inset-inline-start',
  horizontal: 'inset-block',
  vertical: 'inset-inline',
  inset: 'inset',
};

const logicalSize = {
  height: 'block-size',
  width: 'inline-size',
  'max-height': 'max-block-size',
  'max-width': 'max-inline-size',
  'min-height': 'min-block-size',
  'min-width': 'min-inline-size',
};

const logicalOverflow = {
  'overflow-x': 'overflow-block',
  'overflow-y': 'overflow-inline',
};

const logicalBorders = {
  'border-horizontal': 'border-inline',
  'border-horizontal-color': 'border-inline-color',
  'border-horizontal-width': 'border-inline-width',
  'border-horizontal-style': 'border-inline-style',
  'border-vertical': 'border-block',
  'border-vertical-color': 'border-block-color',
  'border-vertical-width': 'border-block-width',
  'border-vertical-style': 'border-block-style',
  'border-bottom': 'border-block-end',
  'border-bottom-color': 'border-block-end-color',
  'border-bottom-style': 'border-block-end-style',
  'border-bottom-width': 'border-block-end-width',
  'border-top': 'border-block-start',
  'border-top-color': 'border-block-start-color',
  'border-top-style': 'border-block-start-style',
  'border-top-width': 'border-block-start-width',
  'border-right': 'border-inline-end',
  'border-right-color': 'border-inline-end-color',
  'border-right-style': 'border-inline-end-style',
  'border-right-width': 'border-inline-end-width',
  'border-left': 'border-inline-start',
  'border-left-color': 'border-inline-start-color',
  'border-left-style': 'border-inline-start-style',
  'border-left-width': 'border-inline-start-width',
  'border-top-left-radius': 'border-start-start-radius',
  'border-top-right-radius': 'border-start-end-radius',
  'border-bottom-left-radius': 'border-end-start-radius',
  'border-bottom-right-radius': 'border-end-end-radius',
};

export const logicals = {
  ...logicalMargins,
  ...logicalPaddings,
  ...logicalPosition,
  ...logicalSize,
  ...logicalOverflow,
  ...logicalBorders,
};

export const LOGICAL_PROPERTIES = keysOf(logicals);
export type LogicalProperties = typeof LOGICAL_PROPERTIES[number];

/**
 *
 * @param property A string that is a valid CSS logical property
 * @param value String to output as the property value
 * @returns `string` Returns the logical CSS property version for the given `property: value` pair
 */
export const logicalCSS = (property: LogicalProperties, value?: any) => {
  return `${logicals[property]}: ${value};`;
};

/**
 *
 * @param property A string that is a valid CSS logical property
 * @param value String to output as the property value
 * @returns `object` Returns the logical CSS property version for the given `property: value` pair
 */
export const logicalStyle = (property: LogicalProperties, value?: any) => {
  // Strip hyphens and camelCase the CSS logical property so React doesn't throw errors
  const camelCasedProperty = logicals[property].replace(/-\w/g, (str) =>
    str.charAt(1).toUpperCase()
  );
  return { [camelCasedProperty]: value };
};

/**
 *
 * @param width A string value for the LTR width
 * @param height A string value for the LTR height
 * @returns `string` Returns the logical CSS properties for height and width
 */
export const logicalSizeCSS = (width: any, height: any) => {
  return `
    ${logicals.width}: ${width};
    ${logicals.height}: ${height};
  `;
};

/**
 *
 * @param width A string value for the LTR width
 * @param height A string value for the LTR height
 * @returns `object` Returns the logical CSS properties for height and width
 */
export const logicalSizeStyle = (width: any, height: any) => {
  return {
    [logicals.width]: width,
    [logicals.height]: height,
  };
};

// Text alignment is separate because its the value that changes not the property
export const logicalText = {
  'text-align': {
    left: 'start',
    center: 'center',
    right: 'end',
  },
};

export const LOGICAL_TEXT_ALIGNMENT = keysOf(logicalText['text-align']);
export type LogicalText = typeof LOGICAL_TEXT_ALIGNMENT[number];

/**
 *
 * @param property A string that is a valid CSS logical property
 * @param value String to output as the property value
 * @returns `string` Returns the logical CSS property version for the given `property: value` pair
 */
export const logicalTextAlignCSS = (value: LogicalText) => {
  return `text-align: ${logicalText['text-align'][value]};`;
};

/**
 *
 * @param property A string that is a valid CSS logical property
 * @param value String to output as the property value
 * @returns `object` Returns the logical CSS property version for the given `property: value` pair
 */
export const logicalTextAlignStyle = (value: LogicalText) => {
  return { textAlign: logicalText['text-align'][value] };
};
