### Sisällysluettelo
[Käyttöönotto](#Käyttöönotto)

[Lyhyt kuvaus](#Lyhyt-Kuvaus)

[Käytetty teknologia](#Käytetty-teknologia)

[Omat mietteet](#Omat-mietteet)

## Käyttöönotto

Projektin juureen on luotu kaksi eri kansiota: assingmen_app ja assingment_backend. Toinen kansio sisältää sovelluksen backendin ja toinen frontendin. Jotta sovellus ja sen kaikki ominaisuudet toimisivat odotetusti, on tärkeää, että molemmat kansiot ns. juoksevat samanaikaisesti.
Tämä onnistuu avaaamalla kummallekin sovelluksen osalle oma terminaali.  

### Frontendin ajaminen
```node
cd assingment_app
npm install
npm run dev
```

### Backendin ajaminen
```node
cd assingment_backend
npm install
npm run dev
```

### Mistä sovelluksen löytää?

Oletuksena, sovelluksen frontend avautuu osoitteeseen http://localhost:5173/kellokortti/tyoaika ja backend http://localhost:3001. Sovellusta voi myös testata puhelimella, mutta tämän saavuttamiseen 
täytyy tehdä koodiin hieman muutoksia. 

#### 1 askel

Varmista, että puhelimesi ja tietokoneesi käyttävät samaa netti yhetyttä. 

#### 2 askel

Navigoi projektissa 

Kommentoi rivi 4 pois ja poista kommenti merkinnät pois 5 riviltä. Korvaa {ip} omalla ip osoitteellasi. 

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

Sovellus on yksinkertainen kellokortti sovellus. Käyttäjä voi sovelluksen avulla käynnistää ja lopettaa kellokortin (eli työpäivän), kirjautua työmaalle ja poistua sieltä, 
tauottaa kellokortin ja tarkastella kuukauden työpäivien yhteenvetoa. 

Käydään vielä lyhyesti sovelluksen eri näkymien toiminnallisuudet. 

### Kellokortti/tyoaika

Sivulla löytyy ensinnäkin kalenteri, joka ilmoitta käyttäjälle, mikä päivä, viikko ja kuukausi on kyseessä. Kalenteri toimii ja sitä voi selata eteenpäin ja taaksepäin. Päivämäärä ei voi
kuitenkaan vaihtaa. 

Tällä sivulla käyttäjä voi aloittaa työpäivän, jolloin sovellus luo uuden ns. juoksevan kellokortin. Näkymään ilmestyy toinen kortti, jossa käyttäjälle kerrotaan
kuinka paljon aikaa on kulunut työpäivän aloituksesta. Ns. työkortissa on myös kaksi toiminnallisuutta: käyttäjä voi tautottaa sitä tai päättää työpäivän. Luonnollisesti 
tauotus pysäyttää työajan, kunnes käyttäjää "jatkaa" työpäivää. Työpäivän päättämis - toiminnallisuus avaa käyttäjälle yhteenveto sivun, jossa käyttäjä voi tarkastella ja muokata työpäivän tietoja, ennen työpäivän hyväksymistä.

Sivulla käyttäjä voi myös kirjautua työmaalle. Ominaisuus on pelkistetty versio siitä, mitä se voisi olla. Kirjaudu työmaalle - painike avaa komponentin, jossa käyttäjä voi valita
aktiivisten työmaiden listata juuri sen, millä hän työskentelee sinä päivänä. Ominaiuus sitten merkkaa kellokortiin työmaan, jonka käyttäjä valitsi. 

### Kellokortti/yhteenveto

Yhteenveto sivulla on kuukausi kalenteri, jonka avulla käyttäjä voi valita, minkä kuukauden yhteenvetoa hän haluaa tarkastella. 

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
Mielestäni onnistuin luomaan ratkaisun, joka on logiikaltaan kevut ja käyttäjäystävällinen. 
Pidän erityisesti sitä, että ajastin näkyy kellokortti-sivun oikeassa yläkulmassa, vaikka käyttäjä olisi tarkastelemassa yhteenvetosivua.

Lisäksi pidän siitä, kuinka ajastimen tila näkyy selkeästi: kun ajastin on käynnissä, navigaatiomenun kellokortti-napissa ja kellokortti-sivun 
ylälaidassa on vihreä ympyrä, joka symboloi ajastimen aktiivisuutta. Kun taas ajastin on tauotettu, ympyrä muuttuu punaiseksi.

Näistä syistä koen, että olen erityisesti onnistunut ajastimen toteutuksessa.  Mielestäni sain kehitettyä siihen oikein näppärän ratkaisun. 
