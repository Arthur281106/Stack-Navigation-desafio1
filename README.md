# Estrutura do Projeto

O projeto foi organizado utilizando a pasta `src` para separar melhor os arquivos da aplicação.

Dentro da pasta `src` existem duas pastas principais:

- `Telas`
- `styleSheet`

## Pasta Telas

Na pasta `Telas` estão localizadas todas as telas do aplicativo:

- `Principal.js`
- `Terra.js`
- `Venus.js`
- `Mercurio.js`
- `Jupiter.js`
- `Marte.js`

Cada arquivo representa uma tela diferente do projeto React Native utilizando Stack Navigation.

## Pasta styleSheet

Na pasta `styleSheet` ficam os arquivos responsáveis pelos estilos da aplicação.

Os arquivos `.js` dessa pasta armazenam os estilos criados com `StyleSheet.create()`, deixando o código mais organizado e facilitando a manutenção do projeto.

## Organização Final

src/
│
├── Telas/
│ ├── Principal.js
│ ├── Terra.js
│ ├── Venus.js
│ ├── Mercurio.js
│ ├── Jupiter.js
│ └── Marte.js
│
└── styleSheet/
└── estilos.js
