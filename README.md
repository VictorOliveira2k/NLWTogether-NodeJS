# NLW Valoriza

## Regras

- Cadastro de usuário:
  [x] Não é permitido cadastrar mais de um usuário com o mesmo e-mail.  
  [x] Não é permitido cadastrar usuário sem e-mail.


- Cadastro de TAG:
  [x] Não é permitido cadastrar mais de uma tag com o mesmo nome.
  [x] Não é permitido cadastrar tag sem nome.
  [x] Não é permitido o cadastro por usuários que não sejam administradores.

- Cadastro de elogios:
  [x] Não é permitido um usuário cadastrar um elogio para si mesmo.
  [x] Não é permitido cadastrar elogios para usuários inválidos.
  [x] O usuário precisa estar autenticado na aplicação.



## Fluxo da aplicação

1- Server: 
  - A aplicação irá receber uma requisição pelo server, que será enviado para o próximo bloco.

2- : 
  - Será armazenado a requisição do server e mandará para ser processado no SERVICE.

3- SERVICE: 
  - Onde será processado toda a regra, fazer as validações, verificar cadastros, etc.

4- Repositories:

5- Banco de Dados: