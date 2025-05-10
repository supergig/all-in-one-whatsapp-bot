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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_46_05_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgODUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDg5LFxuICAgICAgICA1MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTAsXG4gICAgICAgIDgyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDkzLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDYwLFxuICAgICAgICAyNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY5LFxuICAgICAgICA4NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgODMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA4LFxuICAgICAgICA1OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDU3LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk0LFxuICAgICAgICAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgODksXG4gICAgICAgIDcsXG4gICAgICAgIDcyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDg5LFxuICAgICAgICA4MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNixcbiAgICAgICAgMTMzLFxuICAgICAgICA0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjk3NFVPelB0NC9zQTVWSHJkV2c2NXYrdWtHNEtPU3luZlVpZzBTeUdWRXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZ0cXZQS0hjVGIybUtUYUhlc01qSndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjhjNzc0N2YtZDI2OC00MzE4LWJhZjQtZGMxY2QwYjkxNzkyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgMzQsXG4gICAgICAxODAsXG4gICAgICAxNzYsXG4gICAgICAyMyxcbiAgICAgIDU4LFxuICAgICAgMjIxLFxuICAgICAgMjQ5LFxuICAgICAgMTI2LFxuICAgICAgMjIyLFxuICAgICAgMTUwLFxuICAgICAgMixcbiAgICAgIDExOCxcbiAgICAgIDE4NixcbiAgICAgIDE4MyxcbiAgICAgIDIyOSxcbiAgICAgIDI0MCxcbiAgICAgIDE2MyxcbiAgICAgIDIxNixcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MCxcbiAgICAgIDEzOSxcbiAgICAgIDEwLFxuICAgICAgMjMzLFxuICAgICAgMTU1LFxuICAgICAgNzcsXG4gICAgICA4MyxcbiAgICAgIDI0MSxcbiAgICAgIDI3LFxuICAgICAgMjEsXG4gICAgICA1MCxcbiAgICAgIDcsXG4gICAgICAyMTYsXG4gICAgICAyMDUsXG4gICAgICA3MSxcbiAgICAgIDE3MyxcbiAgICAgIDE5MixcbiAgICAgIDgsXG4gICAgICAxLFxuICAgICAgMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFRWNEtaTFNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNzM2OTgwNjE6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkyMjIxODM5ODAyNDM2OjI0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BueHJvY0JFTUt4L2NBR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOTJuQWhmSFViTEtEK096eXNMQU5hcnY1dXpuT1QzQTlhTFFTVHBNUkRIST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJielJFMUtpWlhpSFlwY0JTYVBsVU5ZOU81RkZlOG8vbkhZRlBBby9SNVFVaGpKbXUyTEw0VFloM216b0VQUEJFM2M1TEtVdVhpdkdQb0dFWTE3d1ZEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLTnplUGt3WWJjOUVnakQyVW1SZTdYS2d6YUhPak9mZms4Qm1Cb3lPYUQwVTMrWjlPTWFuRUdxamFQL1NaOXl1VVBodlB6OW0xbVVGcE8rQWRTSk9Bdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTczNjk4MDYxOjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0Njg4NDgwNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUMvZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQy9nLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
