const app = document.getElementById("app")
let logo = document.createElement('img')
function header() {
      logo.src = 'https://pbs.twimg.com/profile_images/1221179221608927237/sgq6RZ2I_400x400.jpg'
      logo.className = "logo";
      logo.alt = "Benyou's picture from twitter"
      let header = document.createElement("header");
      header.className="header";
      const headline = document.createElement("h3");
      headline.className = "headline"
      headline.innerHTML = `Ben<span style="color: var(--base)">You</span>`;
      header.append(logo,headline)
      app.append(header);
}
function consoleLog() {
      console.log("%c 0h my g😮d!, what are you doing down here?", "font-weight: bold; font-size: 50px;color: #ffc600; text-shadow: 3px 3px 0 rgb(217,31,38) ,")
}
consoleLog();

header();
