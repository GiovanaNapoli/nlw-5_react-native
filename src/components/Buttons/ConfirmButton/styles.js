import styled from 'styled-components/native'
import colors from '../../../styles/colors'
import fonts from '../../../styles/fonts'

export const Button = styled.TouchableOpacity`
  background-color: ${colors.green};
  height: 56px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-family: ${fonts.heading};
`
