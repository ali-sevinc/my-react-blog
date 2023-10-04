---
title: "ReactJS'e İlk Bakış"
slug: "react-ilk-bakis"
date: "2023-2-1"
image: "react-ilk-bakis.png"
excerpt: "ReactJS, Facebook tarafından geliştirilen ve kullanıcı arayüzleri (UI) oluşturmak için kullanılan açık kaynaklı bir JavaScript kütüphanesidir. React, web uygulamaları geliştirmek için özellikle kullanıcı arayüzünün bileşen tabanlı ve etkileşimli (Reaktif) bir şekilde oluşturulmasına odaklanır."
isFeatured: true
---

## ReactJS nedir ve nasıl kurulur

### React'in temel özellikleri ve kavramları:

- **Bileşen Tabanlı Yapı(Components):** React, kullanıcı arayüzünü küçük ve yeniden kullanılabilir bileşenlere böler. Her bileşen, kendi mantığı, görünümü ve davranışıyla birlikte gelir. Bu, kodun daha düzenli ve bakımı daha kolay olmasını sağlar.
- **Sanal DOM (Virtual DOM):** React, değişiklikleri tespit etmek ve uygulamayı hızlı bir şekilde güncellemek için Sanal DOM kullanır. Bu, performansı artırır çünkü tüm sayfanın yeniden çizilmesine gerek kalmaz, yalnızca değişen bileşenler güncellenir.
- **JSX (JavaScript XML):** React, JSX adı verilen özel bir söz dizimi kullanır. JSX, JavaScript ile HTML benzeri bir dilin birleşimi olarak düşünülebilir ve React bileşenlerini tanımlamak için kullanılır.
- **Durum (State) Yönetimi:** React uygulamalarında bileşenlerin durumu (state) yönetilebilir. Böylece kullanıcı etkileşimleri ve veri değişiklikleri gibi dinamik işlemler kolayca kontrol edilebilir.
- **Tek Yönlü Veri Akışı (One-Way Data Binding):** React, verilerin akışını tek yönlü tutar. Bileşenler, üstten alta doğru veri aktarımını destekler, bu da veri akışının daha tahmin edilebilir ve hata ayıklanabilir olmasını sağlar.
- **Açık Kaynak ve Topluluk Desteği:** React, açık kaynak bir projedir ve geniş bir geliştirici topluluğu tarafından desteklenir. Bu nedenle, React ile ilgili birçok ücretsiz kaynak, kütüphane ve eklenti bulunmaktadır.

  React, özellikle web ve mobil uygulamaların geliştirilmesi için popüler bir tercih haline gelmiştir. React Native gibi projelerle birlikte, React uygulamaları farklı platformlarda çalıştırılabilir ve aynı kod tabanıyla birden çok platforma yayılabilir.

### Nasıl Başlarım

**Kurulum**

ReactJS'i kullanabilmenin çeşitli yöntemleri vardır, isterseniz web üzerinden isterseniz de kendi makinanız üzerinden ReactJS'i kolaylıkla kullanabilirsiniz.

**Web Üzerinde**

Web tarayıcınızda kullanabileceğiniz condesandbox web uygulaması ile yerel bilgisayarınıza her hangi birşey yüklemeden Reacti kullanmaya başlayabilirsiniz. Codesandbox'da yeni bir proje oluşturmak için tarayıcınıza **["react.new"](https://react.new/)** yazmanız yeterlidir. Yeni başlayanlar için çokça tercih edilen bir web uygulamasıdır. Ayrıca tıpkı kendi makinanızda olduğu gibi 3. taraf kütüphaneleri de ekleyerek projenizi daha da gerçek dünyaya uygun hale getirebilirsiniz.

[**Create React App**](https://create-react-app.dev/)

Her ne kadar codesanbox olduça etkili bir web uygulaması olsa da gerçek dünyaya uygun uygulama yapabilmemiz pek mümkün değildir. Bu nedenle uygulamalarımızı yerel makinamıza kurmamız gereklidir. Bunun en bilindik yöntemi Create-React-App'dir. Geçmişte en çok kullanılan yöntemdi fakat günümüz de daha çok öğrenme aşamasında kullanılır. Uygulamayı bilgisayarımıza kurmak için Terminal kısmına

**-npx create-react-app my-project**

komutu yazılır. Artık elimizde kullanıma hazır ReactJS kütüphanesi vardır. Kütüphaneyi kullanmak için en uygun yazma aracı [Visiul Stuido Code](https://code.visualstudio.com/) uygulamasıdır. Uygulamayı kurduktan sonra oluşturduğumuz "my-project" adlı klasörü sürükleyip, Visual Studio'nun üzerine bırakarak çalıştırırız. Daha sonra Visual Stuido nun içerisine gömülü olan terminali açarak içerisine

**-npm start**

komutunu yazıp React uygulamamızı başlatabiliriz.

[**Vite**](https://vitejs.dev/)

Vite ise React için özel olarak yapılandırılmamış olsa da hızı ve güncelliği sayesinde günümüzde React'i kullanmak için en iyi araçtır. Fazladan bir kaç ayar yapmak gerektiği için başlangıç seviyesinde tavsiye edilmez. Ama gerçek bir uygulama yapmak istiyorsak kesinlikle Vite'yi tercih etmelisiniz. Kurulumu için öncelikle Terminal'e ya da Visual Stuido'da gömülü olan terminal'e;

**-npm create vite@latest**

yazarak işlemi başlatıyoruz. Başlatılan işlem öncelikle bizden uygulamamızın adını ister. Adı girdikten sonra açılan bir dialog bölümünde yukarı/aşağı yön tuşlarını kullanarak React kütüphanesinin eklenmesini sağlarız.

sonrasında

**-cd my-project**

yazarak klasörün içine geçeriz ve

**-npm install**

yazarak gerekli dosyaların yüklenmesini sağlarız.

Yükleme bittikten sonra

**-npm run dev**

komutunu yazarak React uygulamamızı başlatırız.
