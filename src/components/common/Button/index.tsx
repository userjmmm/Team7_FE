import styled from 'styled-components';

type Props = {
  theme?: 'kakao' | 'outline' | 'white' | 'mint' | 'visit';
  size?: 'large' | 'small' | 'responsive';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ ...props }: Props) {
  return <Wrapper {...props} />;
}

const Wrapper = styled.button<Pick<Props, 'theme' | 'size'>>(
  {
    width: '100%',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 200ms',
    border: 'none',
  },
  ({ size = 'responsive' }) => {
    const largeStyle = {
      height: '60px',
      fontSize: '22px',
    };

    const smallStyle = {
      height: '46px',
      fontSize: '18px',
    };
    if (size === 'large') {
      return largeStyle;
    }

    if (size === 'small') {
      return smallStyle;
    }

    return {
      ...smallStyle,
      [`@media screen and (min-width:1100px)`]: {
        ...largeStyle,
      },
    };
  },
  ({ theme = 'mint' }) => {
    if (theme === 'outline') {
      return {
        boxShadow: '0 0 0 1px #ffffff inset',
        color: '#ffffff',
        background: 'none',

        '&:hover': {
          backgroundColor: '#1b1a1a',
        },
      };
    }

    if (theme === 'white') {
      return {
        color: '#000',
        backgroundColor: '#fff',

        '&:hover': {
          backgroundColor: '#f8f8f8',
        },
      };
    }

    if (theme === 'kakao') {
      return {
        color: '#111',
        backgroundColor: '#fee500',

        '&:hover': {
          backgroundColor: '#fada0a',
        },
      };
    }

    if (theme === 'visit') {
      return {
        color: '#55EBFF',
        boxShadow: '0 0 0 1px #55EBFF inset',
        background: 'none',

        '&:hover': {
          backgroundColor: '#1b1a1a',
        },
      };
    }

    return {
      color: '#000',
      backgroundColor: '#55EBFF',

      '&:hover': {
        backgroundColor: '#3da3b1',
      },
    };
  },
);
