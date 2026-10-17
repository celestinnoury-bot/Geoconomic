# Géoconomic+ : prix, codes offerts et proches invités

**Prix** : 3,99 €/mois ou 39,99 €/an (2 mois offerts). Ils se règlent dans `data/plus.js` (`prix`).

## Ce qui est gratuit, ce qui est réservé

| Gratuit | Géoconomic+ |
|---|---|
| L'actu, le globe, les chiffres, les conflits | |
| Les cours pour débuter | Les cours d'approfondissement et leurs quiz (`plus: true` dans `data/content.js`) |
| Le Focus industrie le plus récent | Les Focus précédents (archives) |
| La dernière étude de cas | Les études de cas précédentes (archives) |
| Un article sur deux (1er, 3e, 5e… de la liste) | L'autre article sur deux (2e, 4e…) ; `plus: true` ou `plus: false` dans `data/culture.js` pour choisir soi-même |
| Les 7 dernières lettres du matin | Les lettres plus anciennes |
| 2 épisodes du podcast | Tous les épisodes |

Un contenu réservé garde un aperçu gratuit (l'accroche, l'essentiel en 30 secondes) pour donner envie.
Pour rendre un cours payant ou gratuit : ajouter ou retirer `plus: true` sur ce cours dans `data/content.js`.

## Offrir l'accès

Tout se fait avec `tools/plus.mjs`, dans le terminal, à la racine du projet :

```
node tools/plus.mjs code FAMILLE2026 "Famille et amis"            # un code à donner (sans date de fin)
node tools/plus.mjs code PROFS2026 "Profs" 2027-06-30             # un code valable jusqu'au 30 juin 2027
node tools/plus.mjs invite prenom.nom@exemple.fr "Maman"           # un proche, qui tapera son e-mail
node tools/plus.mjs retirer FAMILLE2026                            # retirer un code (ou un e-mail)
node tools/plus.mjs liste                                          # voir les libellés
```

Les codes et les e-mails ne sont jamais publiés en clair : seule leur empreinte (SHA-256) est dans `data/plus.js`.
Après une modification : enregistrer (commit) et republier l'appli.

Le code de départ est **FAMILLE2026** (« Famille et amis », sans date de fin).

## Offre « Membres fondateurs » (les 50 premiers)

2 mois offerts, puis **2,99 €/mois à vie** au lieu de 3,99 €, tant que l'abonnement continue ; badge « Membre fondateur ».
La carte s'affiche en tête de la page Géoconomic+ avec le nombre de places restantes.

```
node tools/plus.mjs fondateurs restantes 37          # mettre à jour le compteur
node tools/plus.mjs fondateurs lien https://…         # lien de paiement de l'offre (le bouton s'active)
node tools/plus.mjs fondateurs fin                    # clore l'offre
```

Le code **FONDATEUR2026** (prototype) donne l'accès pendant 2 mois à partir du jour où il est tapé, avec le badge.
Au lancement, chez le prestataire de paiement : un produit à 2,99 €/mois avec 2 mois d'essai et carte demandée,
limité à 50 inscriptions (code promo à utilisations limitées), et l'e-mail de rappel 7 jours avant la fin de l'essai.

## Ce qui reste un prototype

- L'accès est mémorisé **sur l'appareil** : un proche qui change de téléphone retape son code.
- Une personne qui sait programmer pourrait contourner le verrou : la vraie protection viendra avec les comptes.

## Le paiement avec RevenueCat (déjà branché dans l'appli)

Le code est prêt : dès qu'une clé RevenueCat est enregistrée, les boutons « S'abonner » ouvrent la fenêtre de paiement
de RevenueCat (carte bancaire, via Stripe), et l'appli demande à RevenueCat, à chaque ouverture, si l'abonnement est actif.
Sans clé, rien ne change (liens de paiement ou « Bientôt disponible »).

### Ce que tu dois créer (une fois)

1. **Stripe** (stripe.com) : un compte avec ton statut (micro-entreprise : SIRET), ton IBAN et ta pièce d'identité.
2. **RevenueCat** (revenuecat.com) : un compte gratuit, puis un projet « Géoconomic ».
3. Dans le projet, ajoute une app de type **Web Billing** (« RevenueCat Billing ») et **connecte ton compte Stripe**.
4. **Produits** (dans l'app Web Billing) : deux abonnements
   - `plus_mensuel` : 3,99 €, tous les mois ;
   - `plus_annuel` : 39,99 €, tous les ans ;
   - (facultatif) `plus_fondateur` : 2,99 €, tous les mois, avec 2 mois d'essai gratuit.
5. **Entitlement** : crée `plus` et attache-lui les produits.
6. **Offering** : crée `default` (et marque-la « courante ») avec les paquets **Monthly** (`$rc_monthly` → plus_mensuel)
   et **Annual** (`$rc_annual` → plus_annuel). Pour les fondateurs, un paquet personnalisé, par exemple `fondateurs`.
7. **Clé** : dans *API keys*, copie la **clé publique** de l'app Web Billing, qui commence par `rcb_`.
   Il y en a une de test (`rcb_sb_…`, bac à sable) : commence par elle. **Jamais la clé secrète** (`sk_…`).

### Ce qu'on fait ensuite (ou tu me donnes la clé et je le fais)

```
node tools/plus.mjs revenuecat cle rcb_sb_…                 # clé de test d'abord
node tools/plus.mjs revenuecat paquet fondateurs fondateurs # si tu as créé le paquet fondateurs
node tools/plus.mjs revenuecat droit plus                   # seulement si ton entitlement a un autre nom
```

Puis on teste avec la carte de test Stripe `4242 4242 4242 4242` (date future, n'importe quel code), et on remplace
par la clé de production (`rcb_…` sans `sb`) au lancement. `node tools/plus.mjs revenuecat retirer` débranche tout.

### À savoir

- Le paiement ne s'ouvrira probablement pas dans l'aperçu claude.ai (il bloque les connexions vers RevenueCat et Stripe) :
  il faut l'appli **hébergée sur un vrai site** (voir « En attente » : hébergement public).
- Chaque appareil a un identifiant anonyme : un abonné qui change de téléphone devra être relié à son compte
  (étape suivante : des comptes, par exemple par e-mail, pour retrouver son abonnement partout).
- Les codes offerts (FAMILLE2026…) continuent de marcher à côté.

## Le jour du lancement

1. Créer un compte chez un prestataire de paiement (Stripe ou Lemon Squeezy) et deux produits : 3,99 €/mois et 39,99 €/an.
2. Coller les liens de paiement :
   `node tools/plus.mjs paiement mensuel https://…` et `node tools/plus.mjs paiement annuel https://…`
   Les boutons « S'abonner » s'activent tout seuls.
3. Brancher des comptes (par exemple Supabase) pour que l'abonnement suive la personne sur tous ses appareils ; les codes offerts deviennent alors des codes promo à 100 % chez le prestataire, et la liste des proches passe sur le serveur.
