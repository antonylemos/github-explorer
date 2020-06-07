import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: transparent;
    color: ${props => props.theme.colors.icon};
    border: none;
    transition: color 0.2s;

    &:hover {
      ${props =>
        props.theme.title === 'light'
          ? css`
              color: ${shade(0.2, '#7e8ce0')};
            `
          : css`
              color: ${shade(0.2, '#F7AF5F')};
            `};
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.colors.title};
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError && props.theme.title === 'light'
        ? css`
            border-color: #c53030;
          `
        : css`
            border-color: #fff;
          `}

    ${props =>
      props.hasError && props.theme.title === 'dark'
        ? css`
            border-color: #ffa48e;
          `
        : css`
            border-color: #fff;
          `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: ${props => props.theme.colors.secondary};
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      ${props =>
        props.theme.title === 'light'
          ? css`
              background: ${shade(0.2, '#04d361')};
            `
          : css`
              background: ${shade(0.2, '#4acfac')};
            `}
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: ${props => props.theme.colors.error};
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: ${props => props.theme.colors.primary};
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 10px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: ${props => props.theme.colors.text};
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
