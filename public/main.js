// run `node index.js` in the terminal

// console.info('tes');

//  baut array yang menampung bnyak objek

let note_data = [
{
  id : 1,
  note : 'ini paragraf 1'
},
{
  id : 2,
  note : 'ini paragraf 2'

},
{
  id : 3,
  note : 'ini paragraf 3'
}
];
// tampung untuk id root
let root = document.getElementById('root');

// buat elemen dgn string
let Card = function(content){
  return `
  <div class='card'> ${content} </div>
  `
}

let Card2 = function(id, content){
  return`
  <div class='card'> ${id} ${content}</div>
  `
}

// rander objek pada array ke html 
note_data.forEach((elem)=>{
  root.innerHTML += Card2(elem.id, elem.note);
});