## Calculator Assignment 

---
### Index
- [About](#about)
- [Requirements](#requirements)
- [Composer Installation](#composer-installation)
- [Requirements](#requirements)
- [Example](#example)
- [Contribute](#contribute)
- [Versioning](#versioning)
- [Additional information](#additional-information)
---

## Description

A Calculator with basic arithmetic operations (addition, subtraction, multiplication and division) and brackets. This calculator
keeps track of 10 latest calculations done in the history section. 
The frontend is under the path resources/scripts. 

## Requirements

To use the Calculator API, the following things are required:

+ PHP >= 7.4

## Preparation
The application requires that node and npm are installed beforehand. Also you will need a local setup of postgres database.

Node version: ```14.19.2```


## Environment

Environment setup is as easy as it comes. There is already a ```.env.example``` file inside the repository. First step would be to copy that file to another named ```.env```.
```

```

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

### POST ```/calculator/getResult```

Here you can retrieve your current calculation result

### GET ```/calculator/getRecentCalculations```

Here you can retrieve your latest calculations

### DELETE ```/calculator/destroy/:id```

Here you can delete specific calculation in the history.

### DELETE ```/calculator/destroyAll/```

Here you can delete all previous calculations in the history.
