export interface Props {
  variant: 'primary' | 'secondary' | 'link'
  size: 'small' | 'medium' | 'big'
  disabled: boolean
  text: string
  to: string
  link: boolean
  method: (payload: MouseEvent) => void
}
