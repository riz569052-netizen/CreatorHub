// Elements
const videoFile = document.getElementById("videoFile");
const language = document.getElementById("language");
const generateBtn = document.getElementById("generateBtn");
const captionOutput = document.getElementById("captionOutput");
const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");
const srtBtn = document.getElementById("srtBtn");

// Generate Caption
generateBtn.addEventListener("click", async () => {

    if (!videoFile.files.length) {
        alert("Please upload a video first.");
        return;
    }

    captionOutput.value = "Uploading video...\nGenerating AI captions...";

    const formData = new FormData();
    formData.append("video", videoFile.files[0]);
    formData.append("language", language.value);

    try {

        // Backend URL
        const response = await fetch("http://localhost:3000/api/caption", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.caption) {
            captionOutput.value = data.caption;
        } else {
            captionOutput.value = "No caption generated.";
        }

    } catch (error) {

        captionOutput.value =
            "Backend is not connected yet.\n\nStart the Node.js server first.";

    }

});

// Copy
copyBtn.addEventListener("click", () => {

    navigator.clipboard.writeText(captionOutput.value);

    alert("Caption copied!");

});

// Download TXT
downloadBtn.addEventListener("click", () => {

    const blob = new Blob([captionOutput.value], {
        type: "text/plain"
    });

    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);

    a.download = "captions.txt";

    a.click();

});

// Download SRT
srtBtn.addEventListener("click", () => {

    const blob = new Blob([captionOutput.value], {
        type: "text/plain"
    });

    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);

    a.download = "captions.srt";

    a.click();

});left:-100%;
width:250%;
height:250%;
background:linear-gradient(
45deg,
transparent,
rgba(255,255,255,.08),
transparent
);
transform:rotate(25deg);
transition:.7s;
}

.card:hover::before{
top:100%;
left:100%;
}

/* ===== Input Focus ===== */

input:focus,
select:focus{
border:2px solid #38bdf8;
box-shadow:0 0 20px rgba(56,189,248,.35);
}

/* ===== Buttons ===== */

button{
position:relative;
overflow:hidden;
}

button::before{
content:"";
position:absolute;
top:0;
left:-100%;
width:100%;
height:100%;
background:rgba(255,255,255,.15);
transition:.4s;
}

button:hover::before{
left:100%;
}

button:active{
transform:scale(.98);
}

/* ===== Scrollbar ===== */

::-webkit-scrollbar{
width:10px;
}

::-webkit-scrollbar-track{
background:#0f172a;
}

::-webkit-scrollbar-thumb{
background:#38bdf8;
border-radius:20px;
}

/* ===== Hero Animation ===== */

.hero h1{
animation:fadeUp .8s ease;
}

.hero p{
animation:fadeUp 1.2s ease;
}

.btn{
animation:fadeUp 1.6s ease;
}

@keyframes fadeUp{

from{

opacity:0;
transform:translateY(40px);

}

to{

opacity:1;
transform:translateY(0);

}

}

/* ===== Feature Hover ===== */

.feature:hover{

background:#2563eb;

transform:translateY(-8px) scale(1.03);

}

/* ===== Footer ===== */

footer h3{

color:#38bdf8;

margin-bottom:10px;

}

footer p{

margin:6px 0;

}

/* ===== Mobile ===== */

@media(max-width:600px){

.hero{

padding:70px 18px;

}

.hero h1{

font-size:30px;

}

.card{

padding:20px;

}

button{

font-size:15px;

}

    }
/* ===========================
   Premium CSS Part 3
=========================== */

/* Gradient Text */
.hero h1,
.tools h2,
.about h2{
    background: linear-gradient(90deg,#38bdf8,#60a5fa,#22d3ee);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
}

/* Floating Animation */
.card{
    animation: floating 5s ease-in-out infinite;
}

.card:nth-child(2){
    animation-delay:.3s;
}

.card:nth-child(3){
    animation-delay:.6s;
}

@keyframes floating{
    0%{transform:translateY(0);}
    50%{transform:translateY(-8px);}
    100%{transform:translateY(0);}
}

/* Glass Navbar */
.navbar{
    box-shadow:0 10px 30px rgba(0,0,0,.3);
}

/* Neon Border */
.card{
    border:1px solid rgba(56,189,248,.25);
}

.card:hover{
    border-color:#38bdf8;
    box-shadow:
        0 0 15px rgba(56,189,248,.3),
        0 0 40px rgba(56,189,248,.15);
}

/* Button Glow */
button{
    box-shadow:0 10px 25px rgba(59,130,246,.25);
}

button:hover{
    box-shadow:
        0 0 15px rgba(56,189,248,.5),
        0 0 30px rgba(37,99,235,.4);
}

/* Inputs */
input,
select{
    background:#fff;
    transition:.3s;
}

input:hover,
select:hover{
    transform:translateY(-2px);
}

/* Feature Cards */
.feature{
    border:1px solid rgba(255,255,255,.08);
    backdrop-filter:blur(10px);
}

.feature:hover{
    border-color:#38bdf8;
}

/* Footer */
footer{
    background:rgba(255,255,255,.03);
    backdrop-filter:blur(10px);
}

/* Selection Color */
::selection{
    background:#38bdf8;
    color:#fff;
}

/* Smooth Transition */
*{
    transition:
        background .3s,
        color .3s,
        transform .3s,
        box-shadow .3s;
}

/* Responsive */
@media(max-width:768px){

    .navbar{
        flex-direction:column;
        gap:12px;
    }

    .hero h1{
        font-size:32px;
    }

    .tools{
        width:94%;
    }

    .feature{
        font-size:15px;
    }

}
