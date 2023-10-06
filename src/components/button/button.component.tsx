/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { FC, useRef } from 'react';
import { StyledButton } from './button.styled';
import { ButtonProps } from './types';
import { LoadingSpinner } from '../loading-spinner/spinner.component';
import { StyleColors } from '../../styles/style-constants';

export const Button: FC<ButtonProps> = props => {
  const buttonRef = useRef(null);

  /**
   * @dev The function to handle when user point mouse down from button.
   * @param {React.MouseEventHandler<HTMLElement>} e.
   * @returns {Function}.
   */
  const onMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    /** @dev Disable click event when task is processing (loading status) */
    if (props.loading) return;

    /** @dev Get dom element. */
    const button = e.currentTarget;

    /** @dev Add hold-mouse into class list present for pressing status */
    button.classList.add('hold-mouse');

    /** @dev Get mouse event position. */
    const x = e.nativeEvent.offsetX - 10;
    const y = e.nativeEvent.offsetY - 10;

    /** @dev Create circle-grow container following mouse event position. */
    const div = document.createElement('div');
    div.className = `circle grow`;
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    button.appendChild(div);
  };

  const onMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    /** @dev Remove hold-mouse from class list present for unpressing status */
    const button = e.currentTarget;
    button.classList.remove('hold-mouse');
  };

  return (
    <StyledButton
      wave={props.wave}
      size={props.size}
      shape={props.shape}
      theme={props.theme}
      style={{ width: props.width, height: props.height }}
    >
      <button
        ref={buttonRef}
        type={props.type}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        disabled={props.disabled}
        style={props.containerStyle}
        className={`b-mc ${props.className}`}
        onClick={e => !props.loading && props.onClick && props.onClick(e)}
      >
        {props.loading && (
          <LoadingSpinner
            width={18}
            height={18}
            style={{ marginRight: '5px' }}
            color={
              props.containerStyle?.color
                ? props.containerStyle.color
                : !props.shape
                ? StyleColors.white
                : StyleColors.primary.purple
            }
          />
        )}
        {props.icon &&
          (typeof props.icon === 'string' ? (
            <img
              src={props.icon}
              alt="cavies-ui-kit-image"
              className="leftIcon"
            />
          ) : (
            <div className="leftIconContainer">{props.icon}</div>
          ))}
        <span>{props.text}</span>
        <div id="circle" className="circle"></div>
      </button>
    </StyledButton>
  );
};
