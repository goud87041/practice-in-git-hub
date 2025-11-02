const imageTag = document.getElementById("cardImage");
console.log(imageTag.src);

const requestURL = "https://api.github.com/users/goud87041";
const xhr = new XMLHttpRequest();

xhr.open("GET", requestURL);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 ) {
    const data = JSON.parse(this.responseText);
    const avatarURL = data.avatar_url;
    const followers = data.followers;
    const userName = data.login;

    console.log(avatarURL);

    imageTag.src = avatarURL;

    document.getElementById("cardName").textContent = `GitHub user: ${userName}`;
    document.getElementById("cardFlowers").textContent = `${followers} followers`;
  }
};

xhr.send();
