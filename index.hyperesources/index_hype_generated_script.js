//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="index.hyperesources",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_674F||null!=window.HYPE_dtl_674F)||true==!0||null!=c&&10>c;a=!0==d?"HYPE-674.full.min.js":"HYPE-674.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_674"+c,"HYPE_dtl_674"+c,a,d),false==!0&&(a=a||k("HYPE_w_674","HYPE_wdtl_674","HYPE-674.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_674","HYPE-674.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"cardClicked",source:"function(hypeDocument, element, event) {\t\n\tvar bgString = hypeDocument.getElementById(element.id).style.backgroundImage.search(\"cardBack\");\n\t\n\tif ((gblGameState != 0) && (gblGameState != 3) && (bgString != -1)) {\n\t\tvar temp1 = element.id;\n\t\tvar temp2 = temp1.slice(8);\n\t\tvar temp3 = \"url('\" + hypeDocument.resourcesFolderURL() + \"/\" + gblShuffledList[temp2] + \"')\";\n\n\t\tif (gblGameState == 1) {\n\t\t\thypeDocument.getElementById(element.id).style.backgroundImage = temp3;\n\t\t\tgblFirstChoice = gblShuffledList[temp2];\n\t\t\tgblFirstCardPos = element.id;\n\t\t\thypeDocument.startTimelineNamed('match1');\n\t\t\tgblGameState = 2;\n\t\t} else if (gblGameState == 2) {\n\t\t\tgblSecondChoice = gblShuffledList[temp2];\n\t\t\tif (gblFirstChoice == gblSecondChoice) { // FOUND A MATCH\n\t\t\t\thypeDocument.getElementById(element.id).style.backgroundImage = temp3;\n\t\t\t\tgblPairsRemaing--;\n\t\t\t\tif (gblPairsRemaing == 0) {\n\t\t\t\t\tclearInterval(gblTimerInterval);\n\t\t\t\t\tgblFinalScore = parseInt(hypeDocument.getElementById(\"timerValue\").innerHTML);\n\t\t\t\t\tvar messageString = \"YOU FINISHED IN<br/>\" + gblFinalScore + \" SECONDS!\";\n\t\t\t\t\thypeDocument.getElementById(\"finishedMessage\").innerHTML = messageString;\n\t\t\t\t\tgblGameState = 0;\n\t\t\t\t\thypeDocument.startTimelineNamed('gameOver');\n\t\t\t\t} else {\n\t\t\t\t\thypeDocument.startTimelineNamed('match2');\n\t\t\t\t}\n\t\t\t\tgblGameState = 1;\n\t\t\t} else { // CARDS DID NOT MATCH\n\t\t\t\thypeDocument.startTimelineNamed('badMatch');\n\t\t\t\thypeDocument.getElementById(element.id).style.backgroundImage = temp3;\n\t\t\t\tgblGameState = 3;\n\t\t\t\tgblSecondCardPos = element.id;\n\t\t\t\tgblCardBack = \"url('\" + hypeDocument.resourcesFolderURL() + \"/cardBack.png')\";\n\t\t\t\t\n\t\t\t\tsetTimeout(function() { \n\t\t\t\t\thypeDocument.getElementById(gblFirstCardPos).style.backgroundImage = gblCardBack; \n\t\t\t\t\thypeDocument.getElementById(gblSecondCardPos).style.backgroundImage = gblCardBack;\n\t\t\t\t\thypeDocument.startTimelineNamed('twoCardFlip');\n\t\t\t\t\tgblGameState = 1; \n\t\t\t\t}, 1500);\n\t\t\t}\n\t\t}\n\t}\n\n}",identifier:"29"},{name:"initializeMain",source:"function(hypeDocument, element, event) {\t\n\tvar arrayOfNums = [];\n\tvar randomIndex;\n\tvar swapValue;\n\tvar cardZIndex = 1;\n\tvar dealSpeed;\n\tvar currentCard;\n\t\n\t// Clear card-throwing interval during credits sequence\n\tclearInterval(gblCardThrower);\n\t\n\t// Make \"Play Again?\" and \"Credits\" buttons unclickable\n\thypeDocument.getElementById(\"playAgainButton\").style.pointerEvents = \"none\";\n\thypeDocument.getElementById(\"creditsButton\").style.pointerEvents = \"none\";\n\t\n\t// Reset all cards' z-rotation to zero degrees\n\tfor (var i = 0; i < gblNumCards; i++)\n\t{\n\t\tcurrentCard = hypeDocument.getElementById(\"position\" + i);\n\t\thypeDocument.setElementProperty(currentCard, 'rotateZ', 0);\n\t}\n\t\n\tgblOrderedList = new Array(\t\"card0.svg\", \"card0.svg\", \"card1.svg\", \"card1.svg\", \"card2.svg\", \"card2.svg\", \n\t\t\t\t\t\t\t\t\"card3.svg\", \"card3.svg\", \"card4.svg\", \"card4.svg\", \"card5.svg\", \"card5.svg\", \n\t\t\t\t\t\t\t\t\"card6.svg\", \"card6.svg\", \"card7.svg\", \"card7.svg\", \"card8.svg\", \"card8.svg\", \n\t\t\t\t\t\t\t\t\"card9.svg\", \"card9.svg\");\n\t\n\tgblShuffledList = [];\n\tvar i = 0; \n\tfor (i=0; i < 20; i++) {\n\t\tvar temp1 = Math.floor(Math.random()*(gblOrderedList.length));\n\t\tgblShuffledList[i] = gblOrderedList[temp1];\n\t\tgblOrderedList[temp1] = gblOrderedList[0];\n\t\tgblOrderedList.shift(); \n\t}\n\t\n\tgblGameState = 0;\n\tgblPairsRemaing = 10;\n\tgblCardIndex = 19;\n\t\n\t// Create an array of numbers 0 to 19\n\tfor (var i = 0; i < gblNumCards; i++)\n\t{\n\t\tarrayOfNums.push(i);\n\t}\n\t\n\t// Shuffle the array using Fisher-Yates method\n\tfor (var i = arrayOfNums.length - 1; i > 0; i--)\n\t{\n\t\trandomIndex = Math.floor(Math.random() * i);\n\t\tswapValue = arrayOfNums[i];\n\t\tarrayOfNums[i] = arrayOfNums[randomIndex];\n\t\tarrayOfNums[randomIndex] = swapValue;\n\t}\n\t\n \tgblDealInterval = setInterval(moveIt, 200);\n \t\n\tsetTimeout(function() { // START OF 6 SECOND WAIT TIMEOUT\n\t\thypeDocument.startTimelineNamed('background');\n\n\t\tsetTimeout(function() {\n\t\t\tvar i = 0; \n\t\t\tfor (i=0; i < 20; i++) { // SHOW ALL 20 CARDS INITIALLY\n\t\t\t\tdisplayCards(i, \"show\");\n\t\t\t}\n\t\t}, 1000);\n\t\n\t\tsetTimeout(function() { // CHANGE BACKGROND IMAGES TO cardBack.png AFTER 1.5 SECONDS\n\t\t\tvar i = 0; \n\t\t\tfor (i=0; i < 20; i++) {\n\t\t\t\tdisplayCards(i, \"hide\");\n\t\t\t}\n\t\t\tgblGameState = 1;\n\t\t}, 2500);\n\t\n\t\tgblTimerInterval = setInterval(function() { \n\t\t\tvar temp1 = parseInt(hypeDocument.getElementById(\"timerValue\").innerHTML) + 1;\n\t\t\thypeDocument.getElementById(\"timerValue\").innerHTML = temp1;\n\t\t}, 1000);\n\t\n\t}, 6000); // END OF 6 SECOND WAIT TIMEOUT\n\t\n\tfunction displayCards(index, display) { // THIS FUNCTION WILL EITHER SHOW OR HIDE THE CARDS\n\t\tgblCardElementId = \"position\" + index;\n\t\thypeDocument.startTimelineNamed('twoCardFlip');\n\t\tif (display == \"show\") {\n\t\t\tgblCardImageURL = \"url('\" + hypeDocument.resourcesFolderURL() + \"/\" + gblShuffledList[index] + \"')\";\n\t\t} else {\n\t\t\tgblCardImageURL = \"url('\" + hypeDocument.resourcesFolderURL() + \"/cardBack.png')\";\n\t\t}\n\t\thypeDocument.getElementById(gblCardElementId).style.backgroundImage = gblCardImageURL;\n\t}\n\t\n\tfunction moveIt() {\n\t\tvar temp1 = 'position' + gblCardIndex;\n\t\tvar temp2 = document.getElementById(temp1);\n\t\tvar temp3;\n\t\tvar temp4;\n\t\tif (arrayOfNums[gblCardIndex] < 5) { temp3 = 50; }\n\t\telse if (arrayOfNums[gblCardIndex] < 10) { temp3 = 185; }\n\t\telse if (arrayOfNums[gblCardIndex] < 15) { temp3 = 320; }\n\t\telse { temp3 = 455}\n\t\tif ((arrayOfNums[gblCardIndex]%5) == 0) { temp4 = 60; dealSpeed = 0.5;}\n\t\telse if ((arrayOfNums[gblCardIndex]%5) == 1) { temp4 = 160; dealSpeed = 0.4;}\n\t\telse if ((arrayOfNums[gblCardIndex]%5) == 2) { temp4 = 260; dealSpeed = 0.3;}\n\t\telse if ((arrayOfNums[gblCardIndex]%5) == 3) { temp4 = 360; dealSpeed = 0.2;}\n\t\telse { temp4 = 460; dealSpeed = 0.2;}\n\t\thypeDocument.setElementProperty(temp2, 'top', temp3, dealSpeed, 'easeout');\n\t\thypeDocument.setElementProperty(temp2, 'left', temp4, dealSpeed, 'easeout');\n\t\tif (arrayOfNums[gblCardIndex] % 5 < 3)\n\t\t{\n\t\t\thypeDocument.setElementProperty(temp2, 'rotateZ', 360, dealSpeed, 'easeout');\n\t\t}\n\t\tsetTimeout(function()\n\t\t{\n\t\t\ttemp2.parentElement.style.zIndex = cardZIndex;\n\t\t}, 100);\n\t\tcardZIndex++;\n\t\thypeDocument.startTimelineNamed('cardFlip');\n\t\tgblCardIndex--;\n\t\tif (gblCardIndex == -1) {\n\t\t\tclearInterval(gblDealInterval);\n\t\t}\n\t}\n\t\n}",identifier:"59"},{name:"throwCards",source:"function(hypeDocument, element, event) {\t\n\tvar cardElementId;\n\tvar cardElementRef;\n\tvar vPos = -200;\n\tvar hPos;\n\tvar currentCardIndex = 0;\n\tvar dealSpeed = 1\n\t\n\t// Set up initial off-screen card positions\n\tfor (var i = 0; i < gblNumCards; i++)\n\t{\n\t\tcardElementId = 'card' + i;\n\t\tcardElementRef = hypeDocument.getElementById(cardElementId);\n\t\thypeDocument.setElementProperty(cardElementRef, 'top', 620);\n\t\thypeDocument.setElementProperty(cardElementRef, 'left', Math.floor((Math.random() * 1000) - 100));\n\t}\n\n\n\tgblCardThrower = setInterval(function() {\n\t\n\t\t\n\t\tcardElementId = 'card' + currentCardIndex;\n\t\tcardElementRef = hypeDocument.getElementById(cardElementId);\n\t\t\n\t\tconsole.log(\"hypeDocument.getElementProperty(cardElementRef, 'top'): \" + hypeDocument.getElementProperty(cardElementRef, 'top'));\n\t\tif (hypeDocument.getElementProperty(cardElementRef, 'top') <= vPos) {\n\t\t\tconsole.log(\"in-block beginning\");\n\t\t\thypeDocument.setElementProperty(cardElementRef, 'top', 700);\n\t\t\thypeDocument.setElementProperty(cardElementRef, 'left', Math.floor((Math.random() * 1000) - 100));\n\t\t\thypeDocument.setElementProperty(cardElementRef, 'rotateZ', 0);\n\t\t\tconsole.log(\"in-block end\");\n\t\t}\n\t\n\t\thPos = Math.floor((Math.random() * 1000) - 100);\n\t\t\n\t\t//alert(\"(hPos, vPos): (\" + hPos + \", \" + vPos + \")\");\n\t\t\n\t\thypeDocument.setElementProperty(cardElementRef, 'top', vPos, dealSpeed, 'linear');\n\t\thypeDocument.setElementProperty(cardElementRef, 'left', hPos, dealSpeed, 'easeout');\n\t\thypeDocument.setElementProperty(cardElementRef, 'rotateZ', 360, dealSpeed, 'easeout');\n\n\t\tconsole.log(\"currentCardIndex: \" + currentCardIndex);\n\t\tcurrentCardIndex = ++currentCardIndex % gblNumCards;\n\t\t\n\t}, 200);\n}",identifier:"146"},{name:"turnOffRestartButton",source:"function(hypeDocument, element, event) {\t\n\thypeDocument.getElementById(\"restartButton\").style.pointerEvents = \"none\";\n}",identifier:"166"},{name:"turnOnRestartButton",source:"function(hypeDocument, element, event) {\t\n\thypeDocument.getElementById(\"restartButton\").style.pointerEvents = \"auto\";\n}",identifier:"167"},{name:"turnOnPlayAgainButton",source:"function(hypeDocument, element, event) {\t\n\thypeDocument.getElementById(\"playAgainButton\").style.pointerEvents = \"auto\";\n}",identifier:"168"},{name:"turnOnCreditsButton",source:"function(hypeDocument, element, event) {\t\n\thypeDocument.getElementById(\"creditsButton\").style.pointerEvents = \"auto\";\n}",identifier:"169"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_674"+c](f,g,{"-2":{n:"blank.gif"},"18":{p:2,n:"memory-credits-music.mp3",g:"116",t:"audio/mpeg"},"10":{p:1,n:"card4.svg",g:"53",t:"image/svg+xml"},"19":{p:1,n:"memory-stencil.svg",g:"97",t:"image/svg+xml"},"11":{p:1,n:"card5.svg",g:"54",t:"image/svg+xml"},"0":{p:1,n:"cardBack.png",g:"28",t:"@1x"},"12":{p:1,n:"card6.svg",g:"55",t:"image/svg+xml"},"1":{p:2,n:"match2.mp3",g:"64",t:"audio/mpeg"},"20":{p:1,n:"gradient.svg",g:"95",t:"image/svg+xml"},"2":{p:2,n:"match1.mp3",g:"62",t:"audio/mpeg"},"13":{p:1,n:"card7.svg",g:"56",t:"image/svg+xml"},"3":{p:2,n:"bad-match.mp3",g:"66",t:"audio/mpeg"},"14":{p:1,n:"card8.svg",g:"57",t:"image/svg+xml"},"4":{p:2,n:"card-flip.mp3",g:"91",t:"audio/mpeg"},"5":{p:2,n:"two-card-flip.mp3",g:"124",t:"audio/mpeg"},"15":{p:1,n:"card9.svg",g:"58",t:"image/svg+xml"},"6":{p:1,n:"card1.svg",g:"50",t:"image/svg+xml"},"16":{p:2,n:"main-memory-theme.mp3",g:"67",t:"audio/mpeg"},"7":{p:1,n:"card0.svg",g:"49",t:"image/svg+xml"},"-1":{n:"PIE.htc"},"8":{p:1,n:"card2.svg",g:"51",t:"image/svg+xml"},"17":{p:2,n:"win-music.mp3",g:"74",t:"audio/mpeg"},"9":{p:1,n:"card3.svg",g:"52",t:"image/svg+xml"}},l,["<link href='https://fonts.googleapis.com/css?family=Sansita+Swashed&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Epilogue&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Courier+Prime&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Cousine&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Manrope&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Alef&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Montserrat+Subrayada&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Stylish&subset=latin' rel='stylesheet' type='text/css'>"],e,[{n:"splash",o:"92",X:[0]},{n:"main",o:"1",X:[1]},{n:"credits",o:"106",X:[2]}],
[{o:"94",p:"600px",cA:false,Y:800,Z:600,L:[],c:"#4C114B",bY:1,d:800,U:{},T:{"105_pressed":{q:false,z:1,i:"105_pressed",n:"105_pressed",a:[{f:"c",y:0,z:1,i:"G",e:"#DBA",s:"#FF9300",o:"171"},{y:1,i:"G",s:"#DBA",z:0,o:"171",f:"c"}],f:30,b:[]},"105_hover":{q:false,z:1,i:"105_hover",n:"105_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FFD8C2",s:"#FF9300",o:"171"},{y:1,i:"G",s:"#FFD8C2",z:0,o:"171",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:4,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"b",y:0,z:4,i:"a",e:-908,s:0,o:"174"},{f:"b",y:0,z:1.05,i:"f",e:14,s:0,o:"174"},{f:"c",y:0,z:2,i:"cR",e:0.95,s:1,o:"174"},{f:"c",y:0,z:2,i:"cQ",e:0.95,s:1,o:"174"},{f:"c",y:0,z:1,i:"e",e:0.74530261,s:1,o:"174"},{f:"c",y:1,z:1,i:"e",e:1,s:0.74530261,o:"174"},{f:"b",y:1.05,z:1.05,i:"f",e:-14,s:14,o:"174"},{f:"c",y:2,z:2,i:"cQ",e:1,s:0.95,o:"174"},{f:"c",y:2,z:2,i:"cR",e:1,s:0.95,o:"174"},{f:"c",y:2,z:1,i:"e",e:0.7539557,s:1,o:"174"},{f:"b",y:2.1,z:1.2,i:"f",e:0,s:-14,o:"174"},{f:"c",y:3,z:1,i:"e",e:1,s:0.7539557,o:"174"},{f:"c",p:2,y:4,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"93"}]},o:"kTimelineDefaultIdentifier"},{y:4,i:"a",s:-908,z:0,o:"174",f:"c"},{y:4,i:"cR",s:1,z:0,o:"174",f:"c"},{y:4,i:"cQ",s:1,z:0,o:"174",f:"c"},{y:4,i:"f",s:0,z:0,o:"174",f:"c"},{y:4,i:"e",s:1,z:0,o:"174",f:"c"}],f:30,b:[]}},bZ:180,O:["176","174","173","175","170","172","171"],n:"Untitled Layout","_":0,v:{"174":{x:"visible",a:0,b:0,j:"absolute",c:1816,k:"div",z:1,d:341,cQ:1,e:1,f:0,cR:1},"170":{aU:8,G:"#FFD8C2",c:784,aV:8,r:"inline",d:44,s:"'Sansita Swashed'",bD:"none",t:24,Z:"break-word",w:"by Jason Pape",j:"absolute",x:"visible",k:"div",y:"preserve",z:5,aS:8,aT:8,a:0,F:"center",b:230},"173":{h:"97",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:4,k:"div",b:0,d:600,c:800},"176":{h:"95",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,bF:"174",b:0,d:341,k:"div",c:908},"172":{aU:8,G:"#FFD8C2",c:784,aV:8,r:"inline",d:44,s:"'Sansita Swashed'",bD:"none",t:38,u:"normal",Z:"break-word",v:"normal",w:"Match All 20 Cards as Quickly as Possible",j:"absolute",x:"visible",k:"div",y:"preserve",z:6,aS:8,aT:8,a:0,F:"center",b:380},"175":{h:"95",p:"no-repeat",x:"visible",a:908,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:2,bF:"174",b:0,d:341,k:"div",c:908},"171":{b:490,z:7,K:"None",c:188,L:"None",d:68,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,aU:6,P:0,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",aM:"105_hover",r:"inline",C:"#A0A0A0",Z:"break-word",s:"'Courier Prime'",aN:"105_pressed",D:"#A0A0A0",t:38,u:"normal",F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"1"}]},v:"normal",G:"#FF9300",aP:"pointer",w:"START",x:"visible",I:"None",a:300,y:"preserve",J:"None"}}},{A:{a:[{p:4,h:"59"}]},o:"3",p:"600px",cA:false,Y:800,Z:600,c:"#FFD8C2",L:[],bY:1,d:800,U:{},T:{"63":{q:false,z:0,i:"63",n:"match2",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"64",q:false}]},o:"63"}],f:30,b:[]},"72_hover":{q:false,z:1,i:"72_hover",n:"72_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FFD8C2",s:"#FF2600",o:"188"},{y:1,i:"G",s:"#FFD8C2",z:0,o:"188",f:"c"}],f:30,b:[]},"71_hover":{q:false,z:1,i:"71_hover",n:"71_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FFD8C2",s:"#FF2600",o:"184"},{y:1,i:"G",s:"#FFD8C2",z:0,o:"184",f:"c"}],f:30,b:[]},"123":{q:false,z:0,i:"123",n:"twoCardFlip",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"124",q:false}]},o:"123"}],f:30,b:[]},"71_pressed":{q:false,z:1,i:"71_pressed",n:"71_pressed",a:[{f:"c",y:0,z:1,i:"G",e:"#DBA",s:"#FF2600",o:"184"},{y:1,i:"G",s:"#DBA",z:0,o:"184",f:"c"}],f:30,b:[]},"65":{q:false,z:0,i:"65",n:"badMatch",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"66",q:false}]},o:"65"}],f:30,b:[]},"118":{q:false,z:0,i:"118",n:"background",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"67",q:true}]},o:"118"}],f:30,b:[]},"61":{q:false,z:0,i:"61",n:"match1",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"62",q:false}]},o:"61"}],f:30,b:[]},"72_pressed":{q:false,z:1,i:"72_pressed",n:"72_pressed",a:[{f:"c",y:0,z:1,i:"G",e:"#DBA",s:"#FF2600",o:"188"},{y:1,i:"G",s:"#DBA",z:0,o:"188",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[]},o:"kTimelineDefaultIdentifier"}],f:30,b:[]},"73":{q:false,z:6.15,i:"73",n:"gameOver",a:[{f:"c",p:2,y:0,z:0.02,i:"ActionHandler",e:{a:[{p:12,o:"74",q:false}]},s:{a:[{p:13,o:"67",q:false}]},o:"73"},{f:"h",y:0,z:0.15,i:"b",e:470,s:-130,o:"184"},{f:"h",y:0,z:0.15,i:"b",e:63,s:-537,o:"204"},{f:"h",y:0,z:0.15,i:"b",e:-100,s:-700,o:"200"},{f:"h",y:0,z:0.15,i:"b",e:230,s:-370,o:"181"},{f:"h",y:0,z:0.15,i:"b",e:470,s:-130,o:"188"},{f:"c",p:2,y:0.02,z:5.13,i:"ActionHandler",e:{a:[{p:4,h:"168"}]},s:{a:[{p:12,o:"74",q:false}]},o:"73"},{y:0.15,i:"b",s:470,z:0,o:"184",f:"c"},{y:0.15,i:"b",s:63,z:0,o:"204",f:"c"},{y:0.15,i:"b",s:-100,z:0,o:"200",f:"c"},{y:0.15,i:"b",s:230,z:0,o:"181",f:"c"},{y:0.15,i:"b",s:470,z:0,o:"188",f:"c"},{f:"c",y:5,z:1,i:"e",e:1,s:0,o:"184"},{f:"c",y:5.15,z:1,i:"e",e:1,s:0,o:"188"},{f:"c",p:2,y:5.15,z:0.15,i:"ActionHandler",e:{a:[{}]},s:{a:[{p:4,h:"168"}]},o:"73"},{y:6,i:"e",s:1,z:0,o:"184",f:"c"},{f:"c",p:2,y:6,z:0,i:"ActionHandler",s:{a:[{p:4,h:"169"}]},o:"73"},{y:6.15,i:"e",s:1,z:0,o:"188",f:"c"}],f:30,b:[]},"90":{q:false,z:0,i:"90",n:"cardFlip",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"91",q:false}]},o:"90"}],f:30,b:[]}},bZ:180,O:["200","196","178","204","190","193","181","185","186","182","177","203","199","202","198","195","192","189","194","191","187","183","180","179","205","201","197","184","188"],n:"Untitled Layout","_":1,v:{"200":{c:600,d:700,I:"None",J:"None",K:"None",g:"#4C114B",L:"None",M:0,i:"finishedBackground",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:27,k:"div",D:"#D8DDE4",a:0,b:-700},"194":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",gg:"0",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position15",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:22,dB:"button",D:"#D8DDE4",R:"#000",Q:0,aA:{a:[{p:4,h:"29"}]},S:0,a:673,k:"div",T:0,b:245},"186":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",gg:"0",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position5",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:12,dB:"button",D:"#D8DDE4",R:"#000",Q:0,aA:{a:[{p:4,h:"29"}]},S:0,a:653,k:"div",T:0,b:245},"178":{aU:8,G:"#FF9300",c:184,aV:8,r:"inline",d:44,s:"Alef",bD:"none",t:38,u:"normal",Z:"break-word",v:"bold",i:"title",w:"MEMORY",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:600,F:"center",b:20},"205":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",gg:"0",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position18",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:25,dB:"button",D:"#D8DDE4",R:"#000",Q:0,aA:{a:[{p:4,h:"29"}]},S:0,a:679,k:"div",T:0,b:245},"199":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",gg:"0",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position1",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:8,dB:"button",D:"#D8DDE4",R:"#000",Q:0,aA:{a:[{p:4,h:"29"}]},S:0,a:645,k:"div",T:0,b:245},"190":{aU:8,G:"#FF9300",c:184,aV:8,r:"inline",d:44,s:"Cousine",bD:"none",t:32,Z:"break-word",v:"bold",i:"timerTitle",w:"TIME",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:600,F:"center",b:90},"182":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",gg:"0",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position4",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:11,dB:"button",D:"#D8DDE4",R:"#000",Q:0,aA:{a:[{p:4,h:"29"}]},S:0,a:651,k:"div",T:0,b:245},"201":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",gg:"0",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position17",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:24,dB:"button",D:"#D8DDE4",R:"#000",Q:0,aA:{a:[{p:4,h:"29"}]},S:0,a:677,k:"div",T:0,b:245},"195":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",gg:"0",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position8",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:15,dB:"button",D:"#D8DDE4",R:"#000",Q:0,aA:{a:[{p:4,h:"29"}]},S:0,a:659,k:"div",T:0,b:245},"187":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",gg:"0",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position13",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:20,dB:"button",D:"#D8DDE4",R:"#000",Q:0,aA:{a:[{p:4,h:"29"}]},S:0,a:669,k:"div",T:0,b:245},"179":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",gg:"0",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position19",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:26,dB:"button",D:"#D8DDE4",R:"#000",Q:0,aA:{a:[{p:4,h:"29"}]},S:0,a:681,k:"div",T:0,b:245},"191":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",gg:"0",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position14",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:21,dB:"button",D:"#D8DDE4",R:"#000",Q:0,aA:{a:[{p:4,h:"29"}]},S:0,a:671,k:"div",T:0,b:245},"183":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",gg:"0",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position12",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:19,dB:"button",D:"#D8DDE4",R:"#000",Q:0,aA:{a:[{p:4,h:"29"}]},S:0,a:667,k:"div",T:0,b:245},"202":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",gg:"0",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position10",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:17,dB:"button",D:"#D8DDE4",R:"#000",Q:0,aA:{a:[{p:4,h:"29"}]},S:0,a:663,k:"div",T:0,b:245},"196":{c:200,d:600,I:"None",J:"None",K:"None",g:"#4C114B",L:"None",M:0,i:"sidebar",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:1,k:"div",D:"#D8DDE4",a:600,b:0},"188":{b:-130,z:31,K:"None",c:228,L:"None",d:48,aS:6,M:0,e:0,bD:"none",N:0,aT:6,dB:"button",O:0,aU:6,P:0,aV:6,i:"creditsButton",j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",aM:"72_hover",r:"inline",C:"#A0A0A0",Z:"break-word",s:"Stylish",aN:"72_pressed",D:"#A0A0A0",t:36,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"106"}]},G:"#FF2600",aP:"pointer",w:"CREDITS",x:"visible",I:"None",a:320,y:"preserve",J:"None"},"192":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",gg:"0",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position7",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:14,dB:"button",D:"#D8DDE4",R:"#000",Q:0,aA:{a:[{p:4,h:"29"}]},S:0,a:657,k:"div",T:0,b:245},"184":{b:-130,z:30,K:"None",c:228,L:"None",d:48,aS:6,M:0,e:0,bD:"none",N:0,aT:6,dB:"button",O:0,aU:6,P:0,aV:6,i:"playAgainButton",j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",aM:"71_hover",r:"inline",C:"#A0A0A0",Z:"break-word",s:"Stylish",aN:"71_pressed",D:"#A0A0A0",t:36,u:"normal",F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"1"}]},v:"normal",G:"#FF2600",aP:"pointer",w:"PLAY AGAIN?",x:"visible",I:"None",a:40,y:"preserve",J:"None"},"203":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",gg:"0",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position2",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:9,dB:"button",D:"#D8DDE4",R:"#000",Q:0,aA:{a:[{p:4,h:"29"}]},S:0,a:647,k:"div",T:0,b:245},"197":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",gg:"0",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position16",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:23,dB:"button",D:"#D8DDE4",R:"#000",Q:0,aA:{a:[{p:4,h:"29"}]},S:0,a:675,k:"div",T:0,b:245},"189":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",gg:"0",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position6",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:13,dB:"button",D:"#D8DDE4",R:"#000",Q:0,aA:{a:[{p:4,h:"29"}]},S:0,a:655,k:"div",T:0,b:245},"180":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",gg:"0",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position11",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:18,dB:"button",D:"#D8DDE4",R:"#000",Q:0,aA:{a:[{p:4,h:"29"}]},S:0,a:665,k:"div",T:0,b:245},"193":{aU:8,G:"#FFD8C2",c:184,aV:8,r:"inline",d:44,s:"Cousine",bD:"none",t:32,Z:"break-word",i:"timerValue",w:"0\n",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:600,F:"center",b:150},"185":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",gg:"0",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position0",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:7,dB:"button",D:"#D8DDE4",R:"#000",Q:0,aA:{a:[{p:4,h:"29"}]},S:0,a:643,k:"div",T:0,b:245},"177":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",gg:"0",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position3",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:10,dB:"button",D:"#D8DDE4",R:"#000",Q:0,aA:{a:[{p:4,h:"29"}]},S:0,a:649,k:"div",T:0,b:245},"204":{aU:8,bB:3,G:"#FF9300",c:584,aV:8,r:"inline",d:73,bC:3,s:"'Montserrat Subrayada'",bD:"none",t:48,cR:2.4,u:"normal",Z:"break-word",v:"normal",i:"finishedTitle",w:"CONGRATULATIONS!",j:"absolute",x:"visible",aZ:20,k:"div",y:"preserve",z:28,aS:8,aT:8,a:0,bA:"rgba(255, 216, 194, 0.256)",F:"center",b:-537},"198":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",gg:"0",K:"None",L:"None",aP:"pointer",h:"28",M:0,i:"position9",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:16,dB:"button",D:"#D8DDE4",R:"#000",Q:0,aA:{a:[{p:4,h:"29"}]},S:0,a:661,k:"div",T:0,b:245},"181":{aU:8,bB:2,G:"#FF9300",c:584,aV:8,r:"inline",d:164,bC:2,s:"Cousine",bD:"none",t:64,Z:"break-word",i:"finishedMessage",w:"YOU FINISHED IN<br>100 SECONDS!",j:"absolute",x:"visible",aZ:3,k:"div",y:"preserve",z:29,aS:8,aT:8,a:0,bA:"rgba(255, 216, 194, 0.249)",F:"center",b:-370}}},{o:"108",p:"600px",B:{a:[{p:13,o:"116",q:false}]},cA:false,Z:600,Y:800,c:"#4C114B",L:[],bY:1,d:800,U:{},T:{"115_pressed":{q:false,z:1,i:"115_pressed",n:"115_pressed",a:[{f:"c",y:0,z:1,i:"G",e:"#DBA",s:"#FF9300",o:"230"},{y:1,i:"G",s:"#DBA",z:0,o:"230",f:"c"}],f:30,b:[]},"115_hover":{q:false,z:1,i:"115_hover",n:"115_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FFD8C2",s:"#FF9300",o:"230"},{y:1,i:"G",s:"#FFD8C2",z:0,o:"230",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:21,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0,z:1.01,i:"ActionHandler",e:{a:[{p:4,h:"146"}]},s:{a:[{p:12,o:"116",q:false},{p:4,h:"166"}]},o:"kTimelineDefaultIdentifier"},{f:"b",y:0,z:20,i:"b",e:-930,s:600,o:"213"},{f:"c",p:2,y:1.01,z:19.29,i:"ActionHandler",e:{a:[{}]},s:{a:[{p:4,h:"146"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:20,z:1,i:"e",e:1,s:0,o:"230"},{y:20,i:"b",s:-930,z:0,o:"213",f:"c"},{y:21,i:"e",s:1,z:0,o:"230",f:"c"},{f:"c",p:2,y:21,z:0,i:"ActionHandler",s:{a:[{p:4,h:"167"}]},o:"kTimelineDefaultIdentifier"}],f:30,b:[]}},bZ:180,O:["214","213","217","215","216","230","225","212","207","228","223","227","222","219","209","229","208","224","220","211","206","210","231","226","221","218"],n:"Untitled Layout","_":2,v:{"221":{b:618,z:20,K:"None",c:75,L:"None",d:110,gg:"0",M:0,bD:"none",N:0,dB:"button",O:0,P:0,h:"28",Q:0,i:"card16",R:"#000",j:"absolute",S:0,k:"div",T:0,p:"no-repeat",A:"#D8DDE4",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",aP:"auto",x:"visible",I:"None",a:357,cN:"none",J:"None"},"213":{k:"div",x:"visible",c:600,d:1200,z:24,a:100,j:"absolute",b:600},"226":{b:618,z:21,K:"None",c:75,L:"None",d:110,gg:"0",M:0,bD:"none",N:0,dB:"button",O:0,P:0,h:"28",Q:0,i:"card17",R:"#000",j:"absolute",S:0,k:"div",T:0,p:"no-repeat",A:"#D8DDE4",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",aP:"auto",x:"visible",I:"None",a:359,cN:"none",J:"None"},"218":{b:618,z:19,K:"None",c:75,L:"None",d:110,gg:"0",M:0,bD:"none",N:0,dB:"button",O:0,P:0,h:"28",Q:0,i:"card15",R:"#000",j:"absolute",S:0,k:"div",T:0,p:"no-repeat",A:"#D8DDE4",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",aP:"auto",x:"visible",I:"None",a:355,cN:"none",J:"None"},"230":{J:"None",b:400,K:"None",z:25,bC:2,L:"None",d:108,aS:6,M:0,e:0,bD:"none",N:0,aT:6,dB:"button",O:0,c:388,aU:6,P:0,aV:6,i:"restartButton",j:"absolute",k:"div",aI:4,aJ:4,aK:4,aZ:0,aL:4,A:"#A0A0A0",B:"#A0A0A0",aM:"115_hover",r:"inline",C:"#A0A0A0",Z:"break-word",s:"Stylish",aN:"115_pressed",D:"#A0A0A0",t:64,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"1"}]},G:"#FF9300",aP:"pointer",w:"PLAY AGAIN?",bA:"rgba(255, 216, 194, 0.443)",x:"visible",I:"None",a:200,y:"preserve",bB:2},"222":{b:618,z:12,K:"None",c:75,L:"None",d:110,gg:"0",M:0,bD:"none",N:0,dB:"button",O:0,P:0,h:"28",Q:0,i:"card8",R:"#000",j:"absolute",S:0,k:"div",T:0,p:"no-repeat",A:"#D8DDE4",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",aP:"auto",x:"visible",I:"None",a:341,cN:"none",J:"None"},"214":{aU:8,G:"#000",c:584,aV:8,r:"inline",d:164,s:"'Sansita Swashed'",bD:"none",t:16,Z:"break-word",w:"<h1 style=\"text-align: center;\"><span style=\"font-size: 96px; text-shadow: rgb(0, 0, 0) 2px 2px 0px;\"><font color=\"#ff2600\">MEMORY</font></span></h1>\n",bF:"213",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,b:0},"206":{b:618,z:14,K:"None",c:75,L:"None",d:110,gg:"0",M:0,bD:"none",N:0,dB:"button",O:0,P:0,h:"28",Q:0,i:"card10",R:"#000",j:"absolute",S:0,k:"div",T:0,p:"no-repeat",A:"#D8DDE4",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",aP:"auto",x:"visible",I:"None",a:345,cN:"none",J:"None"},"227":{b:618,z:13,K:"None",c:75,L:"None",d:110,gg:"0",M:0,bD:"none",N:0,dB:"button",O:0,P:0,h:"28",Q:0,i:"card9",R:"#000",j:"absolute",S:0,k:"div",T:0,p:"no-repeat",A:"#D8DDE4",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",aP:"auto",x:"visible",I:"None",a:343,cN:"none",J:"None"},"219":{b:618,z:11,K:"None",c:75,L:"None",d:110,gg:"0",M:0,bD:"none",N:0,dB:"button",O:0,P:0,h:"28",Q:0,i:"card7",R:"#000",j:"absolute",S:0,k:"div",T:0,p:"no-repeat",A:"#D8DDE4",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",aP:"auto",x:"visible",I:"None",a:339,cN:"none",J:"None"},"210":{b:618,z:23,K:"None",c:75,L:"None",d:110,gg:"0",M:0,bD:"none",N:0,dB:"button",O:0,P:0,h:"28",Q:0,i:"card19",R:"#000",j:"absolute",S:0,k:"div",T:0,p:"no-repeat",A:"#D8DDE4",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",aP:"auto",x:"visible",I:"None",a:363,cN:"none",J:"None"},"231":{b:618,z:22,K:"None",c:75,L:"None",d:110,gg:"0",M:0,bD:"none",N:0,dB:"button",O:0,P:0,h:"28",Q:0,i:"card18",R:"#000",j:"absolute",S:0,k:"div",T:0,p:"no-repeat",A:"#D8DDE4",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",aP:"auto",x:"visible",I:"None",a:361,cN:"none",J:"None"},"223":{b:618,z:4,K:"None",c:75,L:"None",d:110,gg:"0",M:0,bD:"none",N:0,dB:"button",O:0,P:0,h:"28",Q:0,i:"card0",R:"#000",j:"absolute",S:0,k:"div",T:0,p:"no-repeat",A:"#D8DDE4",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",aP:"auto",x:"visible",I:"None",a:325,cN:"none",J:"None"},"215":{aU:8,G:"#FFD8C2",c:584,aV:8,r:"inline",d:670,s:"Alef",bD:"none",t:18,Z:"break-word",v:"bold",w:"<style>\n\ttr {\n\t\theight: 60px;\n\t}\n\n\ttable {\n\t\tfont-family: Cousine, monospace;\n\t}\n\n\ta {\n\t\tcolor: inherit;\n\t}\n</style>\n<table>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td style=\"width: 300px;\">GRAPHICS BY</td>\n\t\t\t<td>Jason Pape</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>JAVASCRIPT CODE BY</td>\n\t\t\t<td>Darren Pearson &amp; Jason Pape</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>BACKGROUND MUSIC BY</td>\n\t\t\t<td>Jason Pape</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>SOFTWARE</td>\n\t\t\t<td><a href=\"https://tumult.com/hype/\" target=\"_blank\"><font color=\"#fff0e0\">Tumult Hype</font></a></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>SPECIAL THANKS TO:</td>\n\t\t\t<td>Saint Paul College</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td></td>\n\t\t\t<td>Json</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td></td>\n\t\t\t<td>R\u00e9gan</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td></td>\n\t\t\t<td>A.J.</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td></td>\n\t\t\t<td>Bekkah</td>\n\t\t</tr>\n\t\t\t<tr>\n\t\t\t<td></td>\n\t\t\t<td>Ben</td>\n\t\t</tr>\n\t\t\t<tr>\n\t\t\t<td></td>\n\t\t\t<td>Aimee</td>\n\t\t</tr>\n\t</tbody>\n</table>",bF:"213",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:0,b:180},"207":{b:618,z:6,K:"None",c:75,L:"None",d:110,gg:"0",M:0,bD:"none",N:0,dB:"button",O:0,P:0,h:"28",Q:0,i:"card2",R:"#000",j:"absolute",S:0,k:"div",T:0,p:"no-repeat",A:"#D8DDE4",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",aP:"auto",x:"visible",I:"None",a:329,cN:"none",J:"None"},"228":{b:618,z:5,K:"None",c:75,L:"None",d:110,gg:"0",M:0,bD:"none",N:0,dB:"button",O:0,P:0,h:"28",Q:0,i:"card1",R:"#000",j:"absolute",S:0,k:"div",T:0,p:"no-repeat",A:"#D8DDE4",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",aP:"auto",x:"visible",I:"None",a:327,cN:"none",J:"None"},"211":{b:618,z:15,K:"None",c:75,L:"None",d:110,gg:"0",M:0,bD:"none",N:0,dB:"button",O:0,P:0,h:"28",Q:0,i:"card11",R:"#000",j:"absolute",S:0,k:"div",T:0,p:"no-repeat",A:"#D8DDE4",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",aP:"auto",x:"visible",I:"None",a:347,cN:"none",J:"None"},"224":{b:618,z:17,K:"None",c:75,L:"None",d:110,gg:"0",M:0,bD:"none",N:0,dB:"button",O:0,P:0,h:"28",Q:0,i:"card13",R:"#000",j:"absolute",S:0,k:"div",T:0,p:"no-repeat",A:"#D8DDE4",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",aP:"auto",x:"visible",I:"None",a:351,cN:"none",J:"None"},"216":{aU:8,G:"#FFFB00",c:584,aV:8,r:"inline",d:198,s:"Alef",bD:"none",t:16,Z:"break-word",w:"<style>\n\thr {\n\t\twidth: 80%;\n\t\theight: 5px;\n\t\tbackground-color: white;\n\t}\n</style>\n<hr> \n<br>\n<h3 style=\"text-align: center;\">Please Check Out More Student Games At:</h3>\n<h3 style=\"text-align: center;\"><a href=\"http://www.darrenscorner.com/retrogamedesign/less/student/index.html\" target=\"_blank\" style=\"color: yellow\">RetroGameDesign.com</a></h3>\n<br>\n<hr> \t",bF:"213",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:0,b:882},"208":{b:618,z:18,K:"None",c:75,L:"None",d:110,gg:"0",M:0,bD:"none",N:0,dB:"button",O:0,P:0,h:"28",Q:0,i:"card14",R:"#000",j:"absolute",S:0,k:"div",T:0,p:"no-repeat",A:"#D8DDE4",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",aP:"auto",x:"visible",I:"None",a:353,cN:"none",J:"None"},"229":{b:618,z:9,K:"None",c:75,L:"None",d:110,gg:"0",M:0,bD:"none",N:0,dB:"button",O:0,P:0,h:"28",Q:0,i:"card5",R:"#000",j:"absolute",S:0,k:"div",T:0,p:"no-repeat",A:"#D8DDE4",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",aP:"auto",x:"visible",I:"None",a:335,cN:"none",J:"None"},"220":{b:616,z:16,K:"None",c:75,L:"None",d:110,gg:"0",M:0,bD:"none",N:0,dB:"button",O:0,P:0,h:"28",Q:0,i:"card12",R:"#000",j:"absolute",S:0,k:"div",T:0,p:"no-repeat",A:"#D8DDE4",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",aP:"auto",x:"visible",I:"None",a:349,cN:"none",J:"None"},"212":{b:618,z:7,K:"None",c:75,L:"None",d:110,gg:"0",M:0,bD:"none",N:0,dB:"button",O:0,P:0,h:"28",Q:0,i:"card3",R:"#000",j:"absolute",S:0,k:"div",T:0,p:"no-repeat",A:"#D8DDE4",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",aP:"auto",x:"visible",I:"None",a:331,cN:"none",J:"None"},"225":{b:618,z:8,K:"None",c:75,L:"None",d:110,gg:"0",M:0,bD:"none",N:0,dB:"button",O:0,P:0,h:"28",Q:0,i:"card4",R:"#000",j:"absolute",S:0,k:"div",T:0,p:"no-repeat",A:"#D8DDE4",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",aP:"auto",x:"visible",I:"None",a:333,cN:"none",J:"None"},"217":{aU:8,G:"#FF9300",aV:8,r:"inline",s:"'Sansita Swashed'",bD:"none",t:96,Z:"break-word",w:"MEMORY",bF:"213",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:4,aS:8,aT:8,a:77,b:22},"209":{b:618,z:10,K:"None",c:75,L:"None",d:110,gg:"0",M:0,bD:"none",N:0,dB:"button",O:0,P:0,h:"28",Q:0,i:"card6",R:"#000",j:"absolute",S:0,k:"div",T:0,p:"no-repeat",A:"#D8DDE4",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",aP:"auto",x:"visible",I:"None",a:337,cN:"none",J:"None"}}}],{},h,{h:{p:0,q:[[0,0,0.175,0.885,0.32,1.25,1,1]]}},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
