UPDATE : Jeudi 14 mai à 19h30

**Concepte**
Le graphique représente l'utilisation des transports publics en Suisse par les pendulaires de l'année 1990, 1995 et de l'année 2000 jusqu'à l'année 2018. Il est divisé en deux parties :
- un graphique en batons représentant le nombre de passagers/voyageurs qui utilise le moyen de transport (train/TPR*/Bateau)
- un graphique en graphe représentant le nombre de km total que les passagers/voyageurs qui ont parcourus avec les transports publics (train/TPR*/Bateau)

________
TPR = Transports Publics Routiers

________

**Done**
- Graphique représentant le nombre de voyageur en Train
- Graphique représentant le nombre de voyageur en TPR
- Graphique représentant le nombre de voyageur en Bateau
- Graphique représentant le nombre de km parcouru en Train
- Graphique représentant le nombre de km parcouru en TPR
- Graphique représentant le nombre de km parcouru en Bateau
- **Les 6 jeux de données sont regroupées dans un seul graphique**
- Afficher le graphique
- Publier sur le web : Problème la page s'affiche mais pas le graphique...)
- Completer le readme

**En cours**



**Todo**

________

**Questions sur le projet**

- D'où viennent les données (où, qui, pourquoi...) ?

Les données viennent du site de l'office fédérale de la statistique (https://www.bfs.admin.ch/bfs/fr/home/statistiques/mobilite-transports/themes-transversaux/transports-publics.assetdetail.11207456.html). Ces données montrent l'évolution au fil du temps de l'augmentation de voyageur et de marchandises ainsi que l'impact qu'il y a autour des transports publics (consomation d'énergie, surface utilisé, nombre d'employé, nombre d'entreprise, infrastructure, finance, ...). 

- Comment ont-elles été transformées ?

J'ai repris les données qui m'intéréssaient. Pour chaque donnée, je les ai mis dans un document en format CSV. Puis, j'ai regroupé les données qui concerne le nombre de voyageur dans un autre document en format CSV et les données qui concernent le nombre de kilomètres dans un autre document en format CSV. Grâce au script prepare.js, j'ai pu réunir les deux jeux de données en un et le tout de convertir au format JSON.

- Un lien vers le code source de votre visualisation :

https://github.com/Andreanefer/VisualDonM47/tree/master/Projet-Pendulaires/

- Un lien vers votre visualisation publiée :

https://andreanefer.github.io

- Quel scripte je dois utiliser pour recréer le site à partir de votre code ?

npm run projet
