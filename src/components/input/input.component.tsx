import { FC, ChangeEvent, useEffect, useState } from 'react';

type InputType = 'number' | 'text' | 'password';

export interface InputProps {
  title?: string;
  placeholder?: string;
  containerClassName?: string;
  inputClassName?: string;
  type?: InputType;
  value?: string;
  error?: string;
  onValueChange?: (value: string) => void;
  onChange?: (ref: Element | ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  title,
  type,
  placeholder,
  containerClassName,
  inputClassName,
  value,
  error,
  onValueChange,
  onChange,
}) => {
  /**
   * @dev Use this state for handling display password filter
   */
  const [typeState, setTypeState] = useState<InputType>(type || 'text');

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
    // setTypeState(type);
  }, [type]);

  return (
    <div>
      {title && <p>{title}</p>}
      <div className="input-container">
        <input
          {...(value ? { value } : {})}
          className={inputClassName}
          type={typeState}
          onChange={e => {
            onValueChange && onValueChange(e.target.value);
            onChange && onChange(e);
          }}
          placeholder={placeholder || title || 'Input'}
        />
        {type === 'password' && (
          <button
            onClick={toggleDisplayPassword}
            className="left-icon"
            type="button"
          >
            {/* <img
              src={typeState === 'password' ? ShowIcon : HideIcon}
              className="w-[14px] h-[14px]"
            /> */}
          </button>
        )}
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};
