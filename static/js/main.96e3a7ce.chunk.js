(this["webpackJsonpdiscord.cpp-docs"]=this["webpackJsonpdiscord.cpp-docs"]||[]).push([[0],{144:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n(0),o=n.n(i),c=n(52),r=n.n(c),a=(n(64),n(17)),d=n(3),l=(n(65),function(){return Object(s.jsxs)("div",{className:"home",children:[Object(s.jsx)("img",{src:"https://camo.githubusercontent.com/640b98b021c6efb8c909e62dae5dfc816082e7c2/68747470733a2f2f692e696d6775722e636f6d2f46764b733448722e706e67",alt:""}),Object(s.jsx)("h1",{children:"A Discord API wrapper for making C++ bots"}),Object(s.jsx)(a.b,{to:"/documention/content",className:"docs-link",children:"see the docs"})]})}),h=n(58),u=(n(71),n(72),function(e){var t=e.selectedMd,n=void 0===t?"":t,i=e.selectMd,o=void 0===i?function(){}:i,c={General:["Getting started"],Examples:["Simple BOT","Embeds","Webhooks"],Classes:["Client","Message","Channel","User","Guild","Role"]};return Object(s.jsx)("div",{className:"sidebar",children:Object(s.jsx)("ul",{children:Object.keys(c).map((function(e,t){return Object(s.jsxs)("li",{className:"sidebar-li",id:e.toLowerCase(),children:[Object(s.jsx)("h4",{children:e}),c[e].map((function(e,t){return Object(s.jsx)("p",{onClick:function(){o(e.toLowerCase().split(" ").join("_"))},className:e.toLowerCase().split(" ").join("_")===n?"selected-topic":"",children:e},t)}))]},t)}))})})}),p=n(54),b=n.n(p),m=n(361),g=n(360),f=(n(144),function(){return Object(s.jsx)("div",{className:"header",children:Object(s.jsxs)("div",{className:"header-content",children:[Object(s.jsx)("div",{className:"header-title",children:Object(s.jsx)(a.b,{to:"/documentation",style:{textDecoration:"none",color:"#fff"},children:Object(s.jsx)("h1",{children:"discord.cpp"})})}),Object(s.jsx)("div",{className:"header-links",children:Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/luccanunes/discord.cpp",children:"GitHub"})})]})})}),j=function(e){var t=e.value,n=e.language;return Object(s.jsx)(m.a,{language:n,style:g.a,children:t||""})},y=function(){var e=Object(i.useState)("getting_started"),t=Object(h.a)(e,2),n=t[0],o=t[1],c={getting_started:'## About\nInspired by the simplicity of [discord.py](https://github.com/Rapptz/discord.py) and [discord.js](https://github.com/discordjs/discord.js), discord.cpp tries to make the process of interacting with the [Discord API](https://discord.com/developers/docs/intro) easier, so you can worry less about all the socket connections under the hood, and focus on making your bot better.\n\n## Example\n\n```cpp\n#include <iostream>\n#include <dpp.h>\n\nint main()\n{\n const std::string token = "BOT_TOKEN_HERE";\n dpp::Client client;\n\n client.onReady = [&]() {\n  std::cout << "hello, c++!" << std::endl;\n  std::cout << client.user.id << std::endl << std::endl;\n };\n\n client.onMessage = [&](dpp::Message message) {\n  if (message.content == "jaaj?") {\n   message.channel().send("jooj"); // or message.reply("jooj"), which mentions the message author\n  }\n };\n \n client.run(token);\n \n return 0;\n}\n```\n\n## Installation and set up\nFirst of all, clone the repository to your machine in a directory of your choice (make sure you"re cloning the `main` branch, not the `development` one).\n\nTo create your own project using discord.cpp you have to follow these steps, for this example I"ll use Visual Studio, but the steps should be the same. Just google the specifics for your IDE of choice.\n\n#### Create your solution\n#### Add a source file and paste the example code\n#### Add the compiler include path:\nTo starting using discord.cpp and all its features, you first have to tell your IDE/compiler where you"re importing it from.\nHere\'s how to do it in Visual Studio:\n1. Right click your *project* name and select properties <br/> <img width="350" src="https://user-images.githubusercontent.com/68504851/97646641-f66ba680-1a2e-11eb-809b-b263b8428130.png">\n2. Select "C/C++" \n3. Click "Additional Include Directories", selected the small arrow on the right and click "Edit" <br/> <img width="550" src="https://user-images.githubusercontent.com/68504851/97646811-67ab5980-1a2f-11eb-8667-ec9e1b6b135e.png">\n4. Click the new folder icon and then the three dots to starting browsing your file explorer. <br/> <img width="450" src="https://user-images.githubusercontent.com/68504851/97646868-9cb7ac00-1a2f-11eb-9527-26ea2df19536.png">\n5. Select the "/src" folder in the directory that you installed discord.cpp\n6. Click "Ok" and "Apply".\n#### Add the linker path:\nNow that you"ve added the include path, the compiler is able to find all the classes and functions declarations, but not really their definitions. For that, we need to include an additional depencie to the linker.\nHere\'s how to do it in Visual Studio:\n1. Follow step 1 of "Add the compiler include path"\n2. Select "Linker"\n3. Click "Additional Library Directories", selected the small arrow on the right and click "Edit" <br/> <img width="450" src="https://user-images.githubusercontent.com/68504851/97648131-c32b1680-1a32-11eb-9dfb-ff97f34e4ff4.png">\n4. Click the new folder icon and then the three dots to starting browsing your file explorer. <br/> <img width="450" src="https://user-images.githubusercontent.com/68504851/97648199-ebb31080-1a32-11eb-9218-9ed4a5e83a98.png">\n5. Select the "/src/Release" folder in the directory that you installed discord.cpp\n6. Click "Ok" and "Apply".\n7. Now, go to the "Input" tab, still in the linker properties\n8. Select "Additional Dependencies", and edit the text string by adding "discord-cpp.lib;" to its beginning <br/> <img width="450" src="https://user-images.githubusercontent.com/68504851/97648393-62500e00-1a33-11eb-8eba-45eed1fcd837.png">\n9. Hit "Apply" and "Ok" and you should be good to go.',simple_bot:'## Simple Bot\nIn this example we\'re going to create a very simple bot using discord.cpp, that simply checks for an emoji  inside a message, and, if it exists, reacts to the message with that emoji.\n\nLet\'s check the code out:\n```cpp\n#include <iostream>\n#include <dpp.h> // include discord.cpp\n\nint main()\n{\n  dpp::Client client; // \n  \n  // onReady function is not really necessary, but quite usual\n  client.onReady = [&client]() {\n    std::cout << "hello, dpp" << std::endl;\n    std::cout << client.user.id << std::endl;\n  };\n  \n  client.onMessage = [](dpp::Message message){\n    if (message.author.bot) return; // checks wheter the message is from a bot\n    \n    if (message.content.find("\ud83d\ude0e") != std::string::npos) // checks if "\ud83d\ude0e" is in the message\n      message.add_reaction("\ud83d\ude0e"); // reacts to the message with "\ud83d\ude0e"\n  };\n  \n  const std::string token = "BOT_TOKEN_HERE"; // you might want to get this from another file\n  client.run(token); // actually initialzies the bot, everything after this is unreachable\n  \n  return 0;\n}\n```\n### Result:\n<img src="https://i.ibb.co/gW976F8/Screenshot-1.png">\n\n### Note\nIn case you\'re somewhat new to C++, don\'t be afraid of that JavaScript-arrow-function-like syntax, those are [lambda functions](https://www.geeksforgeeks.org/lambda-expression-in-c/). Please visit this article if you want to know more about them.'};return Object(i.useEffect)((function(){document.title="Docs | discord.cpp",document.querySelectorAll("a").forEach((function(e){e.target="_blank"}))}),[n]),Object(s.jsxs)("div",{children:[Object(s.jsx)(f,{}),Object(s.jsx)("div",{className:"docs",children:Object(s.jsxs)("div",{className:"docs-content",children:[Object(s.jsx)(u,{selectMd:function(e){o(e)},selectedMd:n}),Object(s.jsx)("div",{className:"docs-info",children:Object(s.jsx)(b.a,{allowDangerousHtml:!0,children:c[n],renderers:{code:j}})})]})})]})},w=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(a.a,{children:Object(s.jsxs)(d.c,{children:[Object(s.jsx)(d.a,{path:"/documentation/content",component:y}),Object(s.jsx)(d.a,{path:"/documentation",component:l})]})})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,362)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),o(e),c(e)}))};r.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(w,{})}),document.getElementById("root")),x()},64:function(e,t,n){},65:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){}},[[357,1,2]]]);
//# sourceMappingURL=main.96e3a7ce.chunk.js.map