import { FC, useEffect, useRef } from 'react';
import { StyledModal } from './modal.styled';
import type { ModalProps } from './types';

export const Modal: FC<ModalProps> = props => {
  const ref = useRef(null);

  /**
   * @dev
   * This function will be called when user click outside modal
   * or force close function from parent container
   */
  const handleCloseModal = () => {
    /**
     * @dev Get HTML element from ref.
     */
    const container = ref.current as any as HTMLElement;
    container.classList.remove('four');
    container.classList.add('out');
    document.body.classList.remove('modal-active');
  };

  useEffect(() => {
    /**
     * @dev Get HTML element from ref.
     */
    const container = ref.current as any as HTMLElement;

    /**
     * @dev Display modal when open props is true.
     */
    if (props.open) {
      container.classList.contains('out') && container.classList.remove('out');
      container.classList.add('four');
      document.body.classList.add('modal-active');
    }
  }, [props.open, ref]);

  return (
    <StyledModal ref={ref} style={{ zIndex: 200 }}>
      <div className="modal-background">
        <div className="modal">
          <h2>I'm a Modal</h2>
          <p>Hear me roar.</p>
        </div>
        <div className="layer" onClick={handleCloseModal} />
      </div>
    </StyledModal>
  );
};
