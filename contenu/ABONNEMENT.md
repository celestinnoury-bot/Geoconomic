# Géoconomic+ : prix, codes offerts et proches invités

**Prix** : 3,99 €/mois ou 39,99 €/an (2 mois offerts). Ils se règlent dans `data/plus.js` (`prix`).

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

## Ce qui reste un prototype

- L'accès est mémorisé **sur l'appareil** : un proche qui change de téléphone retape son code.
- Une personne qui sait programmer pourrait contourner le verrou : la vraie protection viendra avec les comptes.

## Le jour du lancement

1. Créer un compte chez un prestataire de paiement (Stripe ou Lemon Squeezy) et deux produits : 3,99 €/mois et 39,99 €/an.
2. Coller les liens de paiement :
   `node tools/plus.mjs paiement mensuel https://…` et `node tools/plus.mjs paiement annuel https://…`
   Les boutons « S'abonner » s'activent tout seuls.
3. Brancher des comptes (par exemple Supabase) pour que l'abonnement suive la personne sur tous ses appareils ; les codes offerts deviennent alors des codes promo à 100 % chez le prestataire, et la liste des proches passe sur le serveur.
