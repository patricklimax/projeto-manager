# Gerenciador de Status dos Projetos na Vercel

Este é um projeto em **Next.js** desenvolvido em **TypeScript** que utiliza a API da **Vercel** para buscar o status dos projetos na conta do usuário, mostrando se cada projeto está **online** ou **offline** com base no último deployment.

## Funcionalidades

- Listar todos os projetos associados à conta Vercel. <br>
- Exibir o nome do projeto e o estado atual (Estados de readyState):

-> INITIALIZING: O deployment foi iniciado e está em processo de configuração. <br>
-> BUILDING: O deployment está em processo de build. Esse é o estado enquanto a aplicação está sendo construída e as dependências estão sendo instaladas.<br>
-> READY: O deployment foi concluído com sucesso e está ativo. O projeto está disponível online e acessível no domínio associado. <br>
-> ERROR: Ocorreu um erro durante o processo de deployment. Isso geralmente indica que o build falhou ou que houve algum problema ao implantar o projeto. <br>
-> QUEUED: O deployment está em uma fila e aguardando para ser processado. Isso ocorre em ambientes com alto tráfego ou em contas que têm limites de paralelismo.<br>

- Atualização automática do status ao abrir o aplicativo.<br>

## Tecnologias Utilizadas

- **Next.js** com App Router<br>
- **React** e **TypeScript**<br>
- **Axios** para fazer requisições HTTP<br>
- **Vercel API** para obter dados dos projetos e status dos deployments<br>

## Pré-requisitos

- Conta na [Vercel](https://vercel.com/).
- **VERCEL_TOKEN** com permissões de leitura para `Projects` e `Deployments`.

## Configuração

1. **Clonar o Repositório**

   ```bash
   git clone https://github.com/seu-usuario/gerenciador-status-vercel.git
   cd gerenciador-status-vercel

   ```

2. **Instalar Dependências**

   ```bash
   npm install
   ```

3. **Configurar o Token de Acesso**
   Crie um arquivo .env.local na raiz do projeto com o seguinte conteúdo: <br>

   ```bash
   NEXT_PUBLIC_VERCEL_TOKEN=seu_vercel_token
   ```

4. **Iniciar o Projeto**

   ```bash
   npm run dev
   ```

## Estrutura do Código

. /components/ProjectList.tsx: Componente principal que faz a chamada à API da Vercel e exibe os projetos com nome e status.<br>
. /pages/api/projects.ts: Função de API no Next.js para consultar a Vercel e retornar os dados necessários.<br>

. Exemplo de Resposta<br>
A aplicação exibe uma lista de projetos com o seguinte formato:<br>

    ```bash
    Projeto: MeuProjeto
    ID: abc123
    Status: INITIALIZING | BUILDING | READY | ERROR | QUEUED
    ```

## Observações

Este projeto é apenas para monitorar o status dos projetos na Vercel e não inclui funcionalidades de criação, edição ou exclusão de deployments.

## Licença

Este projeto é licenciado sob a licença MIT.
