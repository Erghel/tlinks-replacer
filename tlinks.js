let anchors = document.getElementsByTagName('a');

for (let i = 0; i < anchors.length; i++) {
    anchors[i].href = anchors[i].href.replace("t.me", "tlinks.run");
}