const puppeteer = require('puppeteer')

async function  SalvaRetaori() {
   const navegador =await puppeteer.launch();
   const pagina = await navegador.newPage();    

   await pagina.goto('https://google.com');

   await pagina.screenshot({path: 'captura.png'});

   await pagina.waitForSelector('.success', {visible:true});

   await navegador.close();
} 

SalvaRetaori(); 