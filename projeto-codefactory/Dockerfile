# Imagem base leve com Node.js
FROM node:20-alpine

# Diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos de dependências primeiro (aproveita cache do Docker)
COPY app/package.json ./

RUN npm install

# Copia o restante do código da aplicação
COPY app/ .

# Porta exposta pela aplicação
EXPOSE 3000

# Comando executado quando o container sobe
CMD ["npm", "start"]
