# CodeFactory Solutions — Projeto de Transformação DevOps

## Descrição do projeto
Este repositório contém a proposta prática de adoção da Cultura DevOps para a empresa
fictícia **CodeFactory Solutions**, desenvolvida como consultoria pela equipe abaixo, no
contexto da disciplina de DevOps e Integração Contínua.

O projeto demonstra, na prática, como versionamento com Git/GitHub, containerização com
Docker e um pipeline de Integração Contínua podem resolver problemas reais de organização,
colaboração e confiabilidade no fluxo de desenvolvimento de software.

## Equipe
- Ricardo Bergoli dos Santos — RU 5230778
- Joao Victor Souza Oliveira — RU 5151035

## Objetivo
Padronizar o fluxo de trabalho da equipe de desenvolvimento, reduzindo atrasos, erros pós-
atualização e o tempo de configuração de ambiente de novos colaboradores, através de
práticas de DevOps.

## Tecnologias utilizadas
- Git / GitHub (versionamento e colaboração)
- Docker / Docker Compose (containerização)
- GitHub Actions (Integração Contínua)
- <!-- adicione aqui a stack da aplicação escolhida, ex: Node.js, Python/Flask, etc. -->

## Estrutura de pastas
```
.
├── .github/
│   └── workflows/
│       └── ci.yml          # pipeline de Integração Contínua
├── app/                     # código-fonte da aplicação
├── docs/                    # documentação complementar (opcional, além da Wiki)
├── Dockerfile
├── docker-compose.yml
├── .gitignore
├── LICENSE
└── README.md
```

## Instruções de instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/<usuario>/<repositorio>.git
   cd <repositorio>
   ```
2. Certifique-se de ter o Docker e o Docker Compose instalados.

## Instruções de execução
```bash
docker compose up --build
```
A aplicação ficará disponível em `http://localhost:PORTA` (ajuste conforme a aplicação).

Para parar os containers:
```bash
docker compose down
```

## Por que utilizamos containers neste projeto?
A containerização garante que todos os desenvolvedores da CodeFactory Solutions rodem a
aplicação no mesmo ambiente, eliminando o problema de "na minha máquina funciona" e
reduzindo drasticamente o tempo de configuração de ambiente para novos colaboradores —
um dos problemas relatados pela empresa.

## Integração Contínua
O pipeline definido em `.github/workflows/ci.yml` é executado automaticamente a cada push
ou pull request, automatizando etapas como instalação de dependências, build e testes,
garantindo maior confiabilidade nas entregas.

## Licença
Este projeto está sob a licença MIT — veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
