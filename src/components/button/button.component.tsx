import { FC, MouseEventHandler, CSSProperties, ReactNode, useRef } from 'react';
import { StyledButton, ButtonHTMLType, ButtonShape } from './button.styled';
import classnames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  containerStyle?: CSSProperties;
  textStyle?: CSSProperties;
  type?: ButtonHTMLType;
  shape?: ButtonShape;
  id?: string;
  text?: string;
  className?: string;
  textClassName?: string;
  disabled?: boolean | false;
}

export const Button: FC<ButtonProps> = props => {
  const buttonRef = useRef(null);

  const onMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    /** @dev Get dom element. */
    const button = e.currentTarget;

    /** @dev Add hold-mouse into class list present for pressing status */
    button.classList.add('hold-mouse');

    /** @dev Get mouse event position. */
    const x = e.nativeEvent.offsetX - 10;
    const y = e.nativeEvent.offsetY - 10;

    /** @dev Create circle-grow container following mouse event position. */
    const div = document.createElement('div');
    div.className = `${styles.circle} ${styles.grow}`;
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
      onClick={props.onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      className={classnames(styles.button, props.className)}
      ref={buttonRef}
      disabled={props.disabled}
      type={props.type}
      shape={props.shape}
      style={props.containerStyle}
    >
      <span>{props.text}</span>
      <div id="circle" className={styles.circle}></div>
    </StyledButton>
  );
};
