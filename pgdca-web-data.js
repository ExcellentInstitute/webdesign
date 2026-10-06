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
                heading: "Lists and Organization",
                text: "When you want to display points or steps, do not just type them in a paragraph. We use Lists!<br><br>There are two types:<br>1. <strong>Unordered List (&lt;ul&gt;)</strong>: Gives you bullet points.<br>2. <strong>Ordered List (&lt;ol&gt;)</strong>: Gives you numbers (1, 2, 3).<br>Inside both, every single item must be wrapped in a List Item tag <code>&lt;li&gt;</code>.",
                shortcut: "Slide to the Preview to see the difference between numbers and bullets.",
                interactiveCode: {
                    html: `<h3>My Web Design Shopping List</h3>
<ul>
  <li>HTML Skeleton</li>
  <li>CSS Paint</li>
</ul>

<h3>Steps to Learn</h3>
<ol>
  <li>Open Notepad</li>
  <li>Write Code</li>
  <li>Save as index.html</li>
</ol>`,
                    css: ``,
                    js: ``
                }
            },
            {
                heading: "Tables (Grids of Data)",
                text: "To display data neatly, we use Tables. <br>The <code>&lt;table&gt;</code> tag wraps everything. <br><code>&lt;tr&gt;</code> makes a Table Row (left to right). <br><code>&lt;th&gt;</code> makes a bold Table Header. <br><code>&lt;td&gt;</code> holds the actual Table Data inside the row.",
                shortcut: "Without CSS, a table has no visible lines. Look at the CSS tab to see how we added borders!",
                interactiveCode: {
                    html: `<table>
  <tr>
    <th>Student Name</th>
    <th>Course</th>
  </tr>
  <tr>
    <td>Rahul</td>
    <td>PGDCA</td>
  </tr>
  <tr>
    <td>Priya</td>
    <td>Tally</td>
  </tr>
</table>`,
                    css: `table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 10px;
  text-align: left;
}`,
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
  
  <label>Course:</label>
  <select>
    <option>Web Design</option>
    <option>Tally</option>
  </select><br><br>
  
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
                heading: "Typography & Backgrounds",
                text: "You can change how words look and feel. You can change the <code>font-family</code> (Arial, Times New Roman), the <code>font-size</code>, and the <code>text-align</code>. You can also give the entire background a color or even a background image!",
                shortcut: "In CSS, we use HEX codes (like #FF0000) for exact, professional colors instead of just typing 'red'.",
                interactiveCode: {
                    html: `<div class="fancy-box">
  <h1>Excellent Typography</h1>
  <p>This text is centered, white, and using a modern sans-serif font over a dark background.</p>
</div>`,
                    css: `.fancy-box {
  background-color: #1e293b;
  color: white;
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 40px;
  border-radius: 12px;
}
.fancy-box h1 {
  font-size: 32px;
  letter-spacing: 2px;
  color: #10b981;
}`,
                    js: ``
                }
            },
            {
                heading: "Colors, Borders, and Magic Buttons",
                text: "In CSS, every element is secretly a box. You can change its background, give it rounded corners (border-radius), and make the text glow! Let's transform a boring HTML button into a beautiful, professional web button.",
                shortcut: "Slide through HTML ➔ CSS ➔ Preview to see how the ':hover' effect makes the button jump!",
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
            },
            {
                heading: "Drawing Shapes with CSS",
                text: "Did you know you can draw pictures using only CSS math? We don't always need images. By playing with the <code>width</code>, <code>height</code>, and <code>border-radius</code>, you can turn a square HTML <code>&lt;div&gt;</code> into a perfect circle, an oval, or even a pill shape!",
                shortcut: "If you set width and height the same, and border-radius to 50%, you get a perfect circle.",
                interactiveCode: {
                    html: `<h3>CSS Shapes</h3>
<div class="square">Square</div><br>
<div class="circle">Circle</div><br>
<div class="pill">Pill Shape</div>`,
                    css: `.square {
  width: 80px; height: 80px;
  background: #3b82f6; color: white;
  line-height: 80px; text-align: center;
}
.circle {
  width: 80px; height: 80px;
  background: #f43f5e; color: white;
  border-radius: 50%;
  line-height: 80px; text-align: center;
}
.pill {
  width: 150px; height: 50px;
  background: #eab308; color: black;
  border-radius: 25px; /* Half of the height */
  line-height: 50px; text-align: center;
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
                text: "Before Flexbox, putting two boxes side-by-side on a website was a nightmare. Flexbox makes it mathematically perfect with just 3 lines of code! It is best used for 1-Dimensional layouts (like a navigation bar or a single row of images).<br><br>By using <code>justify-content</code>, you can push boxes to the edges, center them, or space them perfectly.",
                shortcut: "Flexbox aligns items perfectly across a single row or a single column.",
                interactiveCode: {
                    html: `<div class="navbar">
  <div class="logo">MySite</div>
  <div class="links">
    <span>Home</span>
    <span>About</span>
    <span>Contact</span>
  </div>
</div>`,
                    css: `.navbar {
  display: flex;
  justify-content: space-between; /* Pushes Logo to left, Links to right */
  align-items: center; /* Centers them vertically */
  background: #1e293b; color: white;
  padding: 15px 30px; border-radius: 8px;
}
.links span { margin-left: 15px; cursor: pointer; color: #38bdf8; }`,
                    js: ``
                }
            },
            {
                heading: "CSS Grid (Building Galleries)",
                text: "While Flexbox is for rows, CSS Grid is for 2-Dimensional layouts (Rows AND Columns at the same time!). It is perfect for building photo galleries, complex dashboard layouts, or calculators. Look at how easily we can create a grid of colored cards by just telling CSS we want exactly 3 columns!",
                shortcut: "Check the CSS code to see the magic 'grid-template-columns' property!",
                interactiveCode: {
                    html: `<div class="gallery">
  <div class="card card1">Box 1</div>
  <div class="card card2">Box 2</div>
  <div class="card card3">Box 3</div>
  <div class="card card4">Box 4</div>
</div>`,
                    css: `.gallery {
  display: grid;
  grid-template-columns: auto auto auto; /* Creates exactly 3 columns! */
  gap: 15px;
}
.card {
  padding: 30px; color: white; text-align: center;
  font-weight: bold; border-radius: 10px;
}
.card1 { background: #f43f5e; }
.card2 { background: #3b82f6; }
.card3 { background: #eab308; }
.card4 { background: #10b981; }`,
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
                heading: "Variables and Data Types",
                text: "HTML and CSS just sit there. JavaScript is the brain! <br><br><strong>Variables</strong> are like buckets that hold information. We create a bucket using the word <code>let</code>. A variable can hold Text (String), Numbers, or True/False (Boolean).",
                shortcut: "Slide to the Preview tab. The JavaScript uses 'document.write' to instantly print the math answer on the screen!",
                interactiveCode: {
                    html: `<h2>JavaScript Math:</h2>`,
                    css: `h2 { color: #333; font-family: sans-serif; }`,
                    js: `let studentName = "Priya"; // String
let age = 22; // Number
let isEnrolled = true; // Boolean

let mathScore = 85;
let scienceScore = 90;
let total = mathScore + scienceScore;

document.write("Student: " + studentName + "<br>");
document.write("Total Marks: " + total);`
                }
            },
            {
                heading: "Logic (If / Else) & Arrays",
                text: "Computers are smart because they can make decisions using <strong>If/Else</strong> statements.<br>We also use <strong>Arrays</strong>, which are special lists that hold multiple items in one single variable bucket. (e.g., a list of groceries).",
                shortcut: "In JavaScript arrays, we start counting from ZERO, not one!",
                interactiveCode: {
                    html: `<div id="result"></div>`,
                    css: `#result { padding: 20px; background: #e0e7ff; color: #3730a3; font-weight: bold; border-radius: 8px; }`,
                    js: `let marks = 75;
let message = "";

// The Brain making a decision
if (marks >= 60) {
  message = "Congratulations! You passed the exam.";
} else {
  message = "Work harder next time!";
}

// Arrays (A list of items)
let courses = ["Web Design", "Tally", "C++"];
let firstCourse = courses[0]; // Gets "Web Design"

document.getElementById("result").innerHTML = message + "<br>Your first class is: " + firstCourse;`
                }
            },
            {
                heading: "Event Handling & The DOM",
                text: "The DOM (Document Object Model) is how JavaScript reads your HTML. JavaScript can grab any HTML tag using <code>getElementById</code> and change it LIVE on the screen without reloading the page! <br><br>Let's use an 'Event' (clicking a button) to trigger a 'Function' that changes the DOM.",
                shortcut: "Slide to Preview, and click the button to see JavaScript manipulate the HTML live!",
                interactiveCode: {
                    html: `<div id="status-box" class="box">System is Waiting...</div>
<br>
<button onclick="activateSystem()" class="btn">Activate System</button>`,
                    css: `.box {
  padding: 20px; background: #334155; color: white;
  font-family: monospace; font-size: 18px;
  text-align: center; border-radius: 8px;
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
  color: white; cursor: pointer; border-radius: 5px; font-weight: bold;
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
