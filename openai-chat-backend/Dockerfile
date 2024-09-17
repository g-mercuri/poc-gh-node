# Usa un'immagine base di Node.js
FROM node:18

# Imposta la directory di lavoro
WORKDIR /app

# Copia il file package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia il resto del codice dell'applicazione
COPY . .

# Comando per avviare l'applicazione
CMD ["node", "index.js"]