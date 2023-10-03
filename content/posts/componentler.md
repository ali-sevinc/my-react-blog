---
title: "ReactJS Componentleri"
slug: "componentler"
date: "2023-3-2"
image: "componentler.png"
excerpt: "React Componentleri(bileşenleri), React uygulamalarını oluştururken kullanılan temel yapı taşlarıdır ve kullanıcı arayüzünü oluşturmanıza yardımcı olan bağımsız, yeniden kullanılabilir ve özelleştirilebilir yapılardır."
isFeatured: false
---

## React bileşeni (component) nedir?

**React Bileşeni Nedir?**
React bileşeni, kullanıcı arayüzünü oluşturmanın temel birimidir. Her bileşen, kendi mantığına ve görüntüsüne sahiptir. React uygulamaları bileşenlerin hiyerarşik bir yapıda bir araya getirilmesiyle oluşturulur.

```JavaScript
/* İlk React Componentimiz. */
function Logo() {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
      alt="ReactJS"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing Logos</h1>
      {/*Componentimizi tekrar tekrar kullanabiliyoruz.*/}
      <Logo />
      <Logo />
      <Logo />
    </section>
  );
}
```

![İlk Component](snippet-çıktısı.png)

Bileşen Türleri
React bileşenleri iki ana türe ayrılabilir: Sınıf Bileşenleri (Class Components) ve Fonksiyon Bileşenleri (Function Components). Sınıf bileşenleri genellikle yaşam döngüsü yönetimi gibi daha gelişmiş özelliklere ihtiyaç duyan bileşenler için kullanılırken, fonksiyon bileşenleri daha basit bileşenler için tercih edilir.

Props (Özellikler)
Bileşenler, ebeveyn bileşenlerinden aldıkları özellikleri (props) kullanarak çalışır. Özellikler, bir bileşene veri iletilmesini sağlar ve bileşenin davranışını veya görünümünü özelleştirmek için kullanılır.

**State (Durum)**
Bazı bileşenler, iç durum (state) kullanarak bileşenin içindeki verileri tutarlar. Durum, bir bileşenin etkileşimli olmasını ve verilerin zaman içinde güncellenmesini sağlar.

**Hayat Döngüsü Yönetimi (Class Components için)**
Sınıf bileşenleri, React uygulamalarında bileşenin oluşturulması, güncellenmesi ve yok edilmesi gibi dört temel hayat döngüsü yöntemini içerir: componentDidMount, componentDidUpdate, componentWillUnmount vb. Bu yöntemler, bileşenin farklı aşamalarında kod çalıştırmak için kullanılır.

Render Metodu
Bileşenler, kullanıcı arayüzünü oluşturan JSX (JavaScript XML) kodunu içeren render metodunu içerir. Bu metod, bileşenin görünümünü oluşturur ve her zaman çağrılır.

Özelleştirilebilirlik ve Yeniden Kullanılabilirlik
React bileşenleri, özelleştirilebilir ve yeniden kullanılabilir yapılar oluşturmanıza olanak tanır. Bu, farklı bileşenleri bir araya getirerek karmaşık kullanıcı arayüzlerini oluşturmanızı kolaylaştırır.

UI ve İş Mantığı Ayırma
React bileşenleri, kullanıcı arayüzü (UI) ve iş mantığı (logic) arasında net bir ayrım sağlar. Bu, kodun daha okunabilir, bakımı daha kolay ve yeniden kullanılabilir olmasını sağlar.

React bileşenleri, modern web uygulamaları oluşturmanın temelini oluşturur ve React ekosistemi içinde önemli bir konuma sahiptir. Bu bileşenler, web uygulamalarınızı daha kolay geliştirmenize ve sürdürmenize yardımcı olur.

....
