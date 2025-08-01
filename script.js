const flowerImages = [
    'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f338.png',
    'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f33c.png',
    'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f339.png',
    'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f33a.png',
];

function createFlower() {
    const flower = document.createElement('img');
    flower.src = flowerImages[Math.floor(Math.random() * flowerImages.length)];
    flower.className = 'flower';
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.top = '-40px';
    flower.style.transform = `rotate(${Math.random() * 360}deg)`;
    flower.style.opacity = (0.7 + Math.random() * 0.3).toFixed(2);
    flower.style.width = flower.style.height = (28 + Math.random() * 18) + 'px';
    document.getElementById('flowers-animation').appendChild(flower);

    const duration = 6 + Math.random() * 4;
    const horizontalDrift = (Math.random() - 0.5) * 100;
    const start = Date.now();
    function animate() {
        const elapsed = (Date.now() - start) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        flower.style.top = (progress * (window.innerHeight + 40) - 40) + 'px';
        flower.style.left = `calc(${parseFloat(flower.style.left)}vw + ${horizontalDrift * progress}px)`;
        flower.style.transform = `rotate(${Math.random() * 360}deg)`;
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            flower.style.opacity = '0';
            setTimeout(() => flower.remove(), 500);
        }
    }
    animate();
}

setInterval(createFlower, 600);
for (let i = 0; i < 8; i++) setTimeout(createFlower, i * 400);
const openBtn = document.getElementById('open-btn');
const noBtn = document.getElementById('no-btn');
const letterSection = document.getElementById('letter-section');

function showLetter() {
    letterSection.innerHTML = `
        <div id="letter">
            <h2>To My Beautiful Girlfriend 💖</h2>
            <p>
                Happy Girlfriend's Day, my love! 🌸<br><br>                 I just want to remind you how much you mean to me. I love you so much my love. Thank you for always being here for me, loving me, caring for me, and beautiful inside and out.<br><br>                 I hope today brings you as much happiness as you bring to my life every single day. I love you more than words can say!<br><br>
                Forever yours,<br>
                ❤️
            </p>
        </div>
    `;
}

openBtn.addEventListener('click', showLetter);

const prompts = [
    "Are you sure you don't want to open your letter?",
    "Are you really sure?",
    "Are you absolutely sure?",
    "Are you 100% sure?",
    "Are you 1000% sure?",
    "You might regret not opening it! Still no?",
    "It's a really sweet letter... Want to see?",
    "I wrote it just for you! Open it?",
    "It's full of love! Ready to open?",
    "Don't you want to know what it says?",
    "It's a special surprise! Open it?",
    "I promise it's worth it! Open now?",
    "You know you want to! Open it?",
    "Just a peek?",
    "Pretty please?",
    "With a cherry on top?",
    "I worked hard on it! Open it?",
    "It will make you smile! Open it?",
    "I bet you'll love it! Open?",
    "It's not a prank, I promise! Open?",
    "It's all for you! Open it?",
    "Don't keep me waiting! Open it?",
    "I'm getting nervous... Open it?",
    "I can't wait for you to read it! Open?",
    "It's Girlfriend's Day! Open your letter?",
    "You deserve this! Open it?",
    "I put my heart into it! Open?",
    "It's full of flowers and love! Open?",
    "I double dare you to open it!",
    "Triple dare! Open it?",
    "Quadruple dare! Open it?",
    "I won't stop asking! Open it?",
    "You know you want to!",
    "Just click yes!",
    "I believe in you! Open it?",
    "It's not a test, just a letter! Open?",
    "I hope you say yes!",
    "The suspense is real! Open it?",
    "I can't wait any longer! Open?",
    "Please?",
    "Pretty please?",
    "With extra love?",
    "With extra flowers?",
    "With a virtual hug?",
    "With a virtual kiss?",
    "With all my heart?",
    "With all my love?",
    "With all the flowers in the world?",
    "With all the stars in the sky?",
    "With all the sweetness?",
    "With all the cuteness?",
    "With all the happiness?",
    "With all the joy?",
    "With all the sunshine?",
    "With all the rainbows?",
    "With all the butterflies?",
    "With all the sparkles?",
    "With all the giggles?",
    "With all the smiles?",
    "With all the hugs?",
    "With all the kisses?",
    "With all the snuggles?",
    "With all the cuddles?",
    "With all the good vibes?",
    "With all the happy thoughts?",
    "With all the sweet dreams?",
    "With all the warm fuzzies?",
    "With all the love songs?",
    "With all the poetry?",
    "With all the cute emojis?",
    "With all the hearts?",
    "With all the pink?",
    "With all the glitter?",
    "With all the confetti?",
    "With all the balloons?",
    "With all the cake?",
    "With all the ice cream?",
    "With all the sprinkles?",
    "With all the sweetness?",
    "With all the magic?",
    "With all the fairy dust?",
    "With all the unicorns?",
    "With all the rainbows?",
    "With all the puppy eyes?",
    "With all the kitten purrs?",
    "With all the happy dances?",
    "With all the silly faces?",
    "With all the giggles?",
    "With all the tickles?",
    "With all the happy tears?",
    "With all the best wishes?",
    "With all the good luck?",
    "With all the best days?",
    "With all the best moments?",
    "With all the best memories?",
    "With all the best feelings?",
    "With all the best hugs?",
    "With all the best kisses?",
    "With all the best smiles?",
    "With all the best love?",
    "With all the best you!",
    "Okay, last time... open it?",
    "Just kidding, I'll keep asking! Open it?",
    "You can't escape the love! Open it?",
    "Still no? I admire your willpower! Open it?",
    "I love you! Open your letter?"
];
let promptIndex = 0;

function askAgain() {
    letterSection.innerHTML = `
        <p class="greeting">${prompts[promptIndex % prompts.length]}</p>
        <div class="button-group">
            <button id="open-btn">Okay, open it!</button>
            <button id="really-no-btn">No, not yet</button>
        </div>
    `;
    document.getElementById('open-btn').addEventListener('click', showLetter);
    document.getElementById('really-no-btn').addEventListener('click', askAgain);
    promptIndex++;
}

noBtn.addEventListener('click', askAgain);
