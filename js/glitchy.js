(function() {
    var style = document.createElement('style');
    style.innerHTML = `
        .glitch {
            animation: shake 0.1s;
            filter: hue-rotate(90deg);
            text-shadow: 2px 0 red, -2px 0 blue;
            overflow: hidden;
        }

        @keyframes shake {
            0% { transform: translate(0, 0); }
            25% { transform: translate(5px, -5px); }
            50% { transform: translate(-5px, 5px); }
            75% { transform: translate(5px, 5px); }
            100% { transform: translate(0, 0); }
        }
        .hidden { opacity: 0; }
    `;
    document.head.appendChild(style);

    document.addEventListener('click', glitchy);
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
            glitchy();
        }
    });

    function glitchy() {
            //shake_error
            const body = document.body;
            body.classList.add('glitch');
            setTimeout(function() {
                body.classList.remove('glitch');
                var links = document.querySelectorAll('a');
                for (var i = 0; i < links.length; i++) {
                    if (Math.random() > 0.3) {
                        var err_t = (Math.random() > 0.5) ? "0x" : "EГГOR_404_";
                        links[i].innerText = (i + 1) + " "+ err_t + Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase();
                    }
                }
            }, 200);

            //artifact_noise
            var noiseInterval = setInterval(createNoise, 50);
            setTimeout(function() {
                clearInterval(noiseInterval);
            }, 200);
        }
})();
function createNoise() {
    var chars = ['░', '▒', '▓', '█', '≡▄', '▀', '0', '1', 'X', '7', '3', 'B', 'C', 'D', 'E', 'QWA', 'TWA', 'SO', 'RE', 'PRES', 'KEY'];
    for (var i = 0; i < 6; i++) {
        var el = document.createElement('div');
        el.style.position = 'fixed';
        el.style.zIndex = '10000';
        el.style.pointerEvents = 'none';
        el.style.color = Math.random() > 0.8 ? '#C88C50' : '#F773B3';
        el.style.top = Math.random() * 100 + 'vh';
        el.style.left = Math.random() * 100 + 'vw';

        var rand = Math.random();

        if (rand > 0.8) {
            el.style.left = (Math.random() * 30) + 'vw';
            el.style.fontSize = '12px';
            el.style.whiteSpace = 'nowrap';
            var line = "";
            for (var k = 0; k < 60; k++) line += chars[Math.floor(Math.random() * chars.length)];
            el.innerText = line;

        } else if (rand > 0.4

        ) {
            el.style.fontSize = (Math.random() * 20 + 18) + 'px';
            var chunk = "";
            for (var k = 0; k < 5; k++) chunk += chars[Math.floor(Math.random() * chars.length)];
            el.innerText = chunk;

        } else {
            el.style.fontSize = (Math.random() * 40 + 10) + 'px';
            el.innerText = chars[Math.floor(Math.random() * chars.length)];
        }

        document.body.appendChild(el);

        (function(target) {
            setTimeout(function() {
                if (target.parentNode) target.parentNode.removeChild(target);
            }, Math.random() * 200 + 50);
        })(el);
    }
}
