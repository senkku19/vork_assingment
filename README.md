### Sisällysluettelo
[Käyttöönotto](#Käyttöönotto)

[Lyhyt kuvaus](#Lyhyt-Kuvaus)

[Käytetty teknologia](#Käytetty-teknologia)

[Omat mietteet](#Omat-mietteet)

## Käyttöönotto

Projektin juureen on luotu kaksi eri kansiota: assingmen_app ja assingment_backend. Toinen kansio sisältää sovelluksen backendin ja toinen frontendin. Jotta sovellus ja sen kaikki ominaisuudet toimisivat odotetusti, on tärkeää, että molemmat kansiot ns. juoksevat samanaikaisesti.
Tämä onnistuu avaaamalla kummallekin sovelluksen osalle oma terminaali. 

Ensin kopio repositorio tietokoneellesi ja avaa repositorion juuri haluamallasi tekstieditorilla.

### Frontendin ajaminen

1. Avaa frontendille oma terminaali-ikkuna ja siirry sen frontend-kansioon.
   
```bash
cd assingment_app
```

2. Asenna tarvittavat riippuvuudet

```node
npm install
```

3. Käynnista sovelluksen frontend

```node
npm run dev
```

### Backendin ajaminen

1. Avaa backendille uusi terminaali-ikkuna ja siirry backend-kansioon.
   
```bash
cd assingment_backend
```

2. Asenna tarvittavat riippuvuudet

```node
npm install
```

3. Käynnista sovelluksen backend

```node
npm run dev
```

### Mistä sovelluksen löytää?

Oletuksena, sovelluksen frontend avautuu osoitteeseen http://localhost:5173/kellokortti/tyoaika ja backend http://localhost:3001. Sovellusta voi myös testata puhelimella, mutta tämän saavuttamiseen 
täytyy tehdä koodiin hieman muutoksia. 

#### 1 askel

Varmista, että puhelimesi ja tietokoneesi käyttävät samaa nettiyhetyttä. 

#### 2 askel

Navigoi projektissa tiedostoon [axios.js](https://github.com/senkku19/vork_assingment/blob/main/assingment_app/src/services/axios.js). Tiedosto löytyy polulta ./assingment_app/src/services/axios.js.

Kommentoi rivi 4 pois ja poista kommentti merkinnät riviltä 5. Korvaa {ip} omalla ip osoitteellasi. 

**Esimerkki**

```javascript
    //baseURL: 'http://localhost:3001/api',
    baseURL: 'http://esimerkkiIP:3001/api',
```

#### 3 askel

Nyt käynnistä sovelluksen frontend ```npm run dev``` - komennon sijaan seuraavalla komennolla:

```node
npm run host
```

#### 4 askel

Nyt voit käyttää sovellusta puhelimellasi osoitteessa:  http://esimerkkiIP:5173/kellokortti/tyoaika


## Lyhyt kuvaus

Sovellus on yksinkertainen kellokorttisovellus. Käyttäjä voi sovelluksen avulla käynnistää ja lopettaa kellokortin (eli työpäivän), kirjautua työmaalle ja poistua sieltä, 
tauottaa kellokortin ja tarkastella kuukauden työpäivien yhteenvetoa. 

Käydään vielä lyhyesti sovelluksen eri näkymien toiminnallisuudet. 

### Kellokortti/tyoaika

Sivulla löytyy ensinnäkin kalenteri, joka ilmoitta käyttäjälle, mikä päivä, viikko ja kuukausi on kyseessä. Kalenteri toimii ja sitä voi selata edestakaisin. Päivämäärää ei voi kuitenkaan muuttaa. 

Tällä sivulla käyttäjä voi aloittaa työpäivän, jolloin sovellus luo uuden ns. juoksevan kellokortin. Näkymään ilmestyy toinen kortti, jossa käyttäjälle kerrotaan
kuinka paljon aikaa on kulunut työpäivän aloituksesta. Työkortissa on myös kaksi toiminnallisuutta: käyttäjä voi tauottaa sitä tai päättää työpäivän. Luonnollisesti 
tauotus pysäyttää työajan, kunnes käyttäjää "jatkaa" työpäivää. Työpäivän päättämis-toiminnallisuus avaa käyttäjälle yhteenvetosivun, jossa käyttäjä voi tarkastella ja muokata työpäivän tietoja, ennen työpäivän hyväksymistä.

Sivulla käyttäjä voi myös kirjautua työmaalle. Ominaisuus on pelkistetty versio siitä, mitä se voisi olla. Kirjaudu työmaalle - painike avaa komponentin, jossa käyttäjä voi valita aktiivisten työmaiden listata juuri sen, millä hän työskentelee sinä päivänä. Ominaiuus sitten merkkaa kellokortiin työmaan, jonka käyttäjä valitsi. 

### Kellokortti/yhteenveto

Yhteenvetosivulla on kuukausi kalenteri, jonka avulla käyttäjä voi valita, minkä kuukauden yhteenvetoa hän haluaa tarkastella. 

Kuukauden valittuaan käyttäjä voi mm. tarkastella kuinka paljon hän on työskennellyt yhteensä tai kuinka monta päivää 
hän on ollut sairaana. 

## Käytetty teknologia

### Frontend

Sovellus on rakennettu React.js:llä ja se on kehitetty käyttäen Vite-työkalua.

Sovelluksen ulkoasun toteutuksessa on käytetty Material-UI-kirjastoa.

Sovellus hyödyntää myös seuraavia kirjastoja:

* [Date-fns](https://date-fns.org/)

* [React hook form](https://react-hook-form.com/)

* [Axios](https://axios-http.com/docs/intro)

* [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)

### Backend

Sovelluksen backend on rakennettu käyttäen Node.js:ää ja Express:iä, ja tiedot tallennetaan MongoDB-tietokantaan.

Backend hyödyntää myös seuraavia kirjastoja: 

- [Nodemon](https://nodemon.io/)

- [Dotenv](https://www.npmjs.com/package/dotenv)

- [Cors](https://www.npmjs.com/package/cors)

- [Mongoose](https://mongoosejs.com/)


## Omat mietteet

### Missä onnistuin parhaiten?

On vaikea valita vain yksi asia, jossa olen mielestäni onnistunut parhaiten, sillä sovelluksessa on monia osa-alueita, 
joista olen ylpeä. Vaikka olen erityisen ylpeä mm. sovelluksen ulkokuoresta, en halua sanoa, että onnistuin siinä parhaiten, sillä se kuulostaa
liian helpolta vastaukselta.

Jos kuitenkin pitää valita vain yksi asia, jossa koen erityisesti onnistuneeni, se on niinkin yksinkertainen ominaisuus kuin työpäivän ajastin. 
Mielestäni onnistuin luomaan ratkaisun, joka on logiikaltaan kevyt ja käyttäjäystävällinen. 
Pidän erityisesti siitä, että ajastin näkyy kellokortti-sivun oikeassa yläkulmassa, vaikka käyttäjä olisi tarkastelemassa yhteenvetosivua.

Lisäksi pidän siitä, kuinka ajastimen tila näkyy selkeästi: kun ajastin on käynnissä, navigaatiomenun kellokortti-napissa ja kellokortti-sivun 
ylälaidassa on vihreä ympyrä, joka symboloi ajastimen aktiivisuutta. Kun taas ajastin on tauotettu, ympyrä muuttuu punaiseksi.

Näistä syistä koen, että olen erityisesti onnistunut ajastimen toteutuksessa.  Mielestäni sain kehitettyä siihen oikein näppärän ratkaisun. 
