# Instalando e Configurando o material UI

- https://mui.com

- yarn add @mui/material @emotion/react @emotion/styled

- yarn add @fontsource/roboto

- yarn add @mui/icons-material

# Crinado primeiros componentes reutilizáveis

- src/App.tsx
- definir o tema da aplicação e o provider
- div inicial que vai receber o tema e definir o tamanho da aplicação
    - box 
- components/Header.tsx
    - rcf (react created funtional components)
    - mui App bar
- components/Layout.tsx
    - rcf (react created funtional components)

#Criando tema e adicionand rotas

- yarn add react-router-dom@next

# Criando Slice Inicial de Categoria

- slide é a represetação de estado de uma entidade
- store = local principal onde os dados são armazenados dentro do redux
- posso também exportar pedaços do estados chamados de seleters
- adicionar o categoriesSlice dentro de store.ts
- RootState é o estado geral da minha Store inferida na criação da Store
- MUI X Data Grid
    - yarn add @mui/x-data-grid
    - yarn add @types/react-data-grid

# Adicionando notistack para notificações

- https://notistack.com/
- yarn add notistack
- em App.tsx, importar enqueueSnackbar
- em EditCategory.tsx, importar useSnackbar