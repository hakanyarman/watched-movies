import Card from "./components/Card";

function App() {
  return (
    <div>
        <Card title="Fight Club" details="Dövüş Kulübü, Chuck Palahniuk tarafından yazılmış aynı isimli romandan uyarlanan kült filmdir. 1999 yapımı olan film, David Fincher tarafından yönetilmiştir ve başrollerde Brad Pitt, Edward Norton ve Helena Bonham Carter rol almıştır. Müziklerini Dust Brothers yapmıştır." 
        imgUrl="https://upload.wikimedia.org/wikipedia/tr/thumb/a/ab/D%C3%B6v%C3%BC%C5%9F_Kul%C3%BCb%C3%BC_film_afi%C5%9Fi.jpg/640px-D%C3%B6v%C3%BC%C5%9F_Kul%C3%BCb%C3%BC_film_afi%C5%9Fi.jpg" />
        <Card title="Devrim Arabaları" details="Türkye'nin çok darda geçirdigi zamanlardan birinde Devlet Baskani Cemal Gürses yerli üretim otomobil yapilmasini emreder ve derhal ise baslanir. Azmin ve birbirine inanan insanlarin neler basarabilecegini gösteren bir basari öyküsü." imgUrl="https://static.nadirkitap.com/fotograf/206735/18/Efemera_2020060619331120673513.jpg"/>
        <Card title="Amelie" details="Amélie, Audrey Tautou’nun başrolünde olduğu, Jean-Pierre Jeunet filmi. Fransız yapımı bu romantik komedi, Jeunet ve Guillaume Laurant tarafından yazılmıştır. Montmartre’de geçen film, modern Paris hayatının idealize edilmiş, alaycı bir yorumudur." imgUrl="https://tr.web.img2.acsta.net/pictures/bzp/01/27063.jpg"/>
    </div>
  );
    
}

export default App;
