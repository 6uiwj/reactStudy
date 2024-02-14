import styled from 'styled-components';
import { buttonSizes, fontSizes } from '../../styles/Size';
import color from '../../styles/Color';

const { small, medium, big } = buttonSizes; //비구조화 할당

//속성명과 변수를 다르게 정해줄 때 분해 (비구조화 할당)
const { small: fSmall, medium: fMedium, big: fBig } = fontSizes;
/*
const commonStyle = css`
  border: 0;
  cursor: pointer;
  border=radius: 5px;
`;

*/
/*styled components의 함수를 정의 해야함... 함수를 정의하면 첫번째 매개변수로 props가 넘어옴?*/
export const SmallButton = styled.button`
  width: ${small.width}px;
  height: ${small.height}px;
  font-size: ${fSmall}rem;
  background: ${(bcolor) => color[bcolor] || bcolor};
  color: ${({ color }) => color[color] || color};
`;
//  ${commonStyle}

export const MediumButton = styled.button`
  width: ${medium.width}px;
  height: ${medium.height}px;
  font-size: ${fMedium}rem;
  background: ${(bcolor) => color[bcolor] || bcolor};
  color: ${({ color }) => color[color] || color};
`;
/*
 ${({ active }) =>
    active &&
    css`
      border: 2px solid #000;
    `}
*/

export const BigButton = styled.button`
  width: ${big.width}px;
  height: ${big.height}px;
  font-size: ${fBig}rem;
  background: ${(bcolor) => color[bcolor] || bcolor};
  color: ${({ color }) => color[color] || color};
`;
