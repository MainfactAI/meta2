# Meta International Website

Een professionele, meertalige website voor Meta International, een bedrijf gespecialiseerd in internationale handel en sourcingdiensten tussen China en de rest van de wereld.

## 🌐 Projectoverzicht

- **Type**: Next.js 14 applicatie met App Router
- **Talen**: Nederlands, Engels en Chinees
- **Focus**: Internationale handel, sourcing en kwaliteitscontrole

## 🚀 Functionaliteiten

- Responsief ontwerp voor alle apparaten (mobiel, tablet, desktop)
- Meertalige ondersteuning via een aangepast vertalingssysteem
- Professionele presentatie van diensten en contactgegevens
- Geoptimaliseerd voor snelheid en gebruikerservaring

## 📚 Projectstructuur

```
/src
  /app                 # Next.js App Router pagina's
    /contact           # Contactpagina
    /diensten          # Dienstenpagina's
    /klanten           # Klantenpagina
    /leveranciers      # Leverancierspagina
    /over-ons          # Over Ons pagina
    /proces            # Procespagina
  /components          # Herbruikbare componenten
  /contexts            # React contexts (o.a. taalcontext)
  /data                # Statische gegevens
  /translations        # Vertalingsbestanden
/public                # Statische bestanden (afbeeldingen, etc.)
```

## 🛠️ Technologieën

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Taal**: TypeScript
- **State Management**: React Context API
- **Internationalisatie**: Custom vertaalsysteem

## 🧰 Installatie

1. Clone de repository:
   ```bash
   git clone https://github.com/MainfactAI/meta2.git
   cd meta2
   ```

2. Installeer dependencies:
   ```bash
   npm install
   ```

3. Start de ontwikkelserver:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in je browser

## 🔄 Vertalingssysteem

Het project gebruikt een aangepast vertalingssysteem dat werkt via de `TranslatedText` component. Vertalingen worden gedefinieerd in `/src/translations/translations.js` en kunnen worden opgeroepen met sleutels:

```jsx
<TranslatedText id="nav.home" />
```

## 🌍 Doelmarkten

- Europa
- Noord-Amerika
- China

## 📊 Belangrijkste pagina's

- **Home**: Overzicht van het bedrijf en diensten
- **Over Ons**: Bedrijfsgeschiedenis en certificeringen
- **Diensten**: Gedetailleerde uitleg van aangeboden diensten
- **Contact**: Contactinformatie met kantooradressen

## 📱 Responsive Design

De website is volledig responsief en biedt een optimale ervaring op:
- Mobiele apparaten
- Tablets
- Desktops

## 📝 Onderhoud

Voor het bijwerken van inhoud:
1. Wijzig de relevante bestanden in de `/src` directory
2. Voeg nieuwe vertalingen toe aan `/src/translations/translations.js`
3. Voor nieuwe afbeeldingen, plaats deze in de `/public/images` directory

## 🚀 Deployment

De website kan worden gedeployed met Vercel of andere Next.js-compatibele hostingoplossingen.

```bash
npm run build
```

## 📄 Licentie

Eigendom van Meta International. Alle rechten voorbehouden.
