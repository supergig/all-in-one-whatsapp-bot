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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_13_09_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MixcbiAgICAgICAgMTAwLFxuICAgICAgICA0OSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDY0LFxuICAgICAgICA0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDg2LFxuICAgICAgICA0NixcbiAgICAgICAgODQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQzLFxuICAgICAgICA2OSxcbiAgICAgICAgMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMixcbiAgICAgICAgODksXG4gICAgICAgIDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNDksXG4gICAgICAgIDM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MyxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMixcbiAgICAgICAgMTg5LFxuICAgICAgICA1NixcbiAgICAgICAgMjI4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI2LFxuICAgICAgICA2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDMxLFxuICAgICAgICA3MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDUxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDY3LFxuICAgICAgICA5OCxcbiAgICAgICAgODksXG4gICAgICAgIDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTk2LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExLFxuICAgICAgICAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDgyLFxuICAgICAgICA4MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NixcbiAgICAgICAgMTkxLFxuICAgICAgICA4OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk2LFxuICAgICAgICA0MixcbiAgICAgICAgMjM5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFbHF0aW0ydTM0K2JsSnJEQWRJempLK0tIWjduZ2gwZVJHWnl2eGNmbDY0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNzM2OTgwNjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY3NzlFNENDOTlGMDNFMkU4NDIwQUMzQjdCNzk1NjRCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNTk3MDQyMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPWnVNUFppYVQzbXg0enYtVU9lX1JnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE4OTVmOTI2LTM2YjgtNGEyZC1hYTU3LTY5ODYyMGVjMzZlMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDIxMSxcbiAgICAgIDU0LFxuICAgICAgMTY0LFxuICAgICAgODcsXG4gICAgICAyMjUsXG4gICAgICA4NCxcbiAgICAgIDE5NyxcbiAgICAgIDI0MCxcbiAgICAgIDEyOSxcbiAgICAgIDE0OCxcbiAgICAgIDEzMyxcbiAgICAgIDQ1LFxuICAgICAgMjMyLFxuICAgICAgMTM3LFxuICAgICAgMjA4LFxuICAgICAgMjUyLFxuICAgICAgMjEsXG4gICAgICAxNzMsXG4gICAgICAxOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDksXG4gICAgICAyMjMsXG4gICAgICAyMDUsXG4gICAgICA5OSxcbiAgICAgIDYzLFxuICAgICAgMTU2LFxuICAgICAgMTUwLFxuICAgICAgMTA5LFxuICAgICAgNzUsXG4gICAgICA5MyxcbiAgICAgIDIxOCxcbiAgICAgIDEyNyxcbiAgICAgIDE4LFxuICAgICAgMjQyLFxuICAgICAgMTU1LFxuICAgICAgMTcwLFxuICAgICAgMixcbiAgICAgIDksXG4gICAgICAxODUsXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVDFQV045VkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNzM2OTgwNjE6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkyMjIxODM5ODAyNDM2OjEyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkdhYnJpZWwgSm9zZXBoXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTno5a3V3RkVPcnZnTGNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkY3h6RktFZUZhT1B1MFhXNkM3aGxXVm5naDhGVlFtT1B4OEtCU1NYRGhFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklKTUpxY1ZnUkFDUzZ0bkhLbWJTSlBkNDFtNjJxcXhPbXlSRjlWZ0I2YTQ2Z0JQRDBCKzYxNmpjTzBOYWZsVDhDUkx1UVlGYzhWRTAyV0lDYkZVZkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJzcU8ybnA0dDJSZ0ltUkE4ZEhvQzJpS0xSZ0ZnbFc3ODVId215TGNZa0dyRVFyNUkxbC90ZndzcFl6QVZBMjlUOHFsb2hYTTVxVmppSWR6V3cwNWpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNzM2OTgwNjE6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTk3MDQxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUU3VFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTdULmpzb24iOiAie1wia2V5RGF0YVwiOlwibEwyS085VzFKU3VHZFVIME9BT0tnL3VQOGFYcVpobnFLSDQ1SnMxMDliUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTY4OTgwNzAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjU5NzA0MTg2MzlcIn0iCn0="  // PUT your SESSION_ID 


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
