import * as S from './styles'
import Coffe from "../../assets/image 2.png"


export function Home() {
  return (
    <S.Section>
      <img src={Coffe} alt="Cafe" />
      <article>
                <h2>Seja bem vindo (a)!</h2>
                <br />
                <h1>Você é daquelas pessoas que não vai a lugar nenhum sem ler alguma resenha antes? Então veio ao lugar
                    certo!<br /> Somos um blog para compartilhar suas indicações e experiências em cafeterias da região
                    sul
                    mineira. Faça um bom proveito e escolha o lugar que atenderá às suas expectativas. </h1>
      </article>
    </S.Section>
  )
}