const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="uwemdev@hotmail.com"
global.location="Nigeria,Akwaibom,Uyo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Akwaibom/uyo";
global.github=process.env.GITHUB|| "https://github.com/uwemdev/all-in-one-whatsapp-bot";
global.gurl  =process.env.GURL  || "https://api.whatsapp.com/send?phone=2348110572387&text=Hi%20Uwem%2C";
global.website=process.env.GURL || "https://uwemdev.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://uwemdev.com/storage/home/about-file-1724092734.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Uwemdev" 


global.devs = "2348110572387" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348173698061";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/w6ss4st/photo-2024-04-19-10-02-19.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_02_03_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM4LFxuICAgICAgICA1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgODIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDE4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNixcbiAgICAgICAgODQsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjksXG4gICAgICAgIDUwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDczLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1LFxuICAgICAgICA2NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDY2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI2LFxuICAgICAgICA5NixcbiAgICAgICAgMjUzLFxuICAgICAgICA0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNCxcbiAgICAgICAgODksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNCxcbiAgICAgICAgODksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU0LFxuICAgICAgICA5NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk4LFxuICAgICAgICA2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg3LFxuICAgICAgICA2NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDczLFxuICAgICAgICA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHb0JYZC9MYnZmSnNJOFlXekdIbTVpdHJKa0FHdGNGWE0vOWcrWlEyRG5zPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrSEdXc2NtVVNZQ0VtS3ZBbDBmYzVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc0NGY1MGUxLTgzOGUtNDhiZi05OTI2LThlZGY3YTI4YjVhMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NixcbiAgICAgIDY2LFxuICAgICAgMTY5LFxuICAgICAgMCxcbiAgICAgIDE0MCxcbiAgICAgIDMxLFxuICAgICAgMjM4LFxuICAgICAgMSxcbiAgICAgIDEzMixcbiAgICAgIDE2NCxcbiAgICAgIDEwNyxcbiAgICAgIDQxLFxuICAgICAgMTE0LFxuICAgICAgMjA1LFxuICAgICAgMjEyLFxuICAgICAgMTk2LFxuICAgICAgMTY0LFxuICAgICAgMjA1LFxuICAgICAgMTIsXG4gICAgICAyMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc0LFxuICAgICAgMTEzLFxuICAgICAgMjA3LFxuICAgICAgNSxcbiAgICAgIDEyNSxcbiAgICAgIDI1MSxcbiAgICAgIDAsXG4gICAgICAxNDUsXG4gICAgICAxOCxcbiAgICAgIDEzMyxcbiAgICAgIDEzNSxcbiAgICAgIDczLFxuICAgICAgMTE1LFxuICAgICAgNzAsXG4gICAgICAxNDYsXG4gICAgICA5NixcbiAgICAgIDEyMCxcbiAgICAgIDkyLFxuICAgICAgMTM4LFxuICAgICAgODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSEoyWVpZNjNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNzM2OTgwNjE6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkyMjIxODM5ODAyNDM2OjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04vOWt1d0ZFTlhmcUw4R0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZGN4ekZLRWVGYU9QdTBYVzZDN2hsV1ZuZ2g4RlZRbU9QeDhLQlNTWERoRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvUDNGZnYyUjZJTW5XNmZVanVVNDNqN2FtWndlc3htUlBQcXRRTGNrVnFhN2ZYdnFIbUxoWTlmOXk4QmkrT3ZYSnRxclJSWFFybFhEcmtFdkQyMHNCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJidXI5Tzd0eFBIZzg0U0lMWGd6M3ZjSVZ1NXllTGRWejhoc1k3UVBTNHFQYitPQ3FQek1qY3FhWnJyRDNzSFlnM3lyM0t1V1VyZ1RhejBOWU9UYTJoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTczNjk4MDYxOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDM0MDA5MjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCYnRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJidC5qc29uIjogIntcImtleURhdGFcIjpcImxvNmIzdGZES1pKV2lyK1U1L1Fuay8xOEljeUUwd1lLKzR5bXY1OTZTVUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU2ODk4MDcwMyxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsNF19LFwidGltZXN0YW1wXCI6XCIxNzQzNDAwNTIyMDAyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡UwemDev彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "UwemDev",
  ownername:process.env.OWNER_NAME|| "★彡UwemDev彡★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
