# Teste Técnico - Desenvolvimento Front-End

## Descrição

Bem-vindo(a) ao teste de Desenvolvimento Front-End da ICTS! O objetivo deste exercício é testar seus conhecimentos em criação de formulários com validação, usando bibliotecas como Material-UI ou Bootstrap e Yup para validação de dados. Siga as instruções abaixo para montar o formulário conforme solicitado.

## Instruções

### 1. Requisitos do Formulário

Você deve criar um formulário de captura de dados pessoais com os seguintes campos:

- **Título:** Dados pessoais
- **Campos:**
  - Nome completo
  - Data de nascimento (usar um componente de seleção de data, como um datepicker)
  - Documento (RG ou CPF)
  - Telefone
  - E-mail
  - Nome do pai
  - Nome da mãe
  - Endereço completo (que contemple número, complemento, bairro, cidade e estado)
- **Botões:**
  - **Enviar**: Não precisa implementar a funcionalidade de envio, apenas crie o botão.
  - **Cancelar**: Apenas crie o botão, sem funcionalidades específicas.

### 2. Validações

Implemente validações para os seguintes campos utilizando **Yup**:

- **Nome completo**: Não pode conter números.
- **Telefone**: Somente números.
- **E-mail**: Deve ser validado com o formato correto (ex.: usuario@dominio.com).
- **Data de nascimento**: A data deve ser válida (ex.: não permitir datas como 30/02/2020).

### 3. Tecnologia

- **Biblioteca de UI**: Use **Material-UI** ou **Bootstrap** para o design do formulário.
- **Validação de Formulário**: Use **Yup** para validação dos campos.
- **React**: O formulário deve ser implementado em **React**.

### 4. Estrutura do Projeto

O projeto deve ser organizado da seguinte forma:

- **src/**
  - **components/**: Contém os componentes do formulário.
  - **utils/**: Funções auxiliares ou configurações.
  - **App.js**: Arquivo principal onde o formulário será renderizado.
  - **index.js**: Ponto de entrada da aplicação.

### 5. Passos para rodar o projeto

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   cd <diretorio-do-repositorio>
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o projeto:

   ```bash
   npm start
   ```

4. Acesse a aplicação no seu navegador:
   ```bash
   http://localhost:3000
   ```

### 6. Como submeter

Envie o código-fonte do projeto para o repositório indicado, ou, caso solicitado, envie um arquivo compactado com o código. O código deve ser compilado e executado remotamente.

## Observações

- Não se preocupe com a implementação da funcionalidade de envio de dados, apenas crie o layout e validações.
- Use sua criatividade para melhorar a experiência do usuário com o formulário.
- Organize seu código de maneira limpa e modular.
