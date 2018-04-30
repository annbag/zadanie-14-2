/*var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, 
			React.createElement('li', {},
				React.createElement('h2', {}, 'Harry Potter'),
				React.createElement('p', {}, 'Film o czarodzieju')
			),
			React.createElement('li', {},
				React.createElement('h2', {}, 'Król Lew'),
				React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
			)
		)
	);*/

var movies = [
	{
		id: 1,
		title : 'Harry Potter',
		desc: 'film o czarodzieju',
		img: 'images/harry_potter.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: 'images/Król_Lew.jpg'
	},
	{
		id: 3,
		title: 'Shrek',
		desc: 'film o zielonym ogrze',
		img: 'images/Shrek.jpg'
	},
	{
		id: 4,
		title: 'Epoka lodowcowa',
		desc: 'Film o leniwcu, tygrysie i mamucie',
		img: 'images/Epoka_lodowcowa.jpg'
	},
	{
		id: 5,
		title: 'Alvin i wiewiórki',
		desc: 'Film o wiewiórkach',
		img: 'images/alivn.jpg'
	}
]; 
var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id}, 
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src:movie.img})
	);
});
var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul',{}, moviesElements)
	);
ReactDOM.render(element, document.getElementById('app'));