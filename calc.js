const vol = 65                      // volume da piscina ( 65m )
const teor = 65                     // porcentagem de cloro ativo no produto
const gramatura = teor / 100        // massa total de cloro por grama do produto
const ppm = 1.5                     // concentração desejada
const baldeKg = 10                  // quantos KG vem no balde
const precoBalde = 215              // preço do balde
const frequencia = 2                // frequencia de aplicação, 2 em 2 dias

function calculaDose () {
  var dose = ( ( vol * ppm ) / gramatura );
  console.log( `Aplique ${dose} gramas para uma taxa de ${ppm} ppm` );
  return dose;
}

function calculaGastoMensalDeCloro () {
  const dose = calculaDose()
  const produtoGastoMensal = ( 30 / frequencia ) * dose
  const precoPorGrama = precoBalde / ( baldeKg * 1000 );
  const gastoMensal = produtoGastoMensal * precoPorGrama;
  const rendimento = precoBalde / gastoMensal;
  console.log( `Gastos mensais com cloro para manter a concentração em ${ppm} ppm: R$ ${gastoMensal.toFixed( 2 )}` );
  console.log( `Um balde dura ${rendimento.toFixed( 1 )} Meses` )
}

calculaGastoMensalDeCloro()



function calculaPPM ( dose ) {
  var ppmValidado = ( ( dose * gramatura ) / vol )
  console.log( '(validação: ' + ppmValidado + ' ppm)\n--------------------------' );
}
