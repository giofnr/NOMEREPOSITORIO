  
const  express  =  require ( 'express' ) ;
const  app  =  express ( ) ;

app . usar ( express . json ( ) ) ;

 const porta =  3000 ;

const  userAlexandre  =  {
    id : 0 ,
    nome : 'Alexandre' ,
    idade : 35
} ;

const  usuarios  =  [ userAlexandre ] ;

// Obter lista
app . get ( '/ usuarios' ,  ( req ,  res )  => {
    res . json ( usuarios ) ;
} ) ;

// Atualizar lista
app . post ( '/ usuarios' ,  ( req ,  res )  => {
    const  { nome , idade }  =  req . corpo ;
    const  id  =  usuarios . comprimento ;

    const  novoUser  =  {
        id ,
        nome ,
        idade
    } ;

    usuarios . push ( novoUser ) ;

    res . status ( 200 ) . json ( novoUser ) ;

} ) ;

// parametro de acesso
app . put ( '/ usuarios /: id' ,  ( req ,  res )  => {
    const  { id }  =  req . params ;
    const  { nome , idade }  =  req . corpo ;

    const  usuario  =  usuarios . find ( usuario  =>  usuario . id  ===  Número ( id ) ) ;

    usuario . nome  =  nome ;
    usuario . idade  =  idade ;

    res . json ( usuario ) ;

} ) ;

// remove o parametro
app . delete ( '/ usuarios /: id' ,  ( req ,  res )  => {
    const  { id }  =  req . params ;
     const indice =  usuarios . findIndex ( usuario  =>  usuario . id  ===  Número ( id ) ) ;
    usuarios . emenda ( índice , 1 ) ;
    res . status ( 204 ) . enviar ( ) ;
} ) ;

// Servidor ativo (npx nodemon "index.js | -> nome_arquivo")
app . escute ( porta ,  ( )  => {
    console . log ( `Server is up and running on port $ { port } ` ) ;
} ) ;