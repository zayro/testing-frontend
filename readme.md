# Testing  Frontend

## Describe:
Utilizamos este elemento para definir bloques de pruebas relacionadas entre sí. Podemos concatenar varios “describe” si lo vemos necesario para nuestra estructura de tests.

## It:
Cada elemento it sería una prueba. Podemos definir todas las pruebas (it) que sean necesarias dentro de un elemento describe. Las pruebas pueden estar divididas entre varios elementos de tipo “describe”. Esto es útil si queremos diferenciar varios bloques de pruebas en un mismo fichero.

Esta sería la estructura más sencilla de un caso de prueba utilizando Mocha.js. No pensemos que esto es todo. Esta librería nos das muchas más posibilidades. Por ello, hablaremos de las que me resultan más interesantes al final de este pos

# Git

git init
git flow init

git checkout -b feature/react-test-init
git checkout -b feature/angular-test-form
git checkout -b feature/react-test-fetch
git checkout -b feature/react-test-coverage


# React

npx create-react-app my-app
cd my-app
npm start


# Angular

ng new my-app

ng test --no-watch --code-coverage

ng g s services/http 
ng g c ./components/home
ng g c ./components/welcome

# Bibliografia

## Testing Teorias

- https://www.itdo.com/blog/que-es-bdd-behavior-driven-development/

- https://josepablosarco.wordpress.com/2015/03/31/tdd-vs-bdd-vs-atdd/

- https://www.itdo.com/blog/tdd-vs-bdd-expectativas-de-calidad-de-tus-desarrollos/

- https://netmind.net/es/bdd-y-tdd-en-el-mundo-real-i/#:~:text=El%20Desarrollo%20guiado%20por%20pruebas,del%20software%20desde%20la%20fuente.

- https://www.paradigmadigital.com/dev/ddd-dominio-implica-crecer-fuerte/

- https://www.paradigmadigital.com/dev/ddd-dominio-implica-crecer-fuerte/

## Testing Ejemplos

- https://www.paradigmadigital.com/dev/testeando-javascript-mocha-chai/

- https://www.paradigmadigital.com/dev/testeo-api-rest-mocha-chai-http/

- https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
## Testing React

- https://blog.logrocket.com/a-quick-guide-to-testing-react-hooks-fa584c415407/

- https://testing-library.com/docs/react-testing-library/intro

- https://testing-library.com/docs/guide-disappearance/#nottobeinthedocument

- https://react-hooks-testing-library.com/usage/advanced-hooks

- https://es.reactjs.org/docs/testing-recipes.html

- https://es.reactjs.org/docs/test-utils.html

- https://www.leighhalliday.com/mock-fetch-jest

- https://jestjs.io/docs/tutorial-react

## Testing Angular

- http://www.protractortest.org/#/

- https://github.com/theryansmee/install-jest-angular-8-tutorial

- https://www.digitalocean.com/community/tutorials/angular-testing-httpclient

- https://medium.com/netscape/testing-with-the-angular-httpclient-api-648203820712

- https://codingpotions.com/angular-testing

- https://medium.com/netscape/testing-with-the-angular-httpclient-api-648203820712

- https://blog.logrocket.com/angular-unit-testing-tutorial-examples/

- https://www.moldeointeractive.com.ar/blog/moldeo-interactive-1/post/testing-de-angular-582#:~:text=Se%20denomina%20%22e2e%22%20a%20%22,principio%20a%20fin%2C%20buscando%20errores.&text=El%20sistema%20ejecutar%C3%A1%20una%20instancia,veces%20de%20una%20persona%20interactuando.


# Glosario

- Destilacion
- refactorizar
- refinar