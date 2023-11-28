import * as S from "./styles"
import Face from "../../assets/image 4.png"
import Insta from "../../assets/image 3.png"


export function Footer() {
  return (
    <S.Footer>
      <a href="https://facebook.com" target="_blank">
        <img src={Face} alt="Facebook" />
      </a>
      <img src={Insta} alt="Instagram" />
    </S.Footer>
  )
}