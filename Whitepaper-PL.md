# Whitepaper: **Xmas_NFT_4you** 🎅🎁🌲

---

## **1. Wprowadzenie**

**Xmas_NFT_4you** to kolekcja limitowanych edukacyjnych tokenów NFT (Non-Fungible Tokens) na blockchainie **PulseChain**, stworzona z myślą o świątecznej atmosferze i edukacji na temat technologii blockchain. 
Każdy token w kolekcji jest identyczny, a jego zawartość to interaktywna animacja. Nasz projekt ma na celu rozpowszechnianie radości i ducha Bożego Narodzenia w świecie cyfrowym, łącząc magię świątecznego okresu z innowacją technologii blockchain.


### **1.1. Czym jest Xmas NFT 4you?**

Xmas NFT 4you to limitowana edycja cyfrowych kolekcjonerskich edukacyjnych przedmiotów, z których każdy uosabia esencję Świąt Bożego Narodzenia. 
Te NFT prezentują dynamiczną, interaktywną i wizualnie atrakcyjną sztukę cyfrową, co czyni je idealnymi na celebrowanie świąt lub jako unikatowy cyfrowy prezent.

- **Unikatowa Sztuka**: Każdy NFT zawiera ciekawe świąteczne dzieło sztuki, zapewniając ekskluzywność i kolekcjonerską wartość.
- **Interaktywne Doświadczenie**: Nasze NFT oferują interaktywne elementy, w tym muzykę i animacje, co wzbogaca świąteczne doświadczenie.
- **Społeczność**: Dołącz do żywej społeczności kolekcjonerów i miłośników świąt. 
- **Technologia Blockchain**: Wykorzystanie blockchainu PulseChain zapewnia bezpieczeństwo, przejrzystość i niezmienność Twoich NFT.

---

## **2. Cel projektu**

- **Edukacja**: Kolekcja ma na celu przybliżenie użytkownikom technologii NFT oraz blockchainu PulseChain w przystępny i zabawowy sposób.
- **Świąteczna atmosfera**: Każdy token to interaktywna karta świąteczna, która może być wysłana jako prezent dla rodziny i znajomych.
- **Kolekcjonerstwo**: Limitowana liczba tokenów (12 000) sprawia, że każdy NFT jest opatrzony unikalnym numerem ID.

### **2.1. Kluczowe Funkcje**
- **Maksymalna Podaż**: Kolekcja jest ograniczona do 12 000 NFT, co zapewnia rzadkość i wartość.
- **Opłata za Mintowanie**: Wymagana jest bezpłate. 
- **Limit na Adres**: Dla zapewnienia sprawiedliwej dystrybucji, każdy adres może mintować maksymalnie 12 NFT.
- **Tantiemy**: Na wszystkie wtórne sprzedaże nakładana jest tantiema w wysokości 3%, wspierająca twórców i rozwój społeczności.
- **Elementy Interaktywne**: Każdy NFT zawiera zarówno animowany obraz SVG, jak i interaktywną wersję HTML, zapewniając bogate i angażujące doświadczenie.

---

## **3. Technologia**

### **3.1. Blockchain**
- **PulseChain**: Kolekcja jest oparta na blockchainie PulseChain, który oferuje niskie opłaty transakcyjne i ekologiczne rozwiązania.
- **Standard ERC-721**: Tokeny są zgodne ze standardem ERC-721, co zapewnia ich unikalność i możliwość wymianę na rynkach NFT.

### **3.2. Metadane i zawartość**
- **Interaktywna animacja**: Każdy token zawiera animację HTML, która wyświetla się jako `animation_url` w metadanych.
- **Obraz SVG**: Każdy token ma również statyczny obraz SVG, który jest wyświetlany jako `image` w metadanych.
- **Muzyka**: Animacja zawiera interaktywny odtwarzacz muzyki, który uruchamia się po kliknięciu.

### **3.3. Royalties**
- **Autorskie tantiemy**: Twórca kolekcji otrzymuje 3% od każdej kolejnej sprzedaż tokenu (royalties).

---

## **4. Funkcjonalności kontraktu**

### **4.1. Minting**
- **Limitowana podaż**: Maksymalna liczba tokenów to **12 000**.
- **Ograniczenie per adres**: Każdy adres może wymintować maksymalnie **12 tokenów**.
- **Opłata za minting**: Aktualna opłata za minting to **0 PLS** (może być zmieniona przez właściciela kontraktu).

### **4.2. Metadane**
- **Nazwa**: `X-mas NFT 4you | <tokenId>`
- **Opis**: `X-mas NFT 4you - PulseChain Rulez :)`
- **Atrybuty**: `Ho Ho Ho my friend ツ`
- **Obraz**: Statyczny obraz SVG zakodowany w Base64.
- **Animacja**: Interaktywna animacja HTML zakodowana w Base64.

### **4.3. Funkcje właściciela**
- **Aktywacja sprzedaży**: Właściciel może włączyć/wyłączyć możliwość mintowania za pomocą funkcji `setSaleStatus`.
- **Ustawienie opłaty za minting**: Właściciel może zmienić opłatę za minting za pomocą funkcji `setMintFee`.
- **Ustawienie autora**: Właściciel może ustawić adres autora, który otrzymuje tantiemy.

### **4.4. Royalties**
- **3% tantiem**: Od każdej kolejnej sprzedaży tokenu, 3% wartości trafia do autora.

---

## **5. Interaktywna zawartość**

### **5.1. Animacja HTML**
- **Świąteczna atmosfera**: Animacja zawiera śnieżynki, wirujące linie i świąteczne ikony (np. choinka, prezent, nuty).
- **Muzyka**: Użytkownik może kliknąć na animację, aby uruchomić świąteczną muzykę.
- **Interaktywność**: Animacja reaguje na kliknięcia i zmienia się w czasie.

### **5.2. Obraz SVG**
- **Gradientowy tło**: Obraz ma gradientowe tło, które zmienia kolory.
- **Świąteczne ikony**: Obraz zawiera ikony związane ze świętami (np. choinka, prezent).
- **Tekst**: Obraz zawiera tekst "X-mas 4 you" oraz "Ho Ho Ho my friend".

---

## **6. Bezpieczeństwo**

### **6.1. Ograniczenia mintingu**
- **Limit podaży**: Kontrakt zapobiega mintowaniu ponad 12 000 tokenów.
- **Limit per adres**: Każdy adres może wymintować maksymalnie 12 tokenów.

### **6.2. Royalties**
- **Automatyczne tantiemy**: 3% od każdej sprzedaży jest automatycznie przekazywane do autora.

### **6.3. Kontrola właściciela**
- **Tylko właściciel**: Funkcje takie jak `setSaleStatus` i `setMintFee` są dostępne tylko dla właściciela kontraktu.

---

## **7. Jak korzystać?**

### **7.1. Mintowanie tokenów**
1. Połącz się z kontraktem za pomocą portfela (np. MetaMask) na blockchainie PulseChain.
2. Upewnij się, że sprzedaż jest aktywna (`saleIsActive = true`).
3. Wyślij transakcję z opłatą za minting (`mintFee`).
4. Po pomyślnym mintowaniu, token zostanie przypisany do Twojego adresu.

### **7.2. Wyświetlanie tokenów**
1. Tokeny można wyświetlić w portfelu obsługującym NFT (np. MetaMask).
2. Kliknij na token, aby zobaczyć jego metadane i interaktywną animację.

### **7.3. Sprzedaż tokenów**
1. Tokeny można sprzedawać na rynkach NFT obsługujących PulseChain.
2. Pamiętaj, że 3% wartości sprzedaży trafi do autora jako tantiemy.

---

## ** 8. Mapa Drogowa**

- **Q1 2025**: Uruchomienie kolekcji Xmas NFT 4you, w tym strony internetowej do mintowania.
- **Q3 2025**: Rozwój dodatkowej użyteczności dla posiadaczy NFT, takiej jak wyłączny dostęp do przyszłych dropów, wydarzeń wirtualnych i więcej.
- **Q4 2025**: Ekspansja uniwersum Xmas NFT 4you, z nowymi kolekcjami i partnerstwami mającymi na celu wzbogacenie ekosystemu.


## **9. Podsumowanie**

**Xmas_NFT_4you** to wyjątkowa kolekcja NFT, która łączy w sobie świąteczną atmosferę, interaktywną sztukę cyfrową i edukację na temat blockchainu. 
Dzięki limitowanej podaży i unikalnej zawartości, każdy token jest wartościowym przedmiotem kolekcjonerskim. Zapraszamy do dołączenia do naszej społeczności i wspólnego świętowania!

---

## **10. Zakończenie**

Xmas NFT 4you to więcej niż tylko kolekcja sztuki cyfrowej; to celebracja świątecznego ducha w erze blockchain. Posiadając część tej kolekcji, nie tylko nabywasz unikatowy NFT, ale także dołączasz do rosnącej społeczności miłośników Świętego Mikolaja i pionierów blockchain.

Dołącz do nas w rozpowszechnianiu radości i innowacji w tym świątecznym sezonie z Xmas NFT 4you!

## Zastrzeżenie

Informacje zawarte w tej białej księdze mają charakter wyłącznie informacyjny i nie powinny być traktowane jako porada finansowa lub inwestycyjna. 
Kryptowaluty i NFT podlegają wysokiej zmienności rynkowej i ryzyku. Prosimy o przeprowadzenie własnych badań i skonsultowanie się z doradcą finansowym przed podjęciem jakichkolwiek decyzji inwestycyjnych.

---

Ta biała księga przedstawia kompleksowy przegląd projektu Xmas NFT 4you, jego funkcji i wizji. Więcej informacji znajdziesz na naszej oficjalnej stronie internetowej lub dołączając do naszych kanałów społecznościowych. 
Wesołych świąt i udanego kolekcjonowania!



### **Linki**
- **Kontrakt**: [0x9DF4d4eC50132C53D5e4928F2688af26068fa096](https://scan.mypinata.cloud/ipfs/bafybeih3olry3is4e4lzm7rus5l3h6zrphcal5a7ayfkhzm5oivjro2cp4/#/token/0x9DF4d4eC50132C53D5e4928F2688af26068fa096)
- **Strona projektu**: [https://xmas-nft-4you.vercel.app/](#)
- **Telegram**: [@XmasNFT4you](#)
- **Twitter**: [@XmasNFT4you](#)

---


**© 2023 Xmas_NFT_4you Team ツ**
