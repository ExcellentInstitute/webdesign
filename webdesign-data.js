// webdesign-data.js
// Excellent Institute - Web Designing using HTML, CSS & JavaScript (PGDCA Exclusive)

const webdesignBookData = [];

// ==========================================
// MODULE 1: HTML ARCHITECTURE (THE SKELETON)
// ==========================================
webdesignBookData.push({
    id: "module1",
    title: "Module 1: HTML Architecture (The Skeleton)",
    topics: [
        {
            heading: "Basics of HTML and Core Tags",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #3b82f6;">
                <strong>📅 Target Phase 1:</strong> Understand how web pages are structured using markup tags.
            </div>
            HTML (HyperText Markup Language) is not a programming language; it is the skeleton of a website. It tells the browser what is a heading, what is a paragraph, and what is an image.<br><br>
            <strong>Core Structure:</strong> Every HTML page starts with <code>&lt;!DOCTYPE html&gt;</code>, followed by the <code>&lt;html&gt;</code> tag, which contains the <code>&lt;head&gt;</code> (for titles and hidden settings) and the <code>&lt;body&gt;</code> (where the visible content goes).<br><br>
            <strong>Essential Tags:</strong><br>
            - <code>&lt;h1&gt; to &lt;h6&gt;</code>: For main titles and subheadings.<br>
            - <code>&lt;p&gt;</code>: For writing paragraphs.<br>
            - <code>&lt;a href="url"&gt;</code>: To create clickable links.<br>
            - <code>&lt;img src="image.jpg"&gt;</code>: To display pictures.
            <div style="background:#eff6ff; padding:15px; border-radius:8px; border:1px solid #3b82f6; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#1d4ed8;">💻 Practical Assignment</h4>
                <ul>
                    <li>Open Notepad or VS Code. Write a basic HTML structure. Add an H1 tag with your name, a paragraph about your hobbies, and an image of your favorite place. Save the file as <code>index.html</code> and open it in Google Chrome.</li>
                </ul>
            </div>`,
            shortcut: "In VS Code, type '!' and press Enter to instantly generate the entire basic HTML skeleton structure.",
            imgSrc: "images/wd-01-html-tags.jpg"
        },
        {
            heading: "Forms and Input Elements",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #3b82f6;">
                <strong>📅 Target Phase 2:</strong> Build interactive user data collection interfaces.
            </div>
            Forms allow users to send data to a website, like logging into Facebook or filling out an admission form. The entire form must be wrapped inside the <code>&lt;form&gt;</code> tag.<br><br>
            <strong>Important Input Types:</strong><br>
            - <code>&lt;input type="text"&gt;</code>: For names and basic typing.<br>
            - <code>&lt;input type="email"&gt;</code>: Forces the user to type a valid email with an '@' symbol.<br>
            - <code>&lt;input type="password"&gt;</code>: Hides the text as black dots.<br>
            - <code>&lt;input type="radio"&gt;</code>: For selecting one option (like Gender).<br>
            - <code>&lt;button type="submit"&gt;</code>: The button that submits the data.
            <div style="background:#eff6ff; padding:15px; border-radius:8px; border:1px solid #3b82f6; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#1d4ed8;">💻 Practical Assignment</h4>
                <ul>
                    <li>Create an "Excellent Institute Admission Form". Include inputs for Student Name, Phone Number, Email, a dropdown (<code>&lt;select&gt;</code>) for choosing the course (DCA/PGDCA), and a Submit button.</li>
                </ul>
            </div>`,
            shortcut: "Always use the 'placeholder' attribute (e.g., placeholder='Enter your name') to give users a hint inside the input box.",
            imgSrc: "images/wd-02-html-forms.jpg"
        }
    ]
});

// ==========================================
// MODULE 2: CSS STYLING & LAYOUT (THE SKIN & CLOTHES)
// ==========================================
webdesignBookData.push({
    id: "module2",
    title: "Module 2: CSS Styling & Layouts (The Design)",
    topics: [
        {
            heading: "Types of CSS (Inline, Internal, External)",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #3b82f6;">
                <strong>📅 Target Phase 3:</strong> Learn to add colors, fonts, and beauty to raw HTML.
            </div>
            CSS (Cascading Style Sheets) controls how HTML elements look. There are 3 ways to apply CSS:<br><br>
            <strong>1. Inline CSS:</strong> Written directly inside the HTML tag. <em>(Bad for large projects)</em>.<br>
            <code>&lt;h1 style="color: red;"&gt;</code><br><br>
            <strong>2. Internal CSS:</strong> Written inside a <code>&lt;style&gt;</code> block in the <code>&lt;head&gt;</code> of the HTML document.<br><br>
            <strong>3. External CSS:</strong> The professional way! You create a separate file called <code>style.css</code> and link it to your HTML using <code>&lt;link rel="stylesheet" href="style.css"&gt;</code>. This allows you to design 100 pages using just one file!
            <div style="background:#eff6ff; padding:15px; border-radius:8px; border:1px solid #3b82f6; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#1d4ed8;">💻 Practical Assignment</h4>
                <ul>
                    <li>Create an external <code>style.css</code> file. Target the <code>body</code> tag to give it a light gray background. Target all <code>h1</code> tags to be dark blue and centered. Link it to your previous HTML form.</li>
                </ul>
            </div>`,
            shortcut: "In CSS, target an ID using the '#' symbol (e.g., #myButton), and target a Class using a '.' (e.g., .card-box).",
            imgSrc: "images/wd-03-css-types.jpg"
        },
        {
            heading: "Layout Design: Flexbox & Grid",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #3b82f6;">
                <strong>📅 Target Phase 4:</strong> Master modern website structuring and alignments.
            </div>
            Before modern CSS, placing elements side-by-side was very difficult. Now we use Flexbox and Grid!<br><br>
            <strong>Flexbox (1-Dimensional):</strong> Perfect for aligning items in a single row or a single column (like a navigation bar). Just apply <code>display: flex;</code> to a parent container, and use <code>justify-content: center;</code> to perfectly center everything inside it.<br><br>
            <strong>CSS Grid (2-Dimensional):</strong> Perfect for building complex photo galleries or overall website layouts. It allows you to define exact rows and columns using <code>display: grid; grid-template-columns: 1fr 1fr 1fr;</code> (which creates 3 equal columns).
            <div style="background:#eff6ff; padding:15px; border-radius:8px; border:1px solid #3b82f6; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#1d4ed8;">💻 Practical Assignment</h4>
                <ul>
                    <li>Create a Navbar with a Logo on the far left and 4 links (Home, About, Courses, Contact) on the far right using <code>display: flex; justify-content: space-between;</code>.</li>
                </ul>
            </div>`,
            shortcut: "Using 'align-items: center;' in Flexbox is the easiest way to perfectly center text inside a button vertically.",
            imgSrc: "images/wd-04-flex-grid.jpg"
        }
    ]
});

// ==========================================
// MODULE 3: JAVASCRIPT & DOM (THE BRAIN)
// ==========================================
webdesignBookData.push({
    id: "module3",
    title: "Module 3: JavaScript & The DOM (The Brain)",
    topics: [
        {
            heading: "Basics: Variables, Functions, and Logic",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #3b82f6;">
                <strong>📅 Target Phase 5:</strong> Introduce mathematical logic and memory into the web page.
            </div>
            JavaScript is the programming language that makes websites think and react. <br><br>
            <strong>Variables (Memory):</strong> We use <code>let</code> or <code>const</code> to store data. <br>
            <em>Example:</em> <code>let studentName = "Rahul";</code><br><br>
            <strong>Functions (Actions):</strong> A function is a block of code that does a specific job, but only runs when you call it.<br>
            <em>Example:</em><br>
            <code>function sayHello() {<br>
            &nbsp;&nbsp;alert("Welcome to Excellent Institute!");<br>
            }</code>
            <div style="background:#eff6ff; padding:15px; border-radius:8px; border:1px solid #3b82f6; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#1d4ed8;">💻 Practical Assignment</h4>
                <ul>
                    <li>Write a JavaScript function that asks the user for their age using <code>prompt()</code>. If the age is above 18, use <code>console.log()</code> to print "Eligible for admission". If below 18, print "Not Eligible".</li>
                </ul>
            </div>`,
            shortcut: "Press F12 in Google Chrome and go to the 'Console' tab to test your JavaScript code instantly.",
            imgSrc: "images/wd-05-js-basics.jpg"
        },
        {
            heading: "Using the DOM & Event Handling",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #3b82f6;">
                <strong>📅 Target Phase 6:</strong> Make HTML buttons perform powerful JavaScript actions.
            </div>
            <strong>The DOM (Document Object Model):</strong> JavaScript cannot "see" your website directly. The DOM is the bridge that allows JavaScript to grab HTML tags and change them. We use <code>document.getElementById("myTitle")</code> to grab an element.<br><br>
            <strong>Event Handling:</strong> An Event is an action taken by the user, like clicking a button or hovering the mouse. We can attach our JavaScript functions to these events using attributes like <code>onclick=""</code>.
            <div style="background:#eff6ff; padding:15px; border-radius:8px; border:1px solid #3b82f6; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#1d4ed8;">💻 Practical Assignment</h4>
                <ul>
                    <li>Create an HTML button that says "Change Color". Write a JS function using the DOM that grabs the website's background and changes it to Dark Mode (black) when the button is clicked.</li>
                </ul>
            </div>`,
            shortcut: "Using 'element.innerHTML' allows JavaScript to completely rewrite the text inside an HTML tag on the live website.",
            imgSrc: "images/wd-06-dom-events.jpg"
        }
    ]
});

// ==========================================
// MODULE 4: DEPLOYMENT & CAPSTONE (GOING LIVE)
// ==========================================
webdesignBookData.push({
    id: "module4",
    title: "Module 4: Responsive Design & Deployment",
    topics: [
        {
            heading: "Responsive Design (Mobile Friendly)",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #3b82f6;">
                <strong>📅 Target Phase 7:</strong> Ensure your website looks perfect on all Mobile phones and Tablets.
            </div>
            If you build a website on a laptop, it might look broken and squished on a small mobile phone. To fix this, we use CSS <strong>Media Queries</strong>.<br><br>
            Media Queries tell the CSS to change the layout if the screen gets too small. <br>
            <em>Example:</em><br>
            <code>@media (max-width: 768px) {<br>
            &nbsp;&nbsp;.navbar { flex-direction: column; }<br>
            }</code><br>
            This code detects if the screen is smaller than an iPad (768px). If it is, it forces the horizontal navigation bar to stack vertically, making it easy to tap with a finger!
            <div style="background:#eff6ff; padding:15px; border-radius:8px; border:1px solid #3b82f6; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#1d4ed8;">💻 Practical Assignment</h4>
                <ul>
                    <li>Take the 4-column CSS Grid layout you built earlier. Write a Media Query so that if viewed on a mobile phone (max-width: 600px), it changes to a 1-column stack layout.</li>
                </ul>
            </div>`,
            shortcut: "Press Ctrl+Shift+I in Chrome and click the 'Mobile Device' icon to test how your website looks on an iPhone or Android screen.",
            imgSrc: "images/wd-07-responsive.jpg"
        },
        {
            heading: "Basic Hosting (GitHub Pages) & Capstone",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #3b82f6;">
                <strong>📅 Final Target:</strong> Publish your website live to the real internet.
            </div>
            Building a website on your laptop is great, but nobody else can see it. You need <strong>Hosting</strong> (a server) to put it on the internet. <br><br>
            <strong>GitHub Pages:</strong> This is a free hosting service provided by Microsoft. You create an account, upload your <code>index.html</code>, <code>style.css</code>, and image files to a 'Repository', and go to settings to activate Pages. Within 5 minutes, GitHub generates a real, live URL link that you can send to anyone in the world!
            <div style="background:#eff6ff; padding:15px; border-radius:8px; border:1px solid #3b82f6; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#1d4ed8;">💻 Final Project (Capstone)</h4>
                <ul>
                    <li><strong>Task:</strong> Build a complete 3-page website for "Excellent Institute" featuring a Home Page, a Course Grid, and an interactive JS Contact Form.</li>
                    <li><strong>Execution:</strong> Apply external CSS, ensure it is fully mobile-responsive via Media Queries, and upload the final code to GitHub Pages to get your live URL.</li>
                </ul>
            </div>`,
            shortcut: "Always name your main homepage 'index.html'. Web servers automatically look for that specific file name to display first.",
            imgSrc: "images/wd-08-hosting.jpg"
        }
    ]
});
