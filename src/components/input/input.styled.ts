import styled from 'styled-components';
import { StyleColors } from '../../styles/style-constants';
import { StyledInputProps } from './types';

/**
 * @dev Top value of input title when focus or value of title is not empty.
 */
const TitleTranslateY = '-120%';

/**
 * @dev Translate title label to default position when the input is empty value.
 * @returns styles
 */
const facility = () => (props: StyledInputProps) => {
  if (!props.secondaryVal) return;
  return `
    .label-name .content-name {
      transform: translateY(${TitleTranslateY});
      font-size: 10px;
      padding-bottom: 5px;
    }
  `;
};

export const StyledInput = styled.div<StyledInputProps>`
  height: 48px;
  div.container {
    height: 100%;
    width: 30%;
    position: relative;
    overflow: hidden;
    border: 1px solid
      ${props => (props.error ? StyleColors.red[50] : StyleColors.dark[30])};
    box-shadow: 0 0 1px 0px ${StyleColors.dark[30]} inset,
      0 0 1px 0px ${StyleColors.dark[30]};
    font-family: hk-font-regular;
    color: ${StyleColors.black};
    border-radius: 16px;
    input {
      border-radius: 16px;
      width: 100%;
      font-size: ${props => (props.size === 'small' ? '16px' : '18px')};
      height: 48px;
      border: none;
      padding: 0;
      padding-left: 16px;
      padding-right: ${props => (props.type === 'password' ? '40px' : '16px')};
      font-family: hk-font-regular;
      padding-top: 3px;
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
      transform: translateY(${TitleTranslateY});
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
      top: 67%;
      background: transparent;
      border: none;
      cursor: pointer;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
  .error {
    color: ${StyleColors.red[50]};
    line-height: 0;
  }
`;
