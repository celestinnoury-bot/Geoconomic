// Géoconomic+ : prix, liens de paiement, codes offerts et proches invités.
// Ne pas modifier les listes à la main : utiliser node tools/plus.mjs (les codes et e-mails n'y sont qu'en empreinte).
// Prototype : tant que le paiement et les comptes ne sont pas branchés, l'accès est mémorisé sur l'appareil.
window.GEOCO = window.GEOCO || {};
window.GEOCO.plus = {
  "prix": {
    "mensuel": 3.99,
    "annuel": 39.99
  },
  "paiement": {
    "mensuel": "",
    "annuel": ""
  },
  "codes": [
    {
      "h": "3ee4c3396b877c3cb00b156f0528d6ac02be410172722a8b7ae951613ba9d6a0",
      "label": "Famille et amis"
    },
    {
      "h": "c1ebc97807c26a287a9ba9e8b69b3e2b9c6bdc35f8ff3560e1df9a253a2bda55",
      "label": "Membres fondateurs",
      "fondateur": true
    }
  ],
  "invites": [],
  "fondateurs": {
    "places": 50,
    "restantes": 50,
    "essaiMois": 2,
    "prix": 2.99,
    "paiement": "",
    "ouvert": true
  },
  "revenuecat": {
    "cle": "",
    "droit": "plus",
    "offre": "",
    "paquets": {
      "mensuel": "$rc_monthly",
      "annuel": "$rc_annual",
      "fondateurs": ""
    }
  }
};
