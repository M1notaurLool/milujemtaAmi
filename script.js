document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");
	let messages = [
		"Šťastný Valentín Ami!💕💕",
		"Som ten najšťastnejší človek na svete, keďže môžem tento deň osláviť s tebou, a aj keď sme možno ďaleko, v srdci si mi vždy nablízku. 🥹💖",
		"Každý jeden deň, čo ťa v živote mám princezno😘, je dar, ktorý si nezaslúžim, no budem zaň navždy vďačný. 💕✨",
		"Si moje slniečko aj v najzamračenejší deň. 🌞💕 Bez teba by bol svet len obyčajným miestom, ale ty mu dávaš farby, svetlo a lásku. ❤️‍🔥",
		"Každý moment s tebou je pre mňa vzácny poklad😄. Chcem, aby si vedela, že nikdy neprestanem bojovať za teba a našu lásku. 💖",
		"Tvoj smiech je môj najobľúbenejší zvuk💖, tvoj hlas ma upokojuje a tvoje objatia sú domov❤️‍🔥, kam sa chcem vždy vrátiť. 🥹💕",
		"Si môj vesmír, moje všetko, moje najväčšie šťastie! 💖",
		"Bez teba by hviezdy nesvietili nikdy tak jasne, ako svietia teraz. 🌟💕",
		"Už si ani neviem predstaviť jeden, jedinučký deň bez teba.💕💕 ",
		"Si dôvod, prečo sa ráno budím s úsmevom a prečo sú moje sny tak sladké. 💕✨",
		"Keď som s tebou, cítim sa ako najšťastnejší človek na svete.💖 Každý dotyk, každé slovo, každý pohľad mi pripomína, prečo som sa do teba tak veľmi zamiloval. 🥹💖",
		"Si neskutočne krásna, ale nielen zvonku – tvoja duša je ešte krajšia. Stačí sa mi na teba pozrieť láskoooo, a viem, že mám všetko po čom som v živote túžil. 💖",
		"Máš tie najkrajšie oči, v ktorých by som sa mohol stratiť navždy.🥹💕✨ ",
		"A tvoj úsmev? Ten je nesmierne HOT❤️‍🔥 ako aj celá ty😘, a roztopil by aj ľadovce, tak ako roztápa moje srdce. 🥰💕",
		"Si tak talentovaná láskoooo💖, že nech robíš čokoľvek, vždy to zvládneš s neuveriteľnou ľahkosťou.😘 ",
		"A keď spievaš… je to ako tá najkrajšia melódia🥹❤️‍🔥, ktorú chcem počúvať stále dookola. 🎶💕",
		"Obdivujem, ako všetko zvládaš. Si nesmeirne silná💕, múdra💕, šikovná💕 a nikdy sa nevzdávaš. 💕✨",
		"Si dôvod, prečo sa chcem stále zlepšovať, aby som bol pre teba taký úžasný, ako si ty pre mňa. 💖",
		"Ďakujem ti za všetko, čo pre mňa robíš, aj keď si to možno ani neuvedomuješ. Každý jeden moment s tebou mi dáva silu, robí ma šťastným a napĺňa moje srdce láskou. 🥹💕",
		"Milujem ťa viac, než sa dá slovami opísať! 💕💫 Si tá najdôležitejšia osoba v mojom živote a vždy ňou budeš Ami. ❤️‍🔥"

	];

    let currentIndex = 0;
    let firstClickDone = false;
    let isAnimating = false;

    // Start music after user interaction (for autoplay restrictions)
    document.body.addEventListener("click", function () {
        if (audio.paused) {
            audio.play().catch(error => console.error("Autoplay blocked:", error));
        }
    }, { once: true });

    // Replace content when button is clicked
    document.getElementById("startButton").addEventListener("click", function () {
        let content = document.getElementById("content");

        // Clear everything inside the div and replace it with full content
		content.innerHTML = `
			 <div class="envelope-wrapper">
			<div id="envelope" class="close">
				<div class="front flap"></div>
				<div class="front pocket"></div>
				<div class="letter" id="card-content">
				<p class="words">${messages[currentIndex]}</p>
				</div>
			</div>
			</div>
			<div class="continue">
			<button id="continue">Klikaj na obálku a nakoniec sem</button>
			</div>
					<style>
						@font-face {
							font-family: 'Caveat';
							src: url('fonts/Caveat-Regular.ttf') format('truetype');
						}

						body {
							background-color: #ffc3da;
							font-family: 'Caveat', sans-serif;
						}

						.envelope-wrapper {
							height: 380px;
						}
						
						body {
							margin: 0;
							padding: 0;
							overflow: hidden; /* Zabráni skrolovaniu */
							background-color: #ffc3da; /* Zachová pozadie */
						}
						body, html {
							margin: 0;
							padding: 0;
							height: 100%;
							width: 100%;
							background-color: #ffcccb; /* Príjemná farba bez bieleho pozadia */
							display: flex;
							justify-content: center;
							align-items: center;
							overflow: hidden; /* Zabraňuje posúvaniu stránky */
						}

						#content {
							min-height: 50vh; /* Obsah bude minimálne taký veľký ako obrazovka */
							display: flex;
							justify-content: center;
							align-items: center;
							flex-direction: column;
							text-align: center;
						}

						#envelope {
							position: relative;
							height: 180px;
							width: 280px;
							border-bottom-left-radius: 6px;
							border-bottom-right-radius: 6px;
							margin-left: auto;
							margin-right: auto;
							top: 50%;
							background-color: #FF6863;
							box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
							cursor: pointer;
						}

						.front {
							position: absolute;
							width: 0;
							height: 0;
							z-index: 3;
						}

						.flap {
							border-top: 98px solid #FF6863;
							border-left: 140px solid transparent;
							border-right: 140px solid transparent;
							border-bottom: 82px solid transparent;
							transform-origin: top;
						}

						.pocket {
							border-left: 140px solid #FF8BA0;
							border-right: 140px solid #FF8BA0;
							border-bottom: 90px solid #FFA8B5;
							border-top: 90px solid transparent;
							border-bottom-left-radius: 6px;
							border-bottom-right-radius: 6px;
						}

						.letter {
							position: relative;
							background-color: #fff0f5;
							width: 90%;
							height: 95%;
							top: 0%;
							border-radius: 10px;
							box-shadow: 0 2px 26px rgba(0, 0, 0, .12);
							margin-left: auto;
							margin-right: auto;
							padding: 7px 22px; /* Dôležité pre vnútorný priestor */
						box-sizing: border-box; 
						}

						.letter p {
							font-size: 20px; /* Zvýš veľkosť písma podľa potreby */
							text-align: center;
							line-height: 1; /* Mierne zväčši rozostupy medzi riadkami */
							color: #003049;
							position: relative; /* Oprava pozície */
							top: 7px; /* Prispôsobenie vzdialenosti od vrchu */
							left: 0; /* Vycentrovanie */
							width: 100%; /* Zabezpečenie, že text sa správne rozloží */
						}

						.letter:after {
							content:"";
						position: absolute;
							border:3px dotted #003049;
							left:5%;
							top:5%;
							right:5%;
							bottom:5%;
							border-radius: 10px;
							box-sizing: border-box;
						}
							
							position: absolute;
							left: 10%;
							width: 80%;
							height: 25%;
							font-size: 28px;
							font-family: 'Caveat', sans-serif; 
							color: black;
						}

						.line1 { top: 15%; }
						.line2 { top: 25%; }
						.line3 { top: 45%; text-align: center; }
						.line4 { top: 55%; text-align: center; }

						.open .flap {
							transform: rotatex(180deg);
							transition: transform 0.4s ease, z-index 0.6s;
							z-index: 1;
						}

						.close .flap {
							transform: rotatex(0deg);
							transition: transform 0.4s 0.6s ease, z-index 1s;
							z-index: 5;
						}

						.open .letter {
							transform: translatey(-80px);
							transition: transform 0.4s 0.6s ease, z-index 0.6s;
							z-index: 2;
						}

						.close .letter {
							transform: translatey(0deg);
							transition: transform 0.4s ease, z-index 1s;
							z-index: 1;
						}

						.continue {
							text-align: center;
						}

						.continue button {
							font-weight: 800;
							font-style: normal;
							transition: all 0.1s linear;
							background-color: transparent;
							color: #FFFFFF;
							display: inline-block;
							font-size: 14px;
							text-transform: uppercase;
							margin: 20px;
							margin-top: 100px;
							padding: 10px;
							line-height: 2em;
							text-decoration: none;
							min-width: 150px;
							outline: none;
						}

						/* Ak je obrazovka na šírku a menšia ako 1024px */
						@media (max-width: 1024px) and (orientation: landscape) {
							.continue button {
								margin-top: 5px; /* Oveľa menší margin na šírku */
								margin-bottom: 20px; 
							}
							div#content.container {
							margin-top: -50px;
						}
							div.envelope-wrapper {
								margin-top: -20px;
							}
						}
						
						/* Ak je obrazovka vyššia ako 400px */
						@media (min-height: 400px) and (orientation: landscape) {
							.continue button {
								margin-top: 5px; /* Oveľa menší margin na šírku */
								margin-bottom: 60px; 
							}
							div#content.container {
							margin-top: -50px;
						}
							div.envelope-wrapper {
								margin-top: -20px;
							}
						}

						.continue button:hover {
							background-color: #FFFFFF;
							cursor: pointer;
							color: white;
						}

						.question {
							text-align: center;
							margin-top: 40px;
							max-width: 80%; /* Obmedzenie šírky pre lepšiu responzivitu */
							margin-left: auto;
							margin-right: auto;
						}

						.question p {
							font-size: 18px; /* Menší text */
							font-weight: bold;
							color: #FF6863;
							margin-bottom: 10px;
						}

						.question button {
							background-color: #FF6863;
							color: white;
							padding: 8px 15px; /* Menšie tlačidlá */
							border: none;
							font-size: 16px;
							margin: 5px;
							cursor: pointer;
							border-radius: 5px;
							font-weight: bold;
						}

						.question button:hover {
							background-color: #FF8BA0;
						}

						/* Media queries pre menšie obrazovky */
						@media (max-width: 768px) {
							.question p {
								font-size: 16px; /* Ešte menší text pre mobily */
							}

							.question button {
								font-size: 14px; /* Menšie tlačidlá pre mobily */
								padding: 6px 12px;
							}
						}

						@media (max-width: 480px) {
							.question p {
								font-size: 14px; /* Najmenší text pre veľmi malé obrazovky */
							}

							.question button {
								font-size: 12px;
								padding: 5px 10px;
							}
						}
						
						.surprise {
							text-align: center;
							margin-top: 20px;
							padding: 20px;
						}

						.itinerary-img {
							width: 90%;
							max-width: 100px;
							border-radius: 10px;
							box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
							margin-bottom: 20px;
						}

						#downloadBtn {
							display: inline-block;
							padding: 12px 25px;
							background-color: #FF6863;
							color: white;
							border-radius: 5px;
							text-decoration: none;
							font-size: 18px;
							font-weight: bold;
							transition: 0.3s;
						}

						#downloadBtn:hover {
							background-color: #FF8BA0;
							transform: scale(1.05);
						}
						
						button, p {
							margin: 0 !important;
						}
						p.male {
							text-size: 100px;

							padding: 0;
							margin: 0;
						}

					</style>
		`;
		

        // Adding event listeners to Open and Continue buttons after content is loaded
        const envelope = document.getElementById("envelope");
        const btnContinue = document.getElementById("continue");
		const cardContent = document.getElementById("card-content");

        function updateCard() {
            cardContent.innerHTML = `<p class="words">${messages[currentIndex]}</p>`;
        }

        // Kliknutie na obálku - otvorenie a zobrazenie ďalšej správy
        envelope.addEventListener("click", function (event) {
            event.stopPropagation();

            if (!firstClickDone) {
                firstClickDone = true;
                envelope.classList.add("open");
				envelope.classList.remove("close");
            } else {
                if (!isAnimating) {
                    isAnimating = true;
                    setTimeout(() => {
                        currentIndex = (currentIndex + 1) % messages.length;
                        updateCard();
                        isAnimating = false;
                    }, 300);
                }
            }
        });

        document.addEventListener("click", function () {
            firstClickDone = false;
            envelope.classList.remove("open");
        });

        updateCard(); // Nastavenie prvého textu na začiatku

        // Funkcionalita pre tlačidlo Continue
        btnContinue.addEventListener("click", function () {
            content.innerHTML = `
                <img src="pictures/what.gif" alt="asking tonton">
                <div class="question">
                    <p style="font-size: 24px;margin:0px">Budeš mojou Valentínkou Ami? 💕✨</p>
                    <button id="yesBtn">Áno</button>
                    <button id="noBtn">Nie</button>
                </div>
            `;

            attachYesNoEventListeners(); // Opäť pridáme event listenery
        });

		const noMessages = [
			"Si si istá? Skús to znova 😭",
			"Prečo nie?😭 Ešte raz to skús",
			"Nemiluješ ma láskoooo? 😭",
			"Ako je to možné? 😭😭 To vážne nechceš?😭",
			"Ešte raz to zváž... 😭",
			"Naozaj nechceš? 😭😭😭",
			"Posledná šanca Ami🥹, budeš mojou Valentínkou?!!! 💕"
		];
		
		let noClickCount = 0;
		
		document.getElementById("continue").addEventListener("click", function () {
			showQuestion();
		});
		
		function showQuestion() {
			content.innerHTML = `
				<img src="pictures/what.gif" alt="asking tonton">
				<div class="question">
					<p style="font-size: 24px;margin:0px">Budeš mojou Valentínkou Ami? 💕✨</p>
					<button id="yesBtn" class="yes-btn">Áno</button>
					<button id="noBtn">Nie</button>
				</div>
			`;
		
			attachYesNoEventListeners();
		}
		
		function attachYesNoEventListeners() {
			const yesBtn = document.getElementById("yesBtn");
			const noBtn = document.getElementById("noBtn");
		
			yesBtn.addEventListener("click", function () {
				content.innerHTML = `
					<div style="text-align: center;">
						<img src="pictures/love.gif" alt="Love GIF">
						<p style="font-size: 24px;margin:0px">Jupííííííí✨! .</p>
						<p style="font-size: 24px;margin:0px">Milujem ťa najviac v celom vesmíru láskoooo ! 😘💖</p>
						<p style="font-size: 24px;margin:0px">No a mám aj nejaké prekvapko, no budeš si musieť trošku počkať😉</p>
						<p class="male",style="font-size: 24px;margin:0px">(do nedele no a snáď ma za to nezabiješ😂)</p>
					</div>
					<div style="text-align: center; margin-top: 0px;">
						
					</div>
				`;
		
				attachSurpriseEventListener();
			});
		
			noBtn.addEventListener("click", function () {
				if (noClickCount < noMessages.length - 1) {
					noClickCount++;
				} else {
					noBtn.style.display = "none"; // Skryť "No" pri poslednej správe
				}
		
				content.innerHTML = `
					<div style="text-align: center;">
						<img src="pictures/sad.gif" alt="Sad GIF">
						<p style="font-size: 24px;">${noMessages[Math.min(noClickCount, noMessages.length - 1)]}</p>
					</div>
					<div class="question">
						<button id="yesBtn">Áno</button>
						<button id="noBtn" ${noClickCount >= noMessages.length - 1 ? 'style="display: none;"' : ''}>Nie</button>
					</div>
				`;
		
				attachYesNoEventListeners();
			});
		}
		
		
    });
});

