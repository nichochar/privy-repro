"use strict";var i=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var m=(r,o)=>{for(var n in o)i(r,n,{get:o[n],enumerable:!0})},s=(r,o,n,g)=>{if(o&&typeof o=="object"||typeof o=="function")for(let t of f(o))!h.call(r,t)&&t!==n&&i(r,t,{get:()=>o[t],enumerable:!(g=c(o,t))||g.enumerable});return r};var a=r=>s(i({},"__esModule",{value:!0}),r);var l={};m(l,{forward2:()=>d,thing2:()=>x});module.exports=a(l);var e=require("lib2"),p=require("wagmi");console.log(e.thing,e.forward);var x="another thing to export",d=p.erc20ABI;0&&(module.exports={forward2,thing2});
