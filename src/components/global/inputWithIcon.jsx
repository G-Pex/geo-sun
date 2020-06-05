import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InteractiveIcon from './interactiveIcon';

const TextBoxContainer = styled.div`
  position: relative;

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
  width: 100%;
  text-align: center;
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
      <TextBoxInput placeholder={placeholderText || ''} />
      {iconProps && (
        <IconPosition>
          <InteractiveIcon onClick={() => iconProps.onClick()} {...iconProps} />
        </IconPosition>
      )}
    </TextBoxContainer>
  );
}

InputWithIcon.propTypes = ({ number, object, string } = PropTypes) => {
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
  };
};
