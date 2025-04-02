# DengueAlertApiFrontEnd 

<h2>Introdução</h2>
API FrontEnd desenvolvida para exibir dados das semanas epidemologias dos casos de Dengue. Facilitando o entendimento do usuário quando se visualiza os dados em questão. Usa o metódo HTTP para fazer as requisições batendo no endpoint da API que já está pronta e vocês podem encontrar aqui: https://github.com/jhonvss1/DengueAlertApiBackEnd


## Tecnologias usadas

Framework (Angular)

Cliente HTTP 

## Instalação 
 Para fazer a utilização dessa API você deve seguir os passos abaixo: 
````
# Clone o repositório
git clone https://github.com/jhonvss1/DengueAlertApiFrontEnd
# Acesse o diretório do projeto
cd nome-do-repositorio

# Instale as dependências
npm install  # ou yarn install
````

## Configuração 
````
API_BASE_URL = https://localhost:7024/api/Dengue/
````

## 🔌 Uso
  Para obter dados:
````
  getAllAlerts(): Observable<DengueAlert[]> {
    return this.http.get<DengueAlert[]>(this.apiUrl);
  }
````

## Estrutura do projeto 
````
├── src/
│   ├── app/
│   │   ├── cards/dengue/
│   │   │   ├── dengue.component.css
│   │   │   ├── dengue.component.html
│   │   │   ├── dengue.component.ts
│   │   │   ├── dengue.module.ts
│   │   ├── model/
│   │   │   ├── dengue-alert.ts
│   │   ├── services/
│   │   │   ├── dengue.service.ts
│   │   ├── utils/
│   │   │   ├── date-util.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   ├── assets/
│   ├── environment/
│   │   ├── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
├── .editorconfig
├── package.json
└── README.md
````
Feito por mim. Pode ficar a vontade para usá-lo e contribuir comigo neste projeto. 
