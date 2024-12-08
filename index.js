console.log("Why hello there!");

var numToName = {
	0 : "anaclock",
	1 : "digiclock",
	2 : "lotlblanket",
	3 : "lotlspace",
};

var attrib = {
	"anaclock" : "<a href='internal/assets/10107 clock square.gif' target='_blank'>Image</a> by 10:10:07",
	
	"digiclock" : "<a href='internal/assets/LMR digital clock 32x no loop.gif' target='_blank'>Image</a> by 10107 (<a href='internal/assets/LMR digital clock 32x loop.gif' target='_blank'>Looping version</a>) - created with <a href='http://piskelapp.com' target='_blank'>Piskel</a>",
	
	"lotlblanket" : "<a href='https://www.deviantart.com/drawersofdrawing/art/Axolotl-Copertina-1105342801' target='_blank'>Image</a> by <a href='https://www.deviantart.com/drawersofdrawing/gallery' target='_blank'>DrawersOfDrawing</a> (DeviantArt) - Go support this artist!",
	
	"lotlspace" : "<a href='https://printerval.com/ca/space-axolotl-kawaii-mousepad-pastel-goth-japan-anime-comic-mousepad-p83378' target='_blank'>Mousepad</a> by <a href='https://printerval.com/ca/shops/jackson-johnny' target='_blank'>Jackson Johnny</a> (Printerval) - Go support this artist!",
};

var imgtags = {
	"anaclock" : "<img src='internal/assets/10107 clock square.gif' width=400 height=400>",
	"digiclock" : "<img src='internal/assets/LMR digital clock 32x no loop.gif' width=540 height=260>",
	"lotlblanket" : "<img src='internal/assets/axolotl_copertina_by_drawersofdrawing_dia3byp-pre.png' width=400 height=400>",
	"lotlspace" : "<img src='internal/assets/617a9f3ba361c-1635426107-617a9f3bca051.webp' width=400 height=400>",
};

function showRandomImage() {
	var idx = Math.floor(Math.random() * Object.keys(numToName).length);
	var name = numToName[idx];
	var pictureSpan = document.getElementById("image");
	var attribSpan = document.getElementById("attribution");
	pictureSpan.innerHTML = imgtags[name];
	attribSpan.innerHTML = attrib[name];
}