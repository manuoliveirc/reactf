import * as S from "./styles";
export interface ICard {
  usuario: string
  local: string
  avaliacao: string
}
export const Card = ({ usuario, local, avaliacao }: ICard) => {
  return (
    <S.Aside>
      <h3>
        <strong>Usuario: </strong> {usuario}
      </h3>
      <h4>Local: {local}</h4>
      <p>avaliacao: {avaliacao}</p>
    </S.Aside>
  );
};