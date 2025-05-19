# Node.js v20 tabanlı imaj
FROM node:20

# Çalışma dizini
WORKDIR /app

# package.json ve lock dosyasını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama dosyalarını kopyala
COPY . .

# Vite varsayılan olarak 5173 portunda çalışır
EXPOSE 5173

# Vite dev sunucusunu tüm ağlara aç
CMD ["npm", "run", "dev", "--", "--host"]
