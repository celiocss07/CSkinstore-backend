# Estágio 1: Construção
FROM node:18-alpine AS build

WORKDIR /app

# Copia o package.json e instala as dependências
COPY package*.json ./
RUN npm install

# Copia o código-fonte
COPY . .

# Gera o Prisma Client e compila o projeto
RUN npx prisma generate
RUN npm run build

# Estágio 2: Produção
FROM node:18-alpine

WORKDIR /app

# Copia as dependências instaladas do estágio de build
COPY --from=build /app/node_modules ./node_modules

# Copia a build gerada
COPY --from=build /app/dist ./dist

# Copia arquivos necessários para o Prisma Client e configurações
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/package.json ./package.json

# Variáveis de ambiente (ex: URL do MongoDB) devem ser configuradas em tempo de execução
ENV PORT 3001

# Expor a porta do servidor
EXPOSE 3001

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:prod"]
