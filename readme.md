git init
git flow init

git checkout -b feature/react-test-init
git checkout -b feature/angular-test-form
git checkout -b feature/react-test-fetch
git checkout -b feature/react-test-coverage



npx create-react-app my-app
cd my-app
npm start

ng new my-app

jest --init

  "jest": {
    "verbose": true,
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
      "<rootDir>/setup-jest.ts"
    ]
  },e

http://www.protractortest.org/#/

https://github.com/theryansmee/install-jest-angular-8-tutorial

https://www.digitalocean.com/community/tutorials/angular-testing-httpclient

https://medium.com/netscape/testing-with-the-angular-httpclient-api-648203820712

https://codingpotions.com/angular-testing

https://www.moldeointeractive.com.ar/blog/moldeo-interactive-1/post/testing-de-angular-582#:~:text=Se%20denomina%20%22e2e%22%20a%20%22,principio%20a%20fin%2C%20buscando%20errores.&text=El%20sistema%20ejecutar%C3%A1%20una%20instancia,veces%20de%20una%20persona%20interactuando.

ng test --no-watch --code-coverage

ng g s services/http 
ng g c ./components/home
ng g c ./components/welcome