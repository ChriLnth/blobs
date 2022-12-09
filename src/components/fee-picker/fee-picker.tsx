import { Subtitle } from "@/stitches"
import { Container, StyledFee } from "./fee-picker.styled"

export type FeeValue = 'MATIC' | 'tUSDC'

type FeeProps = {
  value: FeeValue,
  selected: FeeValue,
  onClick: () => void,
}

type FeePickerProps = {
  selected: FeeValue,
  onChange: (fee: FeeValue) => void,
}

const Fee = ({ value, selected, onClick }: FeeProps) =>
  <StyledFee selected={value === selected} onClick={onClick}>{value}</StyledFee>

export const FeePicker = ({ selected, onChange }: FeePickerProps) => {
  return (
    <Container>
      <Subtitle>Pay fee with</Subtitle>
      <Subtitle>
        <Fee value='MATIC' selected={selected} onClick={() => onChange('MATIC')} />
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Fee value='tUSDC' selected={selected} onClick={() => onChange('tUSDC')} />
      </Subtitle>
    </Container>
  )
}
