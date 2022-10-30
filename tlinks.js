// tlinks script

let links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
    links[i].href = links[i].href.replace("t.me", "tlinks.run");
}