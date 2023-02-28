## Calculator Assignment 

## Description

A Calculator with basic arithmetic operations (addition, subtraction, multiplication and division) and brackets. This calculator
keeps track of 10 latest calculations done in the history section. 
The frontend is under the path resources/scripts. 

## Laravel 

You will need to install the passport 
```
php artisan passport:install
```
For the database you need to run the migrations
```
php artisan migrate
```
For seeding the tables you need to run the ``` db:seed ``` command
```
php artisan db:seed
```
also run the optimization command
```
php artisan optimize
```

## React

You will need to install the npm
```
npm i 
```
and start
```
npm start
```

# Docker Preparation

I assume you have installed Docker and it is running.

See the [Docker website](http://www.docker.io/gettingstarted/#h_installation) for installation instructions.

### Laravel Docker

Start by installing sail with the following command

```
php artisan sail:install
```
next choose the database ``` [0] - MySQL ``` and then you run the following command 

```
./vendor/bin/sail up 
```

### React Docker

Since the frontend directory is under the path ```resources/scripts```, you need to run the command  
```
cd resources/scripts/ && docker compose -f "docker-compose.yml" up -d --build
```
#### for starting the backend: 
```
php artisan serve --host=0.0.0.0 --port=80
```
#### for starting the frontend:
```
cd resources/scripts && npm start
```

## Environment

Environment setup is as easy as it comes. There is already a ```.env.example``` file inside the repository. First step would be to copy that file to another named ```.env```.

[//]: # (## Installation)

[//]: # ()
[//]: # (```bash)

[//]: # ($ npm install)

[//]: # (```)

[//]: # ()
[//]: # (## Running the app)

[//]: # ()
[//]: # (```bash)

[//]: # (# development)

[//]: # ($ npm run start)

[//]: # ()
[//]: # (# watch mode)

[//]: # ($ npm run start:dev)

[//]: # ()
[//]: # (# production mode)

[//]: # ($ npm run start:prod)

[//]: # (```)

## App endpoints and how to use them

### POST ```/user/login```

Here you can log in with your user and get a bearer token as a response where you have to use it for all other routes
```
Example Request Body:
{
    "email": "eramah101@gmail.com,
    "password": "VerySecurePassw0rd!",
}
```

### POST ```/calculator/calculate```

Here you can retrieve your current calculation result

### GET ```/calculator/getCalculations```

Here you can retrieve your latest calculations

### DELETE ```/calculator/destroy/:id```

Here you can delete specific calculation in the history.

### DELETE ```/calculator/destroyAll/```

Here you can delete all previous calculations in the history.
