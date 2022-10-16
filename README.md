# Caunter
> È una progetto realizato per start2impact per il corso di javaScript basics
>
**Contenuto:**
 <ul>
    <li><a href="#Informazioni-sul-progetto">Informazioni sul progetto</a></li>
    <li><a href="#html">HTML</a></li>
    <li><a href="#css">CSS</a></li>
    <li><a href="#js">JS</a></li>
  </ul>

## Informazioni-sul-progetto
**È un'applicazione che funziona come un counter che permette all'utente di aumentare o decrementare il valore del counter, è costruito con con`HTML` 
`CSS` `JS`**

![application-screenshot](https://user-images.githubusercontent.com/99691998/194544370-7840a2a5-3f6a-485a-9ae7-ee40f5f3229f.png)


### HTML 
Il file `index.html`
- include il file `main.css`nel blocco `<head>`
```html
   <link rel="stylesheet" href="css/main.css">
```
- nel file `main.js` tramite tag `<script>` alla fine del `<body>`
```html
   <script src="js/main.js"></script>
```
### CSS
Il file `main.css` contiene lo stile:
- posizionato elemento grafico dell'applicazione.
- ottimizato su diverzi dispositivi
- la scelta dei colori è presa da questo sito web [https://coolors.co](https://coolors.co).

### JS:
Il file `main.js` contiene la parte logica:
- ho usato `document.querySelector` per ottenere il riferimento `caunter`, `content`:
```javaScript
    const caunter =  document.querySelector("#caunter");
    const content = document.querySelector("#content");
```
- con `document.createElement` ho aggiunto i due elementi `span` e `button` inserendo `span` all'intero dell'elemento `caunter`,i pulsanti all'interno dell'elemento `content` :

```javaScript
    const caunterSpan = document.createElement("span");
    caunterSpan.textContent= 0;
    caunter.appendChild(caunterSpan);
    
    const buttonDecrement =  document.createElement("button");
    buttonDecrement.innerHTML = "-";
    buttonDecrement.id = "btn";
    content.appendChild(buttonDecrement);
    
    const buttonIncrement = document.createElement("button");
    buttonIncrement.innerHTML = "+";
    buttonIncrement.id = "btn";
    content.appendChild(buttonIncrement);
```
 - Aggiunto poi il gestore per l'evento `onclick`che permette la funzione di cambiare il valore del counter +/- .
```javaScript 
 buttonDecrement.onclick = function(){
     parseInt(caunterSpan.innerHTML--)
   }
   buttonIncrement.onclick = function(){
  parseInt(caunterSpan.innerHTML++)
   }
```
