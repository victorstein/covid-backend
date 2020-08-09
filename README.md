# COVID-19 TypeGraphQL API

This is yet another COVID-19 API but with a sprinkle of TypeGraphQL into the mix to spice things up.

## Live Example

You may find a live example of the API and a runing GraphQL Playground [Here](https://yetanother-covid-api.herokuapp.com/graphql).

## Installation

* Clone the repo
	```git clone https://github.com/victorstein/covid-backend.git```

* Enter the repo directory
	```cd covid-backend```

* Install the dependencies
	```npm install```

* Create a .env file with the following set up. (examples in parentheses)


| KEY | TYPE | DESCRIPTION | REQUIRED
| ------ | ------ | ------ | ---------
PORT |Int| Server Port | False
NODE_ENV  |String| Node environment | False
API_KEY  |string| API key to use with [COVID-19](https://rapidapi.com/api-sports/api/covid-193) API | True
ALLOWED_ORIGINS | comma separated String | for example, http:// localhost, https://frontend.com | False


* Finally, just run ```npm run dev``` for development, ```npm run build``` for webpack, or ```npm start``` (once built) to run from the dist folder

## Contributing

Feel free to submit your PRs for review. There's currently no template for contribution. As the project grows we will look into further implementation of this.

## Deployment

If any further deployment of the API is needed feel free to contact the Repo owner. If you have access to the heroku app, you may add it to your remotes and usse the deployment scripts in package.json.

## Authors

<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://victorstein.github.io"><img src="https://avatars3.githubusercontent.com/u/11080740?v=3" width="100px;" /><br /><sub><b>Alfonso Gomez</b></sub></a><br /><a href="#question" title="Answering Questions">💬</a> <a href="#" title="Documentation">📖</a><a href="#tool" title="Tools">🔧</a> <a href="#review" title="Reviewed Pull Requests">👀</a> <a href="#maintenance" title="Maintenance">😎</a></td></table>

## License

This project is licensed under the ISC License 