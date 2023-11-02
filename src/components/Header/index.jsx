import { Container, Logout, Brand, Profile,Icon } from "./styles"
import { Input } from "../Input/index"

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Input placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <strong>Paulo Victor</strong>
          <Logout>
            <span>Sair</span>
          </Logout>
        </div>
        <Icon to="/profile">
          <img
            src="https://github.com/enKAYNpetado.png"
            alt="foto de usuário"
          />
        </Icon>
      </Profile>
    </Container>
  )
}
