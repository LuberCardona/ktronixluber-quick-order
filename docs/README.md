# quick-order

Quick-order es un componente que permitirá realizar una compra rápida ingresando en el input un número de SKU.

![quickOrder](https://user-images.githubusercontent.com/66228518/197631711-4021ceb9-3a47-4a8d-86f1-de208e88e0ea.JPG)

## Configuración

### Paso 1 - Configuración Básica
Ingresar al siguiente repositorio en GitHub [react-app-template](https://github.com/vtex-apps/react-app-template) y crear un nuevo repositorio usando este template

### Paso 2 - Clonación del repositorio
Abrir la terminal e ingresar el comando git clone mas la URL del repositorio en gitHub así:  
git clone [url](), posteriormente acceda a la carpeta del proyecto en su repositorio local.

### Paso 3 - Editar el Manifest.json
Modificar en el archivo manifest.json el valor del vendor con el nombre correspondiente a su vendor y el valor del name con el nombre con el que va a usar su componente. Opcionalmente puede modificar la versión, el título y agregar una descripción.

Ejemplo:  
{  
  "vendor": "itgloberspartnercl",  
  "name": "quick-order",  
  "version": "0.0.1",  
  "title": "Compra rápida",  
  "description": "Input que permitirá una compra rápida en mi sitio VTEX IO"   
}

Adicionalmente debe asegurarse de tener en los builders el store en su version 0.x así:

"builders":{   
"store": "0.x"   
} 

### Paso 4 - Editar el Package.json
Modificar en los archivos package.json ubicado de manera global asi como el que esta ubicado en la carpeta de react, el nombre y la versión de igual forma como fueron modificados en el archivo manifest.json

Ejemplo:  
{    
  "version": "0.0.1",  
  "name": "quick-order"    
}

### Paso 5 - Instalar apps necesarias
En la terminal ubicarse en la carpeta react con el comando cd react y luego de estar allí digitar en la terminal la palabra yarn, con esto se hará la instalación de los modulos de node necesarios para su aplicación. Cierre su editor y abra nuevamente su proyecto y verifique que dentro de la carpeta de react haya quedado instalada la carpeta de node_modules.

### Paso 6 - Ejecute un preview de la tienda
En su terminal digite el comando vtex link, si su aplicación es lanzada sin ningún error, en su ternimal aparecerá la siguiente información:   
(info: App linked successfully). 

Para usar la aplicación en su tienda debe adicionar en el archivo manifest.json la dependencia correspondiente al componente.

Ejemplo:  
"dependencies": {  
 "itgloberspartnercl.quick-order": "0.x"    
}

Luego podrá renderizar el componente en su tienda donde lo requiera.

## Dependencies
1. "vtex.checkout-graphql": "0.x"  
2. "vtex.search-graphql": "0.x"  
3. "vtex.css-handles": "0.x"    

## Store Component Apps  
Ninguna

## Custom Apps  
Ninguna

## Contributors
1. Luber María Cardona Vargas
