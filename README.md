<h1 align="center">PalpiteBox - Semana Fullstack Master</h1>

Este projeto foi construído durante a Semana Fullstack Master do [DevPleno](https://devpleno.com). <br /><br />Uma versão online deste projeto pode ser encontrada em: https://palpitebox.hugodamm.dev/. <br /><br />

<img width="1297" alt="Captura de Tela 2022-11-22 às 19 18 11" src="https://user-images.githubusercontent.com/38134949/203432958-40bb31c5-6ecf-461f-81d7-83138e923533.png">


## Início

Essa aplicação gera cupom de desconto pro cliente, ao preencher um formulário de pesquisa colocando alguns dados pessoais como Nome, E-mail, número do WhatsApp e a Nota do Estabelecimento, quando confirma o envio dos dados o cupom é gerado e terá um desconto na próxima compra.
A aplicação conta com integração à uma Planilha do Google, na qual o dono do estabelecimento pode definir as configurações do cupom de desconto, além de ter a listagem completa dos clientes e suas avaliações.


### Pré-requisitos:

Você precisa do NodeJS e do NPM instalado em sua máquina.

```
npm install
npm run dev
```

## Layout:

Criamos o layout utilizando o Figma. Você pode encontrar o arquivo [aqui](https://www.figma.com/file/HxvAYhS6l7UDI49u8uLdaC/palpite-box?node-id=0%3A1).

## Colocando em produção:

Este projeto pode ser colocado em produção utilizando o Vercel. É necessário criar as variáveis de ambiente para configurar o acesso as planilhas do Google:

```
SHEET_CLIENT_EMAIL = client email do service credential
SHEET_PRIVATE_KEY = private key do service credential - lembrar de substituir \n por quebras de linha e de codificar em base 64
SHEET_DOC_ID = id da planilha
```

## Construído com:

* [NextJS](https://nextjs.org/) - The React Framework.
* [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for
rapidly building custom designs.
* [Figma](https://figma.com/) - Online prototyping tool.
* [Google Sheets](https://drive.google.com) - Planilhas online do Google

## Author:

* **Hugo Damm** - [LinkedIn](https://www.linkedin.com/in/hugo-damm-82522928/)


## Licença

Este projeto é licenciado sobre a licença MIT - veja [LICENSE.md](LICENSE.md) para mais informações.

## Acknowledgments

* Este projeto foi construído durante a Semana Fullstack Master do [DevPleno](https://devpleno.com).
