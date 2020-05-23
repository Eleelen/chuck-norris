document.addEventListener('DOMContentLoaded', function () {
      const apiUrl = 'https://api.chucknorris.io/jokes';
      let selectedJokeType = 'random';
      let searchQuery;

      document.querySelector('[data-search-field]').addEventListener('change', function() {
            searchQuery = this.value;
      });

      const selectJoke = () => {
            const triggers = document.querySelectorAll('[data-joke-type]');
            [].forEach.call(triggers, item => {
                  item.addEventListener('click', () => {
                        let itemType = item.getAttribute('data-joke-type');
                        selectedJokeType = itemType.length ? itemType : false;

                  })
            });
      }

      const showData = data => {
            const result = document.querySelector('#output');
            const favourite = document.querySelector('#output-favourite');

            const joke = document.createElement('div');
            const joke_icon = document.createElement('div');
            const joke_body = document.createElement('div');
            const icon = document.createElement('div');
            const like = document.createElement('div');
            const id = document.createElement('div');
            const value = document.createElement('div');
            const updated_at = document.createElement('div');
            const categories = document.createElement('div');
            
            
            joke.className = 'joke';
            joke_icon.className = 'joke__icon';
            joke_body.className = 'joke__body';
            like.className = 'joke__img-heart';
            icon.className = 'joke__img-icon';
            value.className = 'joke__value';
            id.className = 'joke__id';
            updated_at.className = 'joke__updated_at';
            categories.className = 'joke__categories';
            favourite.className = 'favourite__joke';

            icon.innerHTML = '<img src="./img/icon-white.png" alt="">';
            like.innerHTML = '<img src="./img/heart.png" alt="">';
            //id.innerHTML = 'ID:' + ' ' + data.id;
            id.innerHTML = `<a href="${data.url}">${data.id}</a>`;
            value.innerHTML = data.value;
            updated_at.innerHTML = 'Last update:' + ' ' + data.updated_at + ' ' + 'hours ago';
            categories.innerHTML = data.categories;

            joke.appendChild(like);
            joke.appendChild(joke_icon);
            joke.appendChild(joke_body);
            joke_icon.appendChild(icon);
            joke_body.appendChild(id);
            joke_body.appendChild(value);
            joke_body.appendChild(updated_at);
            joke_body.appendChild(categories);
            result.appendChild(joke);

      }

      const getJoke = () => {
            let endpoint = false;
            if(selectedJokeType === 'random') {
                  endpoint = `${apiUrl}/random`;
            } else if (selectedJokeType === 'search') {
                  endpoint = `${apiUrl}/search?query=${searchQuery}`;
            } else {
                 endpoint = `${apiUrl}/random?category=${selectedJokeType}`; 
            }

            if(!endpoint || !selectedJokeType || !searchQuery.length) throw new Error('Select a joke type');
            fetch (endpoint)
                  .then(response => {
                        if (!response.ok) {
                              throw Error(response.statusText);
                        }
                              return response;
                        })
                 .then(responce => responce.json())
                 .then(data => {
                        if(data.total) {
                              showData(data)
                        } else {
                              throw new Error('Can`t find jokes :(');
                        }
                  })
                 .catch(error => {
                        throw new Error('Error')}
                  )
      }

      selectJoke();
      document.getElementById('get-joke').addEventListener('click', event => {
            event.preventDefault();
            getJoke();
      });
            
   })
      




            /*function addToFavorite(){
        const reqObj = { method: 'DELETE' };
        fetch(apiUrlRandom, reqObj)
        .then( joke.remove() )*/
       /* 
    
      }
            
      }
            getJoke();
            document.querySelector(".get__joke").onclick = getJoke;
      })

/*function funс () {
    var rad=document.getElementsByName('r1');
    for (var i=0;i<rad.length; i++) {
        if (rad[i].checked) {
            document.write('Выбран '+i+' radiobutton');
        }
    }
}*/


     