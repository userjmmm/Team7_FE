import styled from 'styled-components';

type Props = {
  variant?: 'kakao' | 'outline' | 'white' | 'mint' | 'visit' | 'blackOutline';
  size?: 'large' | 'small' | 'responsive';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ ...props }: Props) {
  return <Wrapper {...props} />;
}

const baseButtonStyle = {
  width: '100%',
  borderRadius: '6px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'background-color 200ms',
  border: 'none',
};

const sizeStyles = (size: Props['size'] = 'responsive') => {
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
    [`@media screen and (min-width:960px)`]: largeStyle,
  };
};

const variantStyles = (variant: Props['variant'] = 'mint') => {
  if (variant === 'outline') {
    return {
      boxShadow: '0 0 0 1px #ffffff inset',
      color: '#ffffff',
      background: 'none',

      '&:hover': {
        backgroundColor: '#1b1a1a',
      },
    };
  }
  if (variant === 'blackOutline') {
    return {
      boxShadow: '0 0 0 1px #000000 inset',
      color: '#000000',
      background: 'none',

      '&:hover': {
        backgroundColor: '#f4f4f4',
      },
    };
  }

  if (variant === 'white') {
    return {
      color: '#000',
      backgroundColor: '#fff',

      '&:hover': {
        backgroundColor: '#f8f8f8',
      },
    };
  }

  if (variant === 'kakao') {
    return {
      color: '#111',
      backgroundColor: '#fee500',

      '&:hover': {
        backgroundColor: '#fada0a',
      },
    };
  }

  if (variant === 'visit') {
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
      backgroundColor: '#1b1a1a',
    },
  };
};

const Wrapper = styled.button<Pick<Props, 'variant' | 'size'>>(
  baseButtonStyle,
  ({ size }) => sizeStyles(size),
  ({ variant }) => variantStyles(variant),
);
