# NewsHub API
Backend API's for fetching latest news articles from [newsApi](https://newsapi.org/) which mainly build with Node.JS &amp; Express
## Prerequisites

If you don't have a [**NewsAPI**](https://newsapi.org) account or api token available, please follow the steps in order to get the app running!

### Step 1:

[Login](https://newsapi.org/login) or [Register](https://newsapi.org/register) for [NewsAPI](https://newsapi.org)

### Step 2:

Go to [your account page](https://newsapi.org/account) and copy your API Token

### Step 3:

Replace `SECRET_KEY` with your key in `.src/app_constant.js` file 

```sh
SECRET_KEY="YOUR_NEWS_API_KEY" 
```
## Installation

### Clone the repo!

```sh
git clone git@github.com:dineshvm/express-newsapi.git
```

### Install dependencies

```sh
npm i
```
> OR `yarn`

### Start the App

```sh
npm start
```
Open your browser and go to http://localhost:8090 .App must be up and running

