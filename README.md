## Herramientas 
- ColorPicker
- https://color.adobe.com/create/color-wheel/
- HTML5 Boilerplate (https://github.com/h5bp/html5-boilerplate)
- https://coverr.co/
- http://flexboxgrid.com/
- Google Fonts
- Formspree (https://formspree.io/)


## Repos
- https://github.com/tim-montague/form_object
- https://github.com/tim-montague/form_object/blob/master/form_object.js


## Instalacion requeridas
- rubyinstaller (https://rubyinstaller.org/downloads/)
- Node (https://nodejs.org/es/)
- NPM
- Babel (https://babeljs.io/)

- Al momento de tener instalado el rubyinstaller se ejecutaran los siguientes comandos:
gem install haml [HAML http://haml.info/download.html]
gem install sass [SASS https://sass-lang.com/ruby-sass]

- Cuando se tenga instalado node y npm verificar con los siguiente comandos:
node -v
npm -v

- Crear el archivos package.json y agregar: {}
En la raiz del proyecto ejecutar los siguientes comandos para instalar babel
npm install --save-dev @babel/core @babel/cli @babel/preset-env

- Crear el archivo .babelrc y agregar el siguiente codigo:
{"presets": ["@babel/preset-env"]}

## Tecnologias Usadas
- HAML (http://haml.info/)
- SASS (https://sass-lang.com/)
- Bootstrap 3 Customize (https://getbootstrap.com/docs/3.4/customize/)
- jQuery 3.3.1 (https://jquery.com | https://code.jquery.com/)

## Extenciones Visual Code
- Better Haml
- Ruby Haml
- Sass

## Compilar HAML / SASS / ES6-->ES5 (BABEL)
Introduction to Haml
https://www.youtube.com/watch?v=ILt6q_o2hts
Comando ==> haml index.haml index.html

Sass
https://www.youtube.com/watch?v=4tSKbEVWgzk&list=PLhSj3UTs2_yVyMlZyW-NAbgjtgAgLBzFP&index=2
Comando ==> sass main.sass:main.css 
Comando ==> sass main.scss:main.css 
Comando ==> sass --watch main.sass:main.css
Comando ==> sass --watch main.scss:main.css

ES6-->ES5 (BABEL)
https://www.youtube.com/watch?v=YNnE5FS79KQ&list=PLhSj3UTs2_yX_ct0OfHrmMwKL8wpz-N2j&index=2
https://www.youtube.com/watch?v=KGjS6oTgOwQ&index=3&list=PLhSj3UTs2_yX_ct0OfHrmMwKL8wpz-N2j
Comando ==> npm run build (build es depende si asi lo nombro en package.json)