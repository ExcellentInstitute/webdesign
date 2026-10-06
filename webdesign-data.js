// pgdca-web-data.js
// Excellent Institute - Web Designing (HTML, CSS & JS) - PGDCA Exclusive

const webBookData = [];

// ==========================================
// MODULE 1: HTML SKELETON & FORMS
// ==========================================
webBookData.push({
    id: "module1",
    title: "Module 1: HTML Skeleton & Forms",
    topics: [
        {
            heading: "What is Web Design? (The House Analogy)",
            text: `Welcome to Web Design! Building a website is exactly like building a house. <br><br>
            🏠 <strong>HTML</strong> is the skeleton and bricks. It gives the website structure (headings, paragraphs, images).<br>
            🎨 <strong>CSS</strong> is the paint, the curtains, and the interior design. It makes the house look beautiful (colors, layouts, fonts).<br>
            ⚡ <strong>JavaScript</strong> is the electricity and plumbing. It makes the house actually work (buttons that click, popups that appear, forms that submit).`,
            shortcut: "Every single website on the internet, from Google to Facebook, is built using HTML, CSS, and JavaScript.",
            imgSrc: "" // No image needed, concept is text-driven
        },
        {
            heading: "Basics of HTML & Core Tags",
            text: `HTML stands for HyperText Markup Language. You write HTML using <strong>Tags</strong>. Tags are like sandwich bread; they wrap around your text to tell the browser what to do.<br><br>
            <strong>The Basic Skeleton:</strong><br>
            <div style="background:#1e293b; color:#38bdf8; padding:15px; border-radius:8px; font-family:monospace; margin-top:10px;">
                &lt;!DOCTYPE html&gt;<br>
                &lt;html&gt;<br>
                &lt;head&gt;<br>
                &nbsp;&nbsp;&lt;title&gt;My First Website&lt;/title&gt;<br>
                &lt;/head&gt;<br>
                &lt;body&gt;<br>
                &nbsp;&nbsp;&lt;h1&gt;Welcome to Excellent Institute!&lt;/h1&gt;<br>
                &nbsp;&nbsp;&lt;p&gt;This is a paragraph of text.&lt;/p&gt;<br>
                &lt;/body&gt;<br>
                &lt;/html&gt;
            </div><br>
            The <code>&lt;h1&gt;</code> makes text huge, and the <code>&lt;p&gt;</code> makes normal paragraph text!`,
            shortcut: "Save your file as 'index.html' and simply double-click it to view it in Google Chrome!",
            imgSrc: ""
        },
        {
            heading: "Adding Images and Links",
            text: `A website is boring without pictures and links! <br><br>
            <strong>How to add a Link:</strong> We use the Anchor tag <code>&lt;a&gt;</code>. The "href" tells the browser where to go.<br>
            <div style="background:#1e293b; color:#a7f3d0; padding:10px; border-radius:8px; font-family:monospace; margin-bottom:15px;">
                &lt;a href="https://google.com"&gt;Click here to go to Google!&lt;/a&gt;
            </div>
            <strong>How to add an Image:</strong> We use the <code>&lt;img&gt;</code> tag. It is a special tag because it doesn't need a closing slice of bread!<br>
            <div style="background:#1e293b; color:#fca5a5; padding:10px; border-radius:8px; font-family:monospace;">
                &lt;img src="myphoto.jpg" alt="A beautiful scenery" width="300"&gt;
            </div>`,
            shortcut: "The 'alt' text is super important! It tells blind people reading the website what the image is about.",
            imgSrc: ""
        },
        {
            heading: "Forms and Input Elements",
            text: `How do users log in or send messages? We use Forms! A form acts like a digital envelope that sends user data to a server.<br><br>
            Here is how you build a simple Login Box:<br>
            <div style="background:#1e293b; color:#cbd5e1; padding:15px; border-radius:8px; font-family:monospace; margin-top:10px;">
                &lt;form&gt;<br>
                &nbsp;&nbsp;&lt;label&gt;Enter Username:&lt;/label&gt;<br>
                &nbsp;&nbsp;&lt;input type="text" placeholder="Type here..."&gt;&lt;br&gt;&lt;br&gt;<br>
                &nbsp;&nbsp;&lt;label&gt;Enter Password:&lt;/label&gt;<br>
                &nbsp;&nbsp;&lt;input type="password"&gt;&lt;br&gt;&lt;br&gt;<br>
                &nbsp;&nbsp;&lt;button type="submit"&gt;Login Now&lt;/button&gt;<br>
                &lt;/form&gt;
            </div><br>
            Notice how <code>type="password"</code> automatically hides the letters as little black dots!`,
            shortcut: "Always wrap your inputs inside a <form> tag, otherwise the 'Submit' button won't know what to send.",
            imgSrc: ""
        }
    ]
});

// ==========================================
// MODULE 2: CSS STYLING & BEAUTIFUL LAYOUTS
// ==========================================
webBookData.push({
    id: "module2",
    title: "Module 2: CSS Styling & Beautiful Layouts",
    topics: [
        {
            heading: "Types of CSS (Inline, Internal, External)",
            text: `CSS (Cascading Style Sheets) is the magic paintbrush for your HTML. There are three ways to apply CSS:<br><br>
            <strong>1. Inline CSS (Directly on the tag):</strong> Good for a quick fix, but messy.<br>
            <code style="color:#d946ef;">&lt;h1 style="color: red;"&gt;Hello!&lt;/h1&gt;</code><br><br>
            <strong>2. Internal CSS (Inside the Head):</strong> Great for single pages.<br>
            <div style="background:#1e293b; color:#cbd5e1; padding:10px; border-radius:8px; font-family:monospace;">
                &lt;style&gt;<br>
                &nbsp;&nbsp;h1 { color: blue; font-size: 50px; }<br>
                &lt;/style&gt;
            </div><br>
            <strong>3. External CSS (The Professional Way):</strong> Write all your CSS in a separate file called <code>style.css</code> and link it. This way, one CSS file can style 100 HTML pages at once!`,
            shortcut: "Always use External CSS. It keeps your HTML clean and easy to read.",
            imgSrc: ""
        },
        {
            heading: "Colors, Fonts & The Box Model",
            text: `Every single element on a website is actually a hidden rectangular box. Understanding this "Box Model" is the secret to spacing.<br><br>
            <ul>
                <li><strong>Padding:</strong> Space INSIDE the box (pushes the text away from the border).</li>
                <li><strong>Border:</strong> The actual line drawn around the box.</li>
                <li><strong>Margin:</strong> Space OUTSIDE the box (pushes this box away from other boxes).</li>
            </ul>
            <div style="background:#1e293b; color:#a7f3d0; padding:15px; border-radius:8px; font-family:monospace;">
                .my-button {<br>
                &nbsp;&nbsp;background-color: #10b981; /* Green color */<br>
                &nbsp;&nbsp;color: white; /* Text color */<br>
                &nbsp;&nbsp;padding: 10px 20px; /* Top/Bottom 10, Left/Right 20 */<br>
                &nbsp;&nbsp;border-radius: 8px; /* Rounded corners! */<br>
                }
            </div>`,
            shortcut: "Use HEX codes (like #FF0000) for exact, professional colors instead of just typing 'red'.",
            imgSrc: ""
        },
        {
            heading: "Modern Layouts (Flexbox)",
            text: `Before Flexbox, putting two boxes side-by-side on a website was a nightmare. Flexbox makes it mathematically perfect with just 3 lines of code!<br><br>
            Imagine you have a big <code>&lt;div class="container"&gt;</code> holding 3 smaller boxes. To put them in a perfect row:<br>
            <div style="background:#1e293b; color:#fde047; padding:15px; border-radius:8px; font-family:monospace;">
                .container {<br>
                &nbsp;&nbsp;display: flex;<br>
                &nbsp;&nbsp;justify-content: space-between; /* Spreads them out */<br>
                &nbsp;&nbsp;align-items: center; /* Centers them vertically */<br>
                }
            </div><br>
            Just like that, your navigation bar is perfectly aligned!`,
            shortcut: "Flexbox handles 1-Dimensional layouts (Rows OR Columns). Grid handles 2-Dimensional layouts (Rows AND Columns).",
            imgSrc: ""
        }
    ]
});

// ==========================================
// MODULE 3: JAVASCRIPT & DOM MAGIC
// ==========================================
webBookData.push({
    id: "module3",
    title: "Module 3: JavaScript & DOM Magic",
    topics: [
        {
            heading: "Basics of JavaScript (Variables & Data)",
            text: `HTML and CSS are dead; they just sit there. JavaScript brings the website to life! It is a real programming language.<br><br>
            <strong>Variables</strong> are like named buckets that hold data.<br>
            <div style="background:#1e293b; color:#93c5fd; padding:15px; border-radius:8px; font-family:monospace;">
                // Let's create some variables!<br>
                let studentName = "Rahul"; // This is a String (Text)<br>
                let studentAge = 22; // This is a Number<br>
                let isPassed = true; // This is a Boolean (True/False)<br><br>
                console.log("Welcome " + studentName);
            </div><br>
            You can view <code>console.log()</code> messages by Right-Clicking your website > Inspect > Console.`,
            shortcut: "Press F12 in Chrome to open Developer Tools and see your JavaScript errors.",
            imgSrc: ""
        },
        {
            heading: "Functions and Event Handling",
            text: `A <strong>Function</strong> is a reusable block of code. Think of it like a recipe. An <strong>Event</strong> is when a user does something (like clicking a button). We tie them together!<br><br>
            <div style="background:#1e293b; color:#fca5a5; padding:15px; border-radius:8px; font-family:monospace;">
                // Step 1: Write the Function recipe<br>
                function sayHello() {<br>
                &nbsp;&nbsp;alert("Hello Excellent Student!");<br>
                }<br>
            </div><br>
            Now, in your HTML, attach that function to a button click!<br>
            <div style="background:#1e293b; color:#cbd5e1; padding:10px; border-radius:8px; font-family:monospace; margin-top:10px;">
                &lt;button onclick="sayHello()"&gt;Click Me!&lt;/button&gt;
            </div>`,
            shortcut: "Events can be 'onclick', 'onmouseover' (hover), or 'onkeyup' (typing).",
            imgSrc: ""
        },
        {
            heading: "Using the DOM (Document Object Model)",
            text: `The DOM is how JavaScript talks to HTML. When the browser loads your HTML, it creates a "tree" of all your tags. JavaScript can grab any branch of that tree and change it live!<br><br>
            Imagine you have an empty paragraph: <code>&lt;p id="statusBox"&gt;&lt;/p&gt;</code><br><br>
            Let's use JavaScript to grab it by its ID and change its text:<br>
            <div style="background:#1e293b; color:#a7f3d0; padding:15px; border-radius:8px; font-family:monospace;">
                // Grab the HTML element<br>
                let box = document.getElementById("statusBox");<br><br>
                // Change its text and style live on the screen!<br>
                box.innerText = "Payment Successful!";<br>
                box.style.color = "green";
            </div>`,
            shortcut: "DOM manipulation is the secret behind dark mode toggles, live search results, and pop-up menus.",
            imgSrc: ""
        }
    ]
});

// ==========================================
// MODULE 4: GOING LIVE (RESPONSIVE HOSTING)
// ==========================================
webBookData.push({
    id: "module4",
    title: "Module 4: Responsive Design & Basic Hosting",
    topics: [
        {
            heading: "Responsive Design (Mobile Friendly)",
            text: `A website looks great on a giant laptop, but what happens when a user opens it on a tiny mobile phone? It shrinks and becomes unreadable! <br><br>
            We use CSS <strong>Media Queries</strong> to detect the screen size and completely change the CSS rules for mobile phones.<br>
            <div style="background:#1e293b; color:#cbd5e1; padding:15px; border-radius:8px; font-family:monospace;">
                /* If the screen is SMALLER than 600px (Mobile)... */<br>
                @media (max-width: 600px) {<br>
                &nbsp;&nbsp;.container {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;flex-direction: column; /* Stack boxes top-to-bottom! */<br>
                &nbsp;&nbsp;&nbsp;&nbsp;font-size: 14px; /* Shrink text */<br>
                &nbsp;&nbsp;}<br>
                }
            </div>`,
            shortcut: "Always design for Mobile first! It's easier to scale a mobile site up than squish a desktop site down.",
            imgSrc: ""
        },
        {
            heading: "Hosting Your Website for Free (GitHub)",
            text: `Your website is amazing, but right now it only lives on your local 'C: Drive'. Nobody else in the world can see it. You need a <strong>Server</strong>.<br><br>
            <strong>GitHub Pages</strong> is a free server provided by Microsoft.<br>
            1. Create a free account on GitHub.com.<br>
            2. Create a new "Repository" (a digital folder).<br>
            3. Upload your <code>index.html</code>, <code>style.css</code>, and your images into the folder.<br>
            4. Go to Settings > Pages and turn it on.<br><br>
            Within 2 minutes, GitHub will give you a live global link (e.g., <em>https://yourname.github.io</em>) to share with the world!`,
            shortcut: "Congratulations! You have officially coded, styled, and deployed a live website to the internet.",
            imgSrc: ""
        }
    ]
});
