/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import styled from 'styled-components';
import GitHubButton from 'react-github-btn';
import StyledButton from './StyledButton';
import ImageInfo from '../assets/img/info.svg';
import ImageClose from '../assets/img/close.svg';
import ImageReward from '../assets/img/reward.jpg';
import { AniSlideLeft } from './animates';
const InfoButton = styled(StyledButton)`
  z-index: 998;
  position: fixed;
  right: 0.5rem;
  bottom: 0.5rem;
  padding: 0.8rem;
  margin-right: 0.5rem;
  background-image: url(${ImageInfo});
  &.close {
    background-image: url(${ImageClose});
  }
`;
const StyledModal = styled.section`
  z-index: 998;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 8px black;
  position: fixed;
  right: 0.5rem;
  bottom: 2.5rem;
  background: rgba(2, 2, 2, 0.6);
  padding: 1rem;
  animation: ${AniSlideLeft} 1s;
  padding: 1rem;
  .reward {
    width: 14rem;
    align-self: center;
    border: 1px solid #222;
    border-radius: 0.4rem;
    margin-bottom: 0.8rem;
  }

  .line {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
    &.title {
      font-size: 1.4rem;
      font-weight: 800;
    }
    &.github > span {
      margin-right: 0.4rem;
    }
  }
  .copyright {
    font-size: 0.5rem;
  }
`;
const Modal = () => (
  <StyledModal className="idleHide">
    <div className="line title">土味情话在线生成器</div>
    <div className="line github">
      <GitHubButton
        href="https://github.com/zerosoul/honeyed-words-generator"
        data-color-scheme="no-preference: light; light: light; dark: dark;"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star zerosoul/honeyed-words-generator on GitHub"
      >
        Star
      </GitHubButton>
      <GitHubButton
        href="https://github.com/zerosoul/honeyed-words-generator/fork"
        data-color-scheme="no-preference: light; light: light; dark: dark;"
        data-icon="octicon-repo-forked"
        data-size="large"
        data-show-count="true"
        aria-label="Fork zerosoul/honeyed-words-generator on GitHub"
      >
        Fork
      </GitHubButton>
    </div>
    <img src={ImageReward} alt="reward" className="reward" />

    <div className="copyright">
      <span> Copyright © {new Date().getFullYear()} By </span>
      <a rel="noopener noreferrer" href="https://yangerxiao.com" target="_blank">
        Tristan
      </a>
    </div>
  </StyledModal>
);
export default function InfoModal() {
  const [visible, setVisible] = useState(false);
  const handleInfoClick = () => {
    setVisible(prev => !prev);
  };

  return (
    <>
      {visible ? <Modal /> : null}

      <InfoButton
        className={`idleHide ${visible ? 'close' : ''}`}
        onClick={handleInfoClick}
      ></InfoButton>
    </>
  );
}