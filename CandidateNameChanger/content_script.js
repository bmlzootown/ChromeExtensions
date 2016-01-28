//window.onload = function () {
	
var elements = document.getElementsByTagName('*');
var content = document.body.textContent || document.body.innerText;

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
			var randNames = ['Rand Paul', 'RandPaul', 'Randal Howard Paul', 'Randal Howard "Rand" Paul', 'Rand_Paul', 'rand-paul', 'team rand', 'team_rand', 'teamrand', 'standwithrand'];
			var trumpNames = ['Trump'];
			var hillaryNames = ['Hillary'];
			var tedNames = ['Ted Cruz', 'Rafael Edward "Ted" Cruz', 'tedcruz', 'Rafael Edward Cruz', 'Rafael E Cruz', 'Rafael E. Cruz', 'rafaelecruz'];
			var tedHashtags = ['CruzCrew', 'CaucusForCruz', 'iacaucus'];
			
			var replacedText;
			var replacedText2;
			var replacedText3;
			var replacedText4;
			var replacedText5;
			var regex = new RegExp(randNames.join("|"),"gi");
			var regex2 = new RegExp(trumpNames.join("|"),"gi");
			var regex3 = new RegExp(hillaryNames.join("|"),"gi");
			var regex4 = new RegExp(tedNames.join("|"),"gi");
			var regex5 = new RegExp(tedHashtags.join("|"),"gi");
			
			replacedText = text.replace(regex, 'RuPaul');
			replacedText2 = text.replace(regex2, 'Duck');
			replacedText3 = text.replace(regex3, 'Hitlery');
			replacedText4 = text.replace(regex4, "Satan's Underpants");
			replacedText5 = text.replace(regex5, '5DorraSuckySucky');

        		if (replacedText !== text) {
                		element.replaceChild(document.createTextNode(replacedText), node);
            		} else if (replacedText2 !== text) {
				var hasDonald = content.toLowerCase().indexOf("donald") !== -1;
				if (hasDonald) {
					element.replaceChild(document.createTextNode(replacedText2), node);
				}
			} else if (replacedText3 !== text) {
				var hasHillary = content.toLowerCase().indexOf("hillary") !== -1;
				if (hasHillary) {
					element.replaceChild(document.createTextNode(replacedText3), node);
				}
			} else if (replacedText4 !== text) {
				var hasTed = content.toLowerCase().indexOf("ted") !== -1;
				if (hasTed) {
					element.replaceChild(document.createTextNode(replacedText4), node);
				}
			} else if (replacedText5 !== text) {
				element.replaceChild(document.createTextNode(replacedText5), node);
			}
			
        }
    }
}
	
//}
