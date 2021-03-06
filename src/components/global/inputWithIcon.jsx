/**
 *
 * @summary An configurable input component with an optional icon
 * @description An customisable input with onChange callback function and optional icon
 * @author Gareth Perry <garethnperry@gmail.com>
 *
 * @version 1.0.0 (June 2020)
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InteractiveIcon from './interactiveIcon';

const TextBoxContainer = styled.div`
  position: relative;
  display: flex;
  height: ${props => props.height}px;
  width: ${props => props.width}px;

  margin-left: ${props => props.margin.left};
  margin-right: ${props => props.margin.right};

  padding-top: ${props => props.padding.top}px;
  padding-bottom: ${props => props.padding.bottom}px;
  padding-left: ${props => props.padding.left}px;
  padding-right: ${props => props.padding.right}px;
`;
const TextBoxInput = styled.input`
  height: 100%;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border: 1px solid grey;
  border-radius: 5px;
  :disabled {
    background-color: white;
    opacity: 0.8;
  }
`;

const IconPosition = styled.div`
  position: absolute;
  height: 100%;
  width: auto;
  right: 5px;
`;

export default function InputWithIcon(props) {
  const {
    height,
    width,
    maxHeight,
    maxWidth,
    margins,
    paddings,
    iconProps,
    placeholderText,
    isDisabled,
    updateFunc,
  } = props;

  // If margins not supplied use auto left/right and 5px top/bottom
  let margin = margins || { left: 'auto', right: 'auto', top: 5, bottom: 5 };

  //If paddings not supplied default all to 0
  let padding = paddings || { top: 0, bottom: 0, left: 0, right: 0 };

  return (
    <TextBoxContainer
      height={height || 50}
      width={width || 300}
      maxHeight={maxHeight || 50}
      maxWidth={maxWidth || 300}
      margin={margin}
      padding={padding}
    >
      <TextBoxInput
        placeholder={placeholderText || ''}
        disabled={isDisabled}
        onChange={e => updateFunc(e.currentTarget.value)}
      />
      {iconProps && (
        <IconPosition onClick={() => iconProps.onClickFunc()}>
          <InteractiveIcon {...iconProps} />
        </IconPosition>
      )}
    </TextBoxContainer>
  );
}

InputWithIcon.propTypes = ({
  number,
  object,
  string,
  bool,
  func,
} = PropTypes) => {
  return {
    /* The height of the textbox */
    height: number,
    /* The width of the textbox */
    width: number,
    /* The height of the textbox */
    maxHeight: number,
    /* The width of the textbox */
    maxWidth: number,
    /* The margins of the textbox */
    margins: object,
    /* The paddings of the textbox */
    paddings: object,
    /* The optional props for an icon */
    iconProps: object,
    /* The placeholder message for the input */
    placeholderText: string,
    /* If the input is disabled */
    isDisabled: bool,
    /* Callback function to capture input value */
    updateFunc: func,
  };
};
