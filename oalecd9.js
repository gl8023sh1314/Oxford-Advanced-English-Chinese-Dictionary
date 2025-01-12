/////////////////////////////////////////////////////////////////////////////////////////
/*toggle image*/
function getElementByAttr(t, e, i) {
	for (var n = document.getElementsByTagName(t), d = [], r = 0; r < n.length; r++) n[r].getAttribute(e) == i && d.push(n[r]);
	return d
}

function expand_big(t) {
	var e = getElementByAttr("div", "idd", t.getAttribute("idd"));
	e[0].setAttribute("style", "display:none"), e[1].setAttribute("style", "display:block")
}

function expand_thumb(t) {
	var e = getElementByAttr("div", "idd", t.getAttribute("idd"));
	e[1].setAttribute("style", "display:none"), e[0].setAttribute("style", "display:block")
}

/*toggle inflection*/
function toggle_infl(ele) {
	var x = ele.parentElement.parentElement.parentElement.querySelector("res-g vp-gs");
	style = window.getComputedStyle(x);
	display = style.getPropertyValue('display');

	if (x.style.display === "none"||display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
  
	if ( ele.className.match(/(?:^|\s)Clicked(?!\S)/) )
	{ele.className =ele.className.replace( /(?:^|\s)Clicked(?!\S)/g , '' )}
	else{ele.setAttribute("class", "Clicked");}
}

// 通用的折叠功能函数
function addToggleFeature(selector) {
	const blocks = document.querySelectorAll(selector);
	blocks.forEach(block => {
		const boxBlock = block.querySelector('boxblock');
		if (boxBlock) {
			boxBlock.addEventListener('click', function() {
				block.classList.toggle('expanded');
			});
		}
	});
}

// DOMContentLoaded事件处理
document.addEventListener('DOMContentLoaded', function() {
	// 为idm-gs-blk和pv-gs-blk添加折叠功能
	addToggleFeature('idm-gs-blk, pv-gs-blk');

	// unbox的折叠功能
	const unboxElements = document.querySelectorAll('unbox[type="synonyms"], unbox[type="colloc"], unbox[type="grammar"], unbox[type="wordfamily"], unbox[type="more_about"]');
	unboxElements.forEach(element => {
		element.addEventListener('click', function(e) {
			if (e.target === this || e.target === this.querySelector(':before')) {
				this.classList.toggle('expanded');
			}
		});
	});
});

