import { FC, useEffect, useState } from 'react';
import { EyeClose, EyeOpen } from '../../styles/icon-constants';
import { InputProps, InputType } from './types';
import { StyledInput } from './input.styled';
import { SmallText } from '../typography/typography.component';

export const Input: FC<InputProps> = props => {
  /** @dev Get nessesary properties */
  const {
    title,
    type,
    containerClassName,
    inputClassName,
    value,
    error,
    size,
    style,
    placeholder,
    icon,
    onValueChange,
    onChange,
  } = props;

  /**
   * @dev Use this state for handling display password filter
   */
  const [typeState, setTypeState] = useState<InputType>(type || 'text');

  /**
   * @dev Define value state
   */
  const [secondaryVal, setSecondaryVal] = useState('');

  /**
   * @dev This function to toggle password display
   */
  const toggleDisplayPassword = () => {
    if (type === 'password') {
      setTypeState(prev => (prev === 'password' ? 'text' : 'password'));
    }
  };

  /**
   * @dev Detect if defaut type has changed
   */
  useEffect(() => {
    type && setTypeState(type);
  }, [type]);

  return (
    <StyledInput
      className={containerClassName}
      secondaryVal={secondaryVal}
      error={error}
      size={size}
      style={style}
      icon={icon}
      type={type}
    >
      <div className="container">
        <input
          {...(value ? { value } : {})}
          className={inputClassName}
          type={typeState}
          required
          onChange={e => {
            onValueChange && onValueChange(e.target.value);
            setSecondaryVal(e.target.value);
            onChange && onChange(e);
          }}
          autoComplete="off"
          placeholder={placeholder}
        />
        {type === 'password' && (
          <button
            onClick={toggleDisplayPassword}
            className="right-icon"
            type="button"
          >
            <img
              src={typeState === 'password' ? EyeOpen : EyeClose}
              alt="cavies"
            />
          </button>
        )}
        {icon &&
          (typeof icon === 'string' ? (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img src={icon} alt="cavies-ui-kit-image" className="left-icon" />
          ) : (
            <div className="left-icon">{icon}</div>
          ))}
        <label htmlFor="text" className="label-name">
          <span className="content-name">{title}</span>
        </label>
      </div>
      {error && (
        <SmallText className="error" type="regular">
          {error}
        </SmallText>
      )}
    </StyledInput>
  );
};
