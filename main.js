/*
* Change the font color of the paragraph to light blue.
* Change the font size of the heading to 48px.
* Change the text of the paragraph to be the following Hipster Ipsum:
 */

let testText = "Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress."

let paragraphText = document.querySelector('p')
paragraphText.style = "color: green"
paragraphText.innerText = testText;

let headerText = document.querySelector('h1')
headerText.style = "font-size: 48px;"

/*
* Change the 13th item to be half transparent.
* Change the 3rd item's text to say:
> I say, "Hi!"
* Change the image below the list to be [this image](http://www.tioxic.com/wp-content/uploads/trex_4.jpg).
* Change that image's size to be 300 pixels high.
* Using HTML, add a new image of your choice below or to the right of the other image
* Now make that image 300 pixels high (with JS)
* Using HTML, add a 16th `<li>` to the list. Once again with HTML, give it an ID that follows the others' numbering scheme.
* Now, (with JS) give it the same class as the others.
* Give that `<li>` the following text:
> Won't get fooled again.
 */

let transparentItem = document.querySelector("#item-13")
transparentItem.style = "opacity: .5";

let thirdItemText = document.querySelector('#item-3')
thirdItemText.textContent = "I say, 'Hi!' "; 

let image = document.querySelector('img')
image.src = "http://www.tioxic.com/wp-content/uploads/trex_4.jpg";
image.style = "height: 300px";  
image.display = "inline-block"

let newImage = document.createElement('img')
newImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Zv55PFhsG7IlsDg-Kwj69Vmeq-bEGszKew&usqp=CAU";
newImage.style = "height: 300px";
newImage.display = "inline-block"
image.append(newImage)

let unorderListElement = document.querySelector('ul');
let newListItem = document.createElement('li')
newListItem.id = "item-16"
newListItem.innerText = 16
newListItem.class = "item"
newListItem.textContent = "Won't get fooled again"

unorderListElement.append(newListItem)






