import styled from 'styled-components';
import { StyleColors } from '../../styles/style-constants';
import { StyledInputProps } from './types';

/**
 * @dev Translate title label to default position when the input is empty value.
 * @returns styles
 */
const facility = () => (props: StyledInputProps) => {
  if (!props.secondaryVal) return;
  return `
    .label-name .content-name {
      transform: translateY(-130%);
      font-size: 10px;
      padding-bottom: 5px;
    }
  `;
};

export const StyledInput = styled.div<StyledInputProps>`
  div.container {
    $parent: &;
    width: 30%;
    position: relative;
    overflow: hidden;
    border: 1px solid
      ${props => (props.error ? StyleColors.red[50] : StyleColors.dark[30])};
    box-shadow: 0 0 1px 0px ${StyleColors.dark[30]} inset,
      0 0 1px 0px ${StyleColors.dark[30]};
    font-family: hk-font-regular;
    color: ${StyleColors.black};
    border-radius: 8px;
    height: 48px;
    input {
      width: 100%;
      font-size: 16px;
      padding: 16px;
      height: 100%;
      border: none;
      padding-top: 25px;
      padding-right: 25px;
      font-family: hk-font-regular;
    }
    label {
      position: absolute;
      bottom: 0;
      left: 16px;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    label::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0px;
      width: 100%;
      height: 100%;
      transform: translateX(-100%);
      transition: all 0.3s ease;
    }

    .content-name {
      position: absolute;
      bottom: 0px;
      left: 0px;
      padding-bottom: 10px;
      transition: all 0.3s ease;
      color: ${StyleColors.dark[30]};
    }
    &:focus-within {
      border: 1px solid
        ${props =>
          props.error ? StyleColors.red[50] : StyleColors.primary.purple};
    }
    input:focus {
      outline: none;
    }
    input:focus + .label-name .content-name {
      transform: translateY(-110%);
      font-size: 10px;
      padding-bottom: 5px;
    }
    input:focus + .label-name::after,
    input:valid + .label-name::after {
      transform: translateX(0%);
    }
    ${facility}
    .left-icon {
      position: absolute;
      right: -20px;
      -webkit-transform: translate(-70%, -70%);
      transform: translate(-70%, -70%);
      position: absolute;
      top: 63%;
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
  .error {
    color: ${StyleColors.red[50]};
    line-height: 0;
  }
`;
