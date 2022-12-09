import { StyledButton } from './button.styled'

type ButtonProps = {
  type: 'primary' | 'outline',
  value: React.ReactNode,
  onClick?: () => void,
  disabled?: boolean,
  loading?: boolean,
  style?: object,
}

export const Button = ({
  type,
  value,
  onClick,
  disabled = false,
  loading = false,
  style,
}: ButtonProps) => (
  <StyledButton
    onClick={onClick}
    type={type}
    disabled={disabled || loading}
    style={style}
  >
    {
      value
    }
  </StyledButton>
)
