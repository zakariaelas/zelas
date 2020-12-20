import { keyframes } from "styled-components"

export const SlideFromLeft = keyframes`
    0%{
      opacity: 0.8;
      transform: translate(-300px);
    }
    100%{
      opacity: 1;
      transform: translate(0px);
    }
`

export const SlideFromRight = keyframes`
    0%{
      opacity: 0.8;
      transform: translate(300px);
    }
    100%{
      opacity: 1;
      transform: translate(0px);
    }
`

export const SlideFromTop = keyframes`
0%{
  opacity: 0.8;
  transform: translateY(-300px);
}
100%{
  opacity: 1;
  transform: translateY(0px);
}
`
