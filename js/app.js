const request = superagent;
var url = 'https://randomuser.me/api/?results=50';
var list = document.querySelector('.users-list');
var button = document.getElementById('user');

	button.addEventListener('click', function (e) {
	  request.get(url).then(function (names) {
      var elements = names.body.results;
        list.innerHTML = "";
        elements.forEach(function (element) {
          var section = document.createElement('article');
          var country = document.createElement('span');
          var mail = document.createElement('h6');
          console.log(element.nat);
          console.log(element.email)
          country.innerHTML = element.nat;
          mail.innerHTML = element.email;
          section.appendChild(country);
          section.appendChild(mail);
          list.appendChild(section);  
          });
      });
  })