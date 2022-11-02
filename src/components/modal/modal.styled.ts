import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  display: table;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transform: scale(0);
  z-index: 1;
  &.four {
    z-index: 0;
    transform: scale(1);
    .modal-background {
      /* background: rgba(32, 36, 45, 0.5); */
      .modal {
        position: relative;
        z-index: 2;
        animation: blowUpModal 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }
    }
    + .content {
      z-index: 1;
      animation: blowUpContent 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }
    &.out {
      .modal-background {
        .modal {
          animation: blowUpModalTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
            forwards;
        }
      }
      + .content {
        animation: blowUpContentTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
          forwards;
      }
    }
  }
  .modal-background {
    display: table-cell;
    background: rgba(0, 0, 0, 0.8);
    text-align: center;
    vertical-align: middle;
    z-index: 100;
    .modal {
      background: white;
      padding: 50px;
      display: inline-block;
      border-radius: 3px;
      font-weight: 300;
      position: relative;
      h2 {
        font-size: 25px;
        line-height: 25px;
        margin-bottom: 15px;
      }
      p {
        font-size: 18px;
        line-height: 22px;
      }
      .modal-svg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: 3px;
        rect {
          stroke: #fff;
          stroke-width: 2px;
          stroke-dasharray: 778;
          stroke-dashoffset: 778;
        }
      }
    }
  }

  .layer {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background: rgba(32, 36, 45, 0.5);
  }

  @keyframes unfoldIn {
    0% {
      transform: scaleY(0.005) scaleX(0);
    }
    50% {
      transform: scaleY(0.005) scaleX(1);
    }
    100% {
      transform: scaleY(1) scaleX(1);
    }
  }

  @keyframes unfoldOut {
    0% {
      transform: scaleY(1) scaleX(1);
    }
    50% {
      transform: scaleY(0.005) scaleX(1);
    }
    100% {
      transform: scaleY(0.005) scaleX(0);
    }
  }

  @keyframes zoomIn {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes zoomOut {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes fadeIn {
    0% {
      background: rgba(0, 0, 0, 0);
    }
    100% {
      background: rgba(0, 0, 0, 0.7);
    }
  }

  @keyframes fadeOut {
    0% {
      background: rgba(0, 0, 0, 0.7);
    }
    100% {
      background: rgba(0, 0, 0, 0);
    }
  }

  @keyframes scaleUp {
    0% {
      transform: scale(0.8) translateY(1000px);
      opacity: 0;
    }
    100% {
      transform: scale(1) translateY(0px);
      opacity: 1;
    }
  }

  @keyframes scaleDown {
    0% {
      transform: scale(1) translateY(0px);
      opacity: 1;
    }
    100% {
      transform: scale(0.8) translateY(1000px);
      opacity: 0;
    }
  }

  @keyframes scaleBack {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.85);
    }
  }

  @keyframes scaleForward {
    0% {
      transform: scale(0.85);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes quickScaleDown {
    0% {
      transform: scale(1);
    }
    99.9% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes slideUpLarge {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  @keyframes slideDownLarge {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  @keyframes moveUp {
    0% {
      transform: translateY(150px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes moveDown {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(150px);
    }
  }

  @keyframes blowUpContent {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    99.9% {
      transform: scale(2);
      opacity: 0;
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes blowUpContentTwo {
    0% {
      transform: scale(2);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes blowUpModal {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes blowUpModalTwo {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }

  @keyframes roadRunnerIn {
    0% {
      transform: translateX(-1500px) skewX(30deg) scaleX(1.3);
    }
    70% {
      transform: translateX(30px) skewX(0deg) scaleX(0.9);
    }
    100% {
      transform: translateX(0px) skewX(0deg) scaleX(1);
    }
  }

  @keyframes roadRunnerOut {
    0% {
      transform: translateX(0px) skewX(0deg) scaleX(1);
    }
    30% {
      transform: translateX(-30px) skewX(-5deg) scaleX(0.9);
    }
    100% {
      transform: translateX(1500px) skewX(30deg) scaleX(1.3);
    }
  }

  @keyframes sketchIn {
    0% {
      stroke-dashoffset: 778;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes sketchOut {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 778;
    }
  }

  @keyframes modalFadeIn {
    0% {
      background-color: transparent;
    }
    100% {
      background-color: white;
    }
  }

  @keyframes modalFadeOut {
    0% {
      background-color: white;
    }
    100% {
      background-color: transparent;
    }
  }

  @keyframes modalContentFadeIn {
    0% {
      opacity: 0;
      top: -20px;
    }
    100% {
      opacity: 1;
      top: 0;
    }
  }

  @keyframes modalContentFadeOut {
    0% {
      opacity: 1;
      top: 0px;
    }
    100% {
      opacity: 0;
      top: -20px;
    }
  }

  @keyframes bondJamesBond {
    0% {
      transform: translateX(1000px);
    }
    80% {
      transform: translateX(0px);
      border-radius: 75px;
      height: 75px;
      width: 75px;
    }
    90% {
      border-radius: 3px;
      height: 182px;
      width: 247px;
    }
    100% {
      border-radius: 3px;
      height: 162px;
      width: 227px;
    }
  }

  @keyframes killShot {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(300px) rotate(45deg);
      opacity: 0;
    }
  }

  @keyframes fadeToRed {
    0% {
      background-color: rgba(black, 0.6);
    }
    100% {
      background-color: rgba(red, 0.8);
    }
  }

  @keyframes slowFade {
    0% {
      opacity: 1;
    }
    99.9% {
      opacity: 0;
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;
