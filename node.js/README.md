
## Express.js Kütüphanesinin Kullanımı:

<!-- const express = require('express');
const app = express(); -->
Bu kısımda, express modülünü projeye dahil ediyoruz ve bu modülü kullanarak bir Express uygulaması oluşturuyoruz. Express, Node.js tabanlı web uygulamaları oluşturmak için kullanılan yaygın bir web çatısıdır.

## Middleware Kullanımı:
<!-- app.use(express.json()); -->
app.use() fonksiyonu,
 Express uygulamasına middleware eklemek için kullanılır. Burada, express.json() middleware'i kullanıyoruz. Bu middleware, gelen isteklerdeki JSON verilerini ayrıştırmak için kullanılır. Yani, istemci tarafından gönderilen JSON verilerini alabilmemizi sağlar.

## Rotaların Tanımlanması(route):
<!-- const booksRouter = require('./routes/books');
app.use('/api/books', booksRouter); -->
Bu kısımda, routes/books dosyasından gelen rotaları tanımlıyoruz. require('./routes/books') ile books rotalarının bulunduğu dosyayı projeye dahil ediyoruz. Sonra, bu rotaları /api/books yoluna bağlıyoruz. Yani, /api/books yolundaki istekler booksRouter üzerinden yönlendirilecek.
## Sunucunun Başlatılması:
<!-- const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); -->
Burada, process.env.PORT değişkenine atanan port numarasını alıyoruz. Eğer bu değişken tanımlı değilse, varsayılan olarak 3000 portunu kullanıyoruz. Sonra, app.listen() fonksiyonuyla belirlenen porta HTTP isteklerini dinlemeye başlıyoruz. Başlatıldığında, konsola "Server is running on port 3000" gibi bir mesaj yazdırıyoruz.

Bu kod bloğu, bir Express uygulamasını başlatmak için temel bir yapı sunar. Middleware kullanımı, route tanımlaması ve sunucu başlatma gibi temel Express kavramlarını içerir. Bu sayede, uygulamanın çalıştığı port üzerinden gelen istekleri işleyebilir ve gerekli yönlendirmeleri yapabilirsiniz.

### Sequelize
npm install sequelize mysql2
npm install -g sequelize-cli
## Express.js ve Sequelize
npm install express sequelize mysql2
