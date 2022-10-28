import { FC, useRef } from 'react';
import { StyledButton } from './button.styled';
import { ButtonProps } from './types';
import { LoadingSpinner } from '../loading-spinner/spinner.component';
import { StyleColors } from '../../styles/style-constants';

export const Button: FC<ButtonProps> = props => {
  const buttonRef = useRef(null);

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
      ref={buttonRef}
      onClick={e => !props.loading && props.onClick && props.onClick(e)}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      className={props.className}
      disabled={props.disabled}
      type={props.type}
      shape={props.shape || 'primary'}
      style={props.containerStyle}
      size={props.size}
      loading={props.loading}
    >
      {props.loading && (
        <LoadingSpinner
          width={18}
          height={18}
          style={{ marginRight: '5px' }}
          color={
            props.shape === 'primary'
              ? StyleColors.white
              : StyleColors.primary.purple
          }
        />
      )}
      <span>{props.text}</span>
      <div id="circle" className="circle"></div>
    </StyledButton>
  );
};
