export type CatalogItem={id:string;category:string;name:string;unit:string;suggestedPrice:number;service?:boolean};
export const catalog:CatalogItem[]=[
{id:'cam-ip-4mp',category:'CFTV',name:'Câmera IP 4 MP',unit:'unidade',suggestedPrice:280},
{id:'nvr-8',category:'CFTV',name:'NVR 8 canais',unit:'unidade',suggestedPrice:650},
{id:'cabo-cat6',category:'Redes',name:'Cabo de rede Cat6',unit:'metro',suggestedPrice:3.2},
{id:'conector-rj45',category:'Redes',name:'Conector RJ45',unit:'unidade',suggestedPrice:1.5},
{id:'tomada-10a',category:'Elétrica',name:'Tomada 10 A',unit:'unidade',suggestedPrice:12},
{id:'ponto-luz',category:'Elétrica',name:'Ponto de iluminação',unit:'ponto',suggestedPrice:85,service:true},
{id:'ponto-tomada',category:'Elétrica',name:'Ponto de tomada',unit:'ponto',suggestedPrice:95,service:true},
{id:'inst-camera',category:'CFTV',name:'Instalação de câmera',unit:'unidade',suggestedPrice:120,service:true},
{id:'config-rede',category:'Redes',name:'Configuração de roteador e Wi-Fi',unit:'serviço',suggestedPrice:180,service:true},
{id:'manut-pc',category:'Informática',name:'Manutenção de computador',unit:'serviço',suggestedPrice:150,service:true},
{id:'limpeza-impressora',category:'Impressoras',name:'Limpeza e manutenção de impressora',unit:'serviço',suggestedPrice:120,service:true},
];
export const categories=[...new Set(catalog.map(item=>item.category))];
