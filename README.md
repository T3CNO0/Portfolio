<!DOCTYPE html>
 <html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Carlos Anísio, User: T3CNO0">
    <title>Portfólio</title>
</head>


<body class="body">
    <div class="titulo">Portfólio</div>

    <div class="container1">
        <h2>Minhas Redes Sociais:</h2>
        <a href="https://api.whatsapp.com/send/?phone=73999571305&text&type=phone_number&app_absent=0">
            <img src="logowhats.png " width="110" height= "60"></a>

        <a href="https://www.instagram.com/carloss_11110/">
            <img src="logoinsta.png" width="50" height= "45"></a>

        <a href="https://www.linkedin.com/in/carlos-anisio-a54a77251/">
            <img src="logo linkdln.png" width="90" height= "70"></a>

        <a href="https://github.com/T3CNO0">
            <img src="logo git.png" width="50" height="50"></a>
            
     </div>
</div>


<h2 class="apresentacao">
    Olá, caro recrutador, prazer em conhece-lo, me chamo Carlos<br>
    Fiz este portfólio utilizando apenas html e css. <br>
    Sou um Desenvolvedor Web em transição de carreira, mas isso você ja deve ter percebido <br>
    Vamos ao que realmente você quer saber: minhas formações e um pouco sobre mim: </h2>


<div class="container2">
<ul class="lista">
    <h4>Habilidades</h4>
<li>Lógica de Programação</li>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>Python</li>
<li>Banco de Dados</li>
<li>Linguagem C</li>
<li>Figma</li>
<li>Trabalho em equipe</li>
<li>Resiliência</li>
</ul>

<ul class="sobre">
    <h1>Um pouco sobre mim:</h1>
    <h4>Bom, atualmente trabalho no setor administrativo de uma empresa, porém me formei como técnico em informática, cursei integrado ao ensino médio, inclusive foi onde adquiri boa parte dos meus fundamentos em programação, foi durante o curso(Realizado no colégio CETEPES) que percebi que a área que mais me deixava atraído era a de programação, e desde então venho buscando fazer essa transição de carreira, simplesmente amo passar horas na frente do vs code, ah e não sei se deu para notar, mas eu gosto bastante de brincar com as cores! (OBS: quis fazer um portfólio mais descontraído, mas em questão de trabalho sou perfeitamente empenhado até concluir o objetivo.)</h4>
</ul>
</div>


    <h2 class="nom">Alguns projetos meus:</h2>
    <div class="projetos">

<div class="projeto1">
<h3>Calculadora</h3>
<a href="https://github.com/T3CNO0/Calculadora" >
<img src="result.png" width="700px" height="400px">
</a>
</div>

<div class="projeto2">
    <h3>Formulário de Login</h3>
    <a href="https://github.com/T3CNO0/Formulario-de-login.git">
        <img src="formulario.png" width="700px" height="400px"/></a>
</div>
</div>


<div class="pq">
    <h1>Por que me escolher?</h1>

    <h3>Bom, ja vou começar pelo fator principal que eu simplesmente amo trabalhar 
    com programação, ou seja o amor pela profissão, é um cargo pelo qual eu dou
    meu sangue para conquistar, tenho muita facilidade para aprender, o que eu não 
    sei logo volto com a resposta, se precisar aprender alguma nova linguagem, framework, ou banco de dados, me esforço para aprender 
    e executar com perfeição o trabalho com tudo que for preciso, acredito que isso faz de mim um programador, a curiosidade
    a sede de conhecimento e aprimoramento, consigo trabalhar em equipe tranquilamente, dito isso
    tenho certeza que me tornarei um web developer excelente.</h3>
</div>

</body>


<footer class="footer"> © 2024 Copyright by T3CNO0</footer>
</html>

<style>
     .body {
    width: 100%;
    margin: 0 auto;
    background-image: repeating-linear-gradient(black, purple, rgb(98, 9, 9), rgb(6, 65, 95));
     }
     
     .titulo{
        margin: auto;
        padding: auto;
        color: rgb(255, 255, 255);
        font-size: xx-large;
        font-style:italic;
        text-align: center;
        background-image: linear-gradient(black, rgb(0, 96, 128));
        
    }

    .container1{
        width: auto;
        margin: 0 auto;
        padding: 0px 35%;
        color: aliceblue;
        display: flex;
        align-items: center;
        align-content: center;
        background-image: repeating-linear-gradient(purple,rgb(141, 37, 80),rgb(6, 58, 88));  
        border-style: solid;
        border-color: rgb(0, 0, 0);
        
    }

.apresentacao{
    margin: 5px;
     text-align: center;
     color: rgb(202, 235, 228);
     background-color: rgba(63, 9, 157, 0.14) ;
     border-style:double;
     border-color: aqua;
     border-radius: 5px;


    }

    .container2{
        display: flex;
        text-align: left;
        width: 80%;
        margin: auto auto;
    }

    .lista{
        height: auto;
        width: 600px;
        color: aliceblue;
        font-size:large;
        background-image:linear-gradient(black, rgb(65, 22, 2)) ;
        border-color: rgb(119, 190, 223);
        border-radius: 10px;
        border-style: double;
    }

    .sobre{ 
       height: auto;
       width: 600px; 
       background-image:linear-gradient(black, rgb(87, 6, 6));
        border-style: double;
        border-radius: 10px;
        border-color:  rgb(119, 190, 223);
        color: aliceblue;
        font-size: large;
        font-style: solid;
    }
   
    .nom{
        
        color: aliceblue;
        background-image: linear-gradient(rgb(0, 0, 0), purple);
        text-align: center;
        border-radius: 10px;
        border-color: rgb(9, 87, 87);
        border-style: solid;
    }


    .projetos{
        display: flex;
        width:93%;
        margin: 0 auto;
        font-size: x-large;
    }
    .projeto1{
        
        background-image: repeating-linear-gradient(rgb(16, 129, 157), purple);
        width: max-content;
        height: auto;
        border-radius: 15px;
        border-color: aqua;
        border-style: solid;
        color: aliceblue;
        text-align: center;
        
    }
    .projeto2{
        
        background-image: repeating-linear-gradient(purple, black);
        width: max-content;
        height: auto;
        border-radius: 15px;
        border-color: aqua;
        border-style: solid;
        color: aliceblue;
        text-align: center;
    }

    .pq{
        width: auto;
        color: aliceblue;
        background-image: linear-gradient(purple, rgb(4, 4, 100));
        text-align: center;
        border-style: double;
        border-radius: 10px;
        
    }

    .footer{
        padding: 0 0;
        text-align: center;
        background-color: grey;
        color: aliceblue;
        height: auto;

    }
    
</style>
