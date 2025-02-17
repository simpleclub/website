
// CSS import
import '../css/main.scss'

// JavaScript import
import './components/navbar.js'
import './components/wistiaVideos.js'


/////////////////////////////////////////
// Adding titles to images
////////////////////////////////////////
$('img').each(function(){
	// take alt text of each image
	let imageAltText = $(this).attr('alt');
	// add as title to each image
	$(this).attr('title', imageAltText);
});

/////////////////////////////////////////
// No follow external links
////////////////////////////////////////
function setRelAttribute() {
	var elems = document.body.getElementsByTagName('a');
	for (var i = 0; i < elems.length; i++) {
	  var elem = elems[i];
	  var re = /simpleclub\.com/; // Match any URL containing "simpleclub.com"
	  var isInternal = re.test(elem.href);
	  if (!isInternal) {
		elem.rel = 'noopener noreferrer nofollow';
	  }
	}
}
setRelAttribute();
  


/////////////////////////////////////////
// Remove webflow responsive images
////////////////////////////////////////
$('img').each(function(){
	$(this).removeAttr('sizes');
	$(this).removeAttr('srcset');
});

