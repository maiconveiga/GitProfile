document.addEventListener('DOMContentLoaded', function(){
    const link = document.querySelector('#link');

    const photo = document.querySelector('#photo');
    const name = document.querySelector('#name');
    const user = document.querySelector('#user');
    const repositories = document.querySelector('#repositories');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');

    fetch('https://api.github.com/users/maiconveiga')
    .then(function(r){
        return r.json();
    })
    .then(function(json){
        name.innerText = json.name;
        user.innerText = json.login;
        photo.src = json.avatar_url;
        followers.innerText = json.followers;
        following.innerText = json.following;
        repositories.innerText = json.public_repos;
        link.href = json.html_url;
    })
})