# Habit - Gerenciador de hábitos

<div style="text-align: center;">
<img src="Front-end/src/assets/habits.png" alt="Daniel" width="50%"/>
</div>

### Projeto realizado para a disciplina de Desenvolvimento Web (XDES03), ministrada pelo professor Phyllipe

#### Ideia do projeto:
O projeto consiste em uma aplicação web para controle e gerencia de hábitos pessoais dos usuários. Os usuários podem criar uma conta, realizar o seu login e utilizar da plataforma para controlar hábitos saudáveis diários que queira manter. 

A ideia do projeto foi, além de ter o controle dos hábitos, concentrar ferramentas úteis para o dia a dia, como: Previsão do tempo, calendário, data, hora e, para manter o ritmo, algumas frases motivacionais, que podems ser geradas para o usuário sempre que desejar.


<img src="https://i.ibb.co/sjfnyXQ/habits.png" alt="Página Inicial Habits" width="100%"/>
<img src="https://i.ibb.co/Sv59mNt/habits-sobre.png" alt="Página Sobre Nós Habits" width="100%"/>

---

#### Dependências do projeto
Para o **Back-End**, é necessário ter o Java Instalado em sua máquina. [Você pode fazer isso por aqui](https://www.google.com/url?sa=j&url=https%3A%2F%2Fdownload.oracle.com%2Fjava%2F17%2Farchive%2Fjdk-17.0.7_windows-x64_bin.msi&uct=1686322305&usg=Q1ba4HYYJ6WXPxFQr30GFoQbJ44.&source=meet). Após isso, é necessário instalar o Maven, que você pode saber como fazer [aqui!](https://maven.apache.org/install.html)

Uma vez tendo o Java e o Maven instalado, navegue pelo terminal até a pasta ```back-end``` e execute o comando ```mvn spring-boot:run```. Isso fará o back-end rodar em localhost, na porta 8080, que você poderá acessar pelo navegador (os métodos GET) ou outras formas de consulta de APIs, como o Postman.


Para o **Front-End**, é necessário, primeiramente, ter o React.js instalado. Isso você pode fazer utilizando a [Documentação do React](https://pt-br.legacy.reactjs.org/). Depois disso, precisam ser instaladas algumas dependências, executadno 2 comandos em seu terminal:
```
npm install vite
```

```
npm install chart.js
```
Isso irá habilitar o vite para rodar a aplicação React.Js e o Chart.js para plotar o gráfico.

---

#### Equipe do projeto
##### Da esquerda para a direita: Daniel, Huandy, Leticia e Ana Maísa

<div style="text-align: center; display: flex;">
  <img src="Front-end/src/assets/Foto-Daniel.jpeg" alt="Daniel" width="20%"/>
  <img src="Front-end/src/assets/Foto-Huandy.jpg" alt="Huandy" width="20%" />
  <img src="Front-end/src/assets/Foto-Leticia.jpeg" alt="Leticia" width="20%" />
  <img src="Front-end/src/assets/Foto-Ana.png" alt="Ana Maísa" width="20%"/>
</div>

##### Divisão de tarefas
- Daniel: Pesquisa e integração das APIs.
- Huandy: Desenvolvimento do Back-End do projeto em Spring-Boot (Java)
- Leticia: Desenvolvimento Front-End em React.Js
- Ana Maísa: Ideação, Integração de Back-End e Front-End e tratamento de dados (gráfico no Chart.js)

---

#### APIs externas utilizadas
- Clima: https://openweathermap.org/api
- Frases: https://github.com/lukePeavey/quotable

---

#### Nossas redes sociais
- Daniel González | [Github](https://github.com/danigon1998) | [LinkedIn](https://br.linkedin.com/in/daniel-gonzález-a5662b181)
- Letícia Santos | [Github](https://github.com/leticiasants) | [LinkedIn](https://br.linkedin.com/in/leticiasantss)
- Huandy Calini | [Github](https://github.com/HuandySilva) | [LinkedIn](https://br.linkedin.com/in/huandy-silva)
- Ana Maísa | [Github](https://github.com/AnaMaisaUnifei) | [LinkedIn](https://br.linkedin.com/in/ana-ma%C3%ADsa-santos/)