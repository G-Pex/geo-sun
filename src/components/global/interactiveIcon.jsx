/**
 *
 * @summary A configurable svg icon component
 * @description A configurable icon component using an SVG file (svg id must be provided as #className)
 * @author Gareth Perry <garethnperry@gmail.com>
 *
 * @version 1.0.0 (June 2020)
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconSvg = styled.svg`
  position: relative;

  height: ${props => props.height}px;
  width: ${props => props.width}px;

  margin-left: ${props => props.margin.left};
  margin-right: ${props => props.margin.right};

  padding-top: ${props => props.padding.top}px;
  padding-bottom: ${props => props.padding.bottom}px;
  padding-left: ${props => props.padding.left}px;
  padding-right: ${props => props.padding.right}px;

  :hover {
    height: ${props =>
      props.hoverHeight ? props.hoverHeight : props.height}px;
    width: ${props => (props.hoverWidth ? props.hoverWidth : props.width)}px;
  }
`;

export default function InteractiveIcon(props) {
  const {
    height,
    width,
    hoverHeight,
    hoverWidth,
    svg,
    svgClass, // provide svg id to override styles
    fillColour,
    lineColour,
    margins,
    paddings,
  } = props;

  // If margins not supplied use auto left/right
  let margin = margins || { left: 'auto', right: 'auto' };

  //If paddings not supplied default all to 0
  let padding = paddings || { top: 0, bottom: 0, left: 0, right: 0 };
  return (
    <IconSvg
      height={height ? height : 30}
      width={width ? width : 30}
      hoverHeight={hoverHeight}
      hoverWidth={hoverWidth}
      margin={margin}
      padding={padding}
    >
      <use xlinkHref={svg + svgClass} fill={fillColour} line={lineColour} />
    </IconSvg>
  );
}

InteractiveIcon.propTypes = ({ object, string, number } = PropTypes) => {
  return {
    /* The SVG graphic used by the icon*/
    svg: object,
    /* The SVG class used to override styles*/
    svgClass: string,
    /* The colour used to override the style 'fill' */
    fillColour: string,
    /* The colour used to override the style 'line' */
    lineColour: string,
    /* The margins of the icon */
    margins: object,
    /* The paddings of the icon */
    paddings: object,
    /* The height in px of the icon */
    height: number,
    /* The width in px of the icon */
    width: number,
    /* The height in px of the icon when mouse hovers over */
    hoverHeight: number,
    /* The width in px of the icon when mouse hovers over */
    hoverWidth: number,
  };
};
