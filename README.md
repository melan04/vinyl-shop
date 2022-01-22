# Projet perso - Création d'une application de vente de vinyls - REACT JS

Exercice - Utilisation du framework REACT JS

Pour lancer l'application, cloner le dépot puis : npm start 

Le site tourne en local sur : http://localhost:3000

Fonctionnalités: 

- Ajout de produits dans le panier 
- Selection d'un genre grâce au menu déroulant 
- Vider le panier 

Technologies utilisées : 

- Create React App : va me permettre de générer un squelette de code pour l'application. Il embarque un certain nombre d'outils préconfigurés, tels que Webpack, Babel et ESLint, afin de garantir la meilleure expérience de développement possible.
- Apprentissage de deux principes : les conditions et les listes. 
- Utilisation des props pour réutiliser les composants. 
- Intéragir avec les composants grâce aux évènements 
- Utilisation des hooks : useState / useEffect


Mémo : 

- Un hook est une fonction qui permet de « se brancher » (to hook up) sur des fonctionnalités React.
- useState   est un hook qui permet d’ajouter le state local React à des fonctions composants :
    - Il nous renvoie une paire de valeurs dans un tableau de 2 valeurs, récupérée dans les variables entre crochets.
    - Il faut initialiser votre state avec un paramètre passé entre parenthèses – un nombre, une string, un booléen, un tableau ou même un objet.

- useEffectpermet d'effectuer des effets : cela permet à notre composant d'exécuter des actions après l'affichage, en choisissant à quel moment cette action doit être exécutée.
Le hook  useEffect   est appelé après chaque rendu de votre composant. Il est possible de préciser quelle modification de donnée déclenche les effets exécutés dans useEffect, avec le tableau de dépendances.
Un tableau de dépendances vide permet d'exécuter un effet uniquement au premier rendu de votre composant.

Idées d'améliorations de l'application : 

- Permettre de supprimer des articles dans le panier.
- Permettre de sélectionner plusieurs catégories.
- Afficher des informations supplémentaires au clic sur un article dans une modale.
- Ajouter du style : des animations pour ouvrir/fermer le panier, sur le header, personnaliser les boutons, etc.


