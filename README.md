# Documentation-API_Controle
## API de recherche d'information de bar / Search API about bar informations 
:fr: Ceci est une api de recherche d'informations sur les bar en vu d'un controle en 2eme année d'école d'ingénieur.

Voici le lien de l'api : https://openbrewerydb.org/

:gb: This is a search api about bar informations for a 2nd year in computer science's school. 

Here is the api link : https://openbrewerydb.org/

### Fonctionnalites Principales / Main functionalities
:fr: 

- Afficher la liste de tous les bars disponibles (uniquement dans les USA)
- Afficher les informations d'un bar en fonction de son identifiant
- Afficher les bars d'une ville

:gb: 

- List of all available bars (Uniquely in the USA)
- Show the informations of a bar by his id
- Bar list of a city

### Instructions d'installation / Installation instructions
:fr: 

1. Clonez le depot : `git clone https://github.com/MathieuAudibert/Documentation-API_Controle`
2. Installer les dependances : `npm install`
    - -> Installer typescript : `npm install typescript --save-dev`,
    - -> Installer axios : `npm install axios`,
    - -> Installer les librairies express et node : `npm install @types/express @types/node`
3. Lancer Postman 
    - -> [Lien pour telecharger postman](https://www.postman.com/downloads/)

:gb:

1. Clone the repository : `git clone https://github.com/MathieuAudibert/Documentation-API_Controle`
2. Install dependencies : `npm install`
    - -> Install typescript : `npm install typescript --save-dev`,
    - -> Install axios : `npm install axios`,
    - -> Install express & node librairies : `npm install @types/express @types/node`
3. Use Postman 
    - -> [Link to download postman](https://www.postman.com/downloads/)

### Configuration Requise / Required Configuration
-    "@types/express": "^4.17.21",
-   "@types/node": "^20.11.16",
-    "@types/swagger-jsdoc": "^6.0.4",
-    "@types/swagger-ui-express": "^4.1.6",
-    "nodemon": "^3.0.3",
-    "typescript": "^5.3.3"

### Exemples D'utilisation / Usage examples
#### Exemple 1 (Show all the bars in a city) : 

:fr: Lancer le server a l'aide de : `npm start`
- Lancez postman et cliquez sur `skip` a chaque question
- Dans la barre de recherche, mettez `http://localhost:3000/breweries` --> cliquez sur `send`

![Screen de la barre de recherche](image.png)

:gb: Start the server with : `npm start`
- Start postman and click on `skip` on every question
- In the search bar, put `http://localhost:3000/breweries` --> click on `send`

![Search bar screen](image-1.png)









### Nos adresses e-mail (pro) / Our e-mail adresses (pro)
mathieu.audibert@efrei.net
andrija.tomic@efrei.net