# mautic-form-masks

JQuery Masks on Mautic Forms Fields


## Install

Verify if you have jQuery on your website, if not include on your head tag:

````html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
````

Now include this two lines on your HEAD tag AFTER the JQuery:

````html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
  <script src="https://cdn.rawgit.com/powerticmkt/mautic-form-masks/508e1c4c/mautic-form-masks.js"></script>
````

## Usage

Basicaly you need to include an mautic field with this name patterns:

 - cep
 - cpf
 - cnpj
 - telefone

 The `mautic-form-masks` script will automatically recognize these input names and apply the mask.