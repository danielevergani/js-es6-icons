// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// 
// Milestone 2
// Coloriamo le icone per tipo
// 
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];


// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

// var iconTemplate = $(".icona");

// iconTemplate.find("i").addClass("fas fa-cat");
// iconTemplate.find(".title").text("CAT");

// $(".icons").append(iconTemplate);


/*icons.forEach((element) => {

  const iconTemplate = $(".template .icona").clone();

  var {name, family, prefix, color} = element;

  iconTemplate.find("i").removeClass().addClass(`${family} ${prefix}${name} ${color}`);
  iconTemplate.find(".title").text(`${name}`);

  $(".icons").append(iconTemplate);

});*/



// Milestone 2
// Coloriamo le icone per tipo

const color = [
  {
    category: "food",
    color: "yellow"
  },
  {
    category: "animal",
    color: "green"
  },
  {
    category: "beverage",
    color: "red"
  }
];


const coloredIcon = icons.map((element) => {

  var coloreIcona;

  color.forEach((item) =>{

    if ( item.category == element.category ) {
      coloreIcona = item.color;
    }

  });

  element.color = coloreIcona;

  return element

});

coloredIcon.forEach((element) => {

  insElem(element);

});

const categorie = [];

coloredIcon.forEach((element) => {

  if (categorie.includes(element.category) == false ){
    categorie.push(element.category);
  }

  return categorie;

});

for ( let i = 0; i<categorie.length; i++){
  $("select").append(`<option value="${categorie[i]}">${categorie[i]}</option>`);
}

$("select").change(function() {

  let filteredColIcons = coloredIcon.filter((item) =>{
    return item.category == $(this).val()
  });

  if (filteredColIcons.length == 0){
    filteredColIcons = coloredIcon;
  }

  $(".icons").html("");

  filteredColIcons.forEach((element) => {
    
    const iconTemplate = $(".template .icona").clone();

    var {name, family, prefix, color} = element;

    iconTemplate.find("i").removeClass().addClass(`${family} ${prefix}${name} ${color}`);
    iconTemplate.find(".title").text(`${name}`);

    $(".icons").append(iconTemplate);
  });

  
});

function insElem (item){
  const iconTemplate = $(".template .icona").clone();

  var {name, family, prefix, color} = item;

  iconTemplate.find("i").removeClass().addClass(`${family} ${prefix}${name} ${color}`);
  iconTemplate.find(".title").text(`${name}`);

  $(".icons").append(iconTemplate);
}