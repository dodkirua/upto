Consignes :

- Aficher le jour de la semaine sous forme textuelle en utilisant date() dans le script index.php ( lisez bien la doc sur php.net )
- A la suite, afficher en utilisant date(), la date suivante : "2018.12.10" ( celle ci doit apparaitre exactement de cette
façon )
- A la suite, afficher en utilisant date(), l'heure suivante : "11:35:07" ( celle ci doit apparaitre exactement de cette
façon )




Théorie :

PHP permet de créer ou lire des dates, contrairement à javascript, le référentiel utilisé par défaut sera l'heure locale
 du serveur où PHP est éxécuté et non pas l'heure locale du visiteur.

- La fonction date()

La syntaxe est la suivante : date(format,timestamp)

Si le parametre timestamp n'est pas précisé, la date retournée sera l'heure et le jour du serveur.

Exemple :

$today = date("j/m/Y");

la variable today aura pour valeur le jour/le mois/l'année
A la date d'écriture de l'exercice : 10/12/2018

Dans l'exemple, le caractere "/" est utilisé pour séparer les différentes valeurs, j'aurais pu utiliser "-" ou d'autres
caracteres.


- Timezone :

Si vous souhaitez obtenir la date courante pour un autre fuseau horaire, vous pouvez utiliser la fonction
date_default_timezone_set()

Exemple :

date_default_timezone_set("America/New_York");
$heure = date("h:i:sa");

La variable heure aura pour valeur l'heure,les minutes et les secondes au moment de l'éxécution du script pour le fuseau
horaire de New york aux etats-unis


- mktime() :

la fonction mktime() permet de créer un timestamp à partir d'une date.

La syntaxe est la suivante : mktime(heure,minute,seconde,mois,jour,année);
Les parametres de cette fonction doivent toujours être sous forme numérique.

 Exemple :

 $d=mktime(11, 14, 54, 8, 12, 2014);
 echo date("Y-m-d h:i:sa", $d);

 Retournera la date du 12 aout 2014


- Créer une date à partir d'une chaine de caracteres : strtotime()

Exemples :

 $d=strtotime("tomorrow");
 echo date("Y-m-d h:i:sa", $d)

 Retournera la date qu'il sera le lendemain

 $d=strtotime("+3 Months");
 echo date("Y-m-d h:i:sa", $d)

Retournera la date qu'il sera dans trois mois.


Documentation sur php.net : http://php.net/manual/fr/function.date.php


