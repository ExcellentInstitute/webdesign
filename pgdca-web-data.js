// pgdca-web-data.js
// Excellent Institute - Interactive Web Design (HTML, CSS, JS)

const webBookData = [
    // ==========================================
    // MODULE 1: THE SKELETON (HTML)
    // ==========================================
    {
        id: "module1",
        title: "Module 1: The Skeleton (HTML)",
        topics: [
            {
                heading: "What is Web Design?",
                text: "Welcome to the Matrix! Building a website is exactly like building a robot.<br><br>💀 <strong>HTML</strong> is the skeleton. It gives the robot its shape.<br>👕 <strong>CSS</strong> is the skin and clothes. It makes the robot look beautiful.<br>🧠 <strong>JavaScript</strong> is the brain and muscles. It makes the robot jump, talk, and think!",
                shortcut: "Every single website on the planet is built using these 3 languages."
            },
            {
                heading: "Basics of HTML and Core Tags",
                text: "HTML uses 'Tags' to tell the browser what to do. Tags act like sandwich bread; they wrap around your text. <br><br>The <code>&lt;h1&gt;</code> tag makes text massive (like a newspaper headline). The <code>&lt;p&gt;</code> tag is for normal paragraphs. Let's see how the skeleton looks in real life!",
                shortcut: "Use the slider below to see the HTML code, and then slide to the 'Preview' to see what the browser shows!",
                interactiveCode: {
                    html: `<h1>Welcome to Excellent Institute!</h1>
<p>This is my very first website. I am learning HTML tags!</p>
<p><strong>This text is bold</strong>, and <em>this is italic</em>.</p>`,
                    css: ``,
                    js: ``
                }
            },
            {
                heading: "Forms and Input Elements",
                text: "Websites need to talk to users. We use Forms to create Login boxes, search bars, and message boxes. A form is like a digital envelope. Notice how changing the 'type' to password hides your text as little black dots!",
                shortcut: "Slide to the Preview to try typing in the boxes!",
                interactiveCode: {
                    html: `<h2>Student Login Box</h2>
<form>
  <label>Username:</label>
  <input type="text" placeholder="Enter your name..."><br><br>
  
  <label>Secret Password:</label>
  <input type="password" placeholder="Shhh..."><br><br>
  
  <button type="button">Login Now</button>
</form>`,
                    css: ``,
                    js: ``
                }
            }
        ]
    },

    // ==========================================
    // MODULE 2: PAINTING THE ROBOT (CSS)
    // ==========================================
    {
        id: "module2",
        title: "Module 2: Painting the Robot (CSS)",
        topics: [
            {
                heading: "Types of CSS (Inline, Internal, External)",
                text: "HTML alone is ugly. We need CSS (Cascading Style Sheets) to paint it! There are 3 ways to use CSS:<br><br>1. <strong>Inline:</strong> Written directly inside the HTML tag (messy).<br>2. <strong>Internal:</strong> Written at the top of the page inside a &lt;style&gt; tag.<br>3. <strong>External:</strong> A completely separate CSS file (The Professional Way!).",
                shortcut: "External CSS allows you to change the color of 100 web pages at the same time by just editing one file!"
            },
            {
                heading: "Colors, Borders, and Magic Buttons",
                text: "In CSS, every element is secretly a box. You can change its background, give it rounded corners (border-radius), and make the text glow! Let's transform a boring HTML button into a beautiful, professional web button.",
                shortcut: "Slide through HTML ➔ CSS ➔ Preview to see how they link together!",
                interactiveCode: {
                    html: `<button class="magic-btn">Hover Over Me!</button>`,
                    css: `.magic-btn {
  background-color: #10b981;
  color: white;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s;
}

.magic-btn:hover {
  background-color: #059669;
  box-shadow: 0px 5px 15px rgba(16, 185, 129, 0.5);
  transform: translateY(-3px);
}`,
                    js: ``
                }
            }
        ]
    },

    // ==========================================
    // MODULE 3: MASTER OF LAYOUTS
    // ==========================================
    {
        id: "module3",
        title: "Module 3: Layout Design (Flexbox & Grid)",
        topics: [
            {
                heading: "The Power of Flexbox",
                text: "Before Flexbox, putting two boxes side-by-side on a website was a nightmare. Flexbox makes it mathematically perfect with just 3 lines of code! It is best used for 1-Dimensional layouts (like a navigation bar or a single row of images).",
                shortcut: "Flexbox aligns items perfectly across a single row or a single column."
            },
            {
                heading: "CSS Grid (Building Galleries)",
                text: "While Flexbox is for rows, CSS Grid is for 2-Dimensional layouts (Rows AND Columns at the same time!). It is perfect for building photo galleries or complex dashboard layouts. Look at how easily we can create a grid of colored cards!",
                shortcut: "Check the CSS code to see the magic 'grid-template-columns' property!",
                interactiveCode: {
                    html: `<div class="gallery">
  <div class="card card1">Box 1</div>
  <div class="card card2">Box 2</div>
  <div class="card card3">Box 3</div>
</div>`,
                    css: `.gallery {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 15px;
}
.card {
  padding: 30px;
  color: white;
  text-align: center;
  font-weight: bold;
  border-radius: 10px;
}
.card1 { background: #f43f5e; }
.card2 { background: #3b82f6; }
.card3 { background: #eab308; }`,
                    js: ``
                }
            }
        ]
    },

    // ==========================================
    // MODULE 4: THE BRAIN (JAVASCRIPT)
    // ==========================================
    {
        id: "module4",
        title: "Module 4: JavaScript & Interactivity",
        topics: [
            {
                heading: "Basics of JS (Variables & Functions)",
                text: "HTML and CSS just sit there. JavaScript is the brain! <br><br><strong>Variables</strong> are like buckets that hold information (like a user's name).<br><strong>Functions</strong> are recipes. They are blocks of code that only run when you tell them to (like when a user clicks a button).",
                shortcut: "JavaScript is what makes Facebook load new posts without refreshing the page!"
            },
            {
                heading: "Event Handling & The DOM",
                text: "The DOM (Document Object Model) is how JavaScript reads your HTML. JavaScript can grab any HTML tag and change it LIVE on the screen without reloading the page! <br><br>Let's use an 'Event' (clicking a button) to trigger a 'Function' that changes the DOM.",
                shortcut: "Slide to Preview, and click the button to see JavaScript manipulate the HTML live!",
                interactiveCode: {
                    html: `<div id="status-box" class="box">System is Waiting...</div>
<br>
<button onclick="activateSystem()" class="btn">Activate System</button>`,
                    css: `.box {
  padding: 20px;
  background: #334155;
  color: white;
  font-family: monospace;
  font-size: 18px;
  text-align: center;
  border-radius: 8px;
}
.btn {
  background: #3b82f6; color: white; border: none; 
  padding: 10px 20px; border-radius: 5px; cursor: pointer;
}`,
                    js: `// This is the JavaScript Function!
function activateSystem() {
  // 1. Grab the HTML box by its ID
  let box = document.getElementById('status-box');
  
  // 2. Change the text inside the box
  box.innerText = "System Activated! Access Granted.";
  
  // 3. Change the CSS color of the box
  box.style.background = "#10b981";
}`
                }
            }
        ]
    },

    // ==========================================
    // MODULE 5: FUN ACTIVITY
    // ==========================================
    {
        id: "module5",
        title: "Module 5: Fun Animations!",
        topics: [
            {
                heading: "The Bouncing Ping-Pong Ball",
                text: "Let's combine everything we have learned! <br><br>1. We will use HTML to create a ball and a button.<br>2. We will use CSS to make the ball round, red, and add a smooth 'transition'.<br>3. We will use JavaScript to make the ball jump up into the air when the button is clicked! This is how basic video games are made on the web.",
                shortcut: "Slide to the Preview and click 'Bounce!' to play with the code.",
                interactiveCode: {
                    html: `<div id="game-area">
  <div id="ball"></div>
</div>
<br>
<button onclick="bounce()" class="btn">Bounce!</button>`,
                    css: `#game-area {
  height: 150px;
  border-bottom: 4px solid #0f172a;
  position: relative;
  overflow: hidden;
}
#ball {
  width: 40px; height: 40px;
  background-color: #ef4444;
  border-radius: 50%;
  position: absolute;
  bottom: 0; left: 50%;
  transform: translateX(-50%);
  /* The magic animation line */
  transition: bottom 0.4s ease-out; 
}
.btn {
  padding: 10px 20px; background: #0f172a; 
  color: white; cursor: pointer; border-radius: 5px;
}`,
                    js: `function bounce() {
  let ball = document.getElementById('ball');
  
  // Shoot the ball up to 100px
  ball.style.bottom = "100px";
  
  // Wait half a second, then bring it back down
  setTimeout(function() {
    ball.style.bottom = "0px";
  }, 400);
}`
                }
            }
        ]
    },

    // ==========================================
    // MODULE 6: GOING LIVE TO THE WORLD
    // ==========================================
    {
        id: "module6",
        title: "Module 6: Responsive Hosting",
        topics: [
            {
                heading: "Responsive Design (Mobile Friendly)",
                text: "A website looks great on a giant laptop screen, but what happens when you open it on a tiny mobile phone? It breaks! <br><br>We use a CSS magic spell called <strong>Media Queries</strong>. It detects the size of the user's screen. If the screen is small (like a phone), we can tell the CSS to stack boxes top-to-bottom instead of side-by-side.",
                shortcut: "Always design for Mobile phones first! 80% of web traffic comes from smartphones."
            },
            {
                heading: "Hosting Your Website for Free (Netlify)",
                text: "Right now, your beautiful website only lives on your local 'C: Drive'. Nobody else in the world can see it. You need a <strong>Server</strong>.<br><br><strong>Netlify Drop</strong> is an incredible, free web server tool. You literally open their website, drag the folder containing your <code>index.html</code>, <code>style.css</code>, and <code>script.js</code> files, and drop it on the screen.<br><br>Within 10 seconds, Netlify will generate a live, global web link that you can share with your friends and family on WhatsApp!",
                shortcut: "Congratulations! You have officially coded, styled, animated, and deployed a live website to the internet."
            }
        ]
    }
];
