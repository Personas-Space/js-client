!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.personas=t():e.personas=t()}(this,(function(){return e={56:e=>{e.exports=function(e){if(e&&"string"!=typeof e)throw new Error("Address must be of type string");return{avatar:{small:e?"https://img.prs.onl/avatar/small/"+e+".png":"https://img.prs.onl/avatar/placeholders/small.png",medium:e?"https://img.prs.onl/avatar/medium/"+e+".png":"https://img.prs.onl/avatar/placeholders/medium.png"},profile:e?"https://data.prs.onl/persona/"+e+".json":"https://personas.space/search",explorer:e?"https://personas.space/address/"+e:"https://personas.space/search"}}},138:(e,t,s)=>{const r=s(56);e.exports={get:r}}},t={},function s(r){var o=t[r];if(void 0!==o)return o.exports;var p=t[r]={exports:{}};return e[r](p,p.exports,s),p.exports}(138);var e,t}));