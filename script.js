*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial,sans-serif;
}

body{
    background:#0f172a;
    color:#fff;
}

nav{
    background:#111827;
    padding:18px;
    text-align:center;
    font-size:28px;
    font-weight:bold;
    color:#38bdf8;
    box-shadow:0 3px 10px rgba(0,0,0,.3);
}

.hero{
    text-align:center;
    padding:50px 20px;
}

.hero h1{
    font-size:38px;
    margin-bottom:15px;
}

.hero p{
    color:#cbd5e1;
    font-size:18px;
}

.tools{
    width:90%;
    max-width:700px;
    margin:30px auto;
}

.card{
    background:#1e293b;
    padding:25px;
    border-radius:18px;
    margin-bottom:25px;
    box-shadow:0 8px 25px rgba(0,0,0,.35);
}

.card h2{
    margin-bottom:15px;
    color:#38bdf8;
}

input{
    width:100%;
    padding:14px;
    border:none;
    border-radius:10px;
    margin-top:10px;
    margin-bottom:15px;
    font-size:16px;
}

button{
    width:100%;
    padding:14px;
    border:none;
    border-radius:10px;
    background:#0ea5e9;
    color:#fff;
    font-size:17px;
    font-weight:bold;
    cursor:pointer;
    transition:.3s;
}

button:hover{
    background:#0284c7;
}

footer{
    text-align:center;
    padding:25px;
    color:#94a3b8;
      }
/* ===== Animated Background ===== */

body::before{
content:"";
position:fixed;
top:-200px;
left:-200px;
width:500px;
height:500px;
background:#3b82f6;
filter:blur(180px);
opacity:.18;
z-index:-2;
animation:moveOne 14s infinite alternate;
}

body::after{
content:"";
position:fixed;
bottom:-200px;
right:-200px;
width:500px;
height:500px;
background:#06b6d4;
filter:blur(180px);
opacity:.18;
z-index:-2;
animation:moveTwo 14s infinite alternate;
}

@keyframes moveOne{
0%{transform:translate(0,0);}
100%{transform:translate(120px,90px);}
}

@keyframes moveTwo{
0%{transform:translate(0,0);}
100%{transform:translate(-120px,-90px);}
}

/* ===== Card Glow ===== */

.card{
position:relative;
overflow:hidden;
}

.card::before{
content:"";
position:absolute;
top:-100%;
left:-100%;
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
