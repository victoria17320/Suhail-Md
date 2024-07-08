const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348184670229";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_32_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA3OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjksXG4gICAgICAgIDUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjExLFxuICAgICAgICA4NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzLFxuICAgICAgICAzNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MixcbiAgICAgICAgMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQxLFxuICAgICAgICA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDU0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkzLFxuICAgICAgICA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYyLFxuICAgICAgICA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNixcbiAgICAgICAgNDksXG4gICAgICAgIDM4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUHBsSS8wVllpN3pvd2FCVnoxc2hPNFBLeDRHdHg3bHl2Z0hjMzhFbk1xQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTg0NjcwMjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNzUzREU4NENGQzMzMDQxM0MxMjhDNEUxQUUyQ0Y5OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0NjcxMTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNnpWYnQxMzVUODZlaXVnY1BWRlhNZ1wiLFxuICBcInBob25lSWRcIjogXCI2ZDk1MDg4ZS0wZTdjLTQzMjItODcwNy01ZWI3ZTQyOWVjZDRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICAxMDUsXG4gICAgICAyNDUsXG4gICAgICA3NCxcbiAgICAgIDE0LFxuICAgICAgMjEyLFxuICAgICAgMTY5LFxuICAgICAgMTY1LFxuICAgICAgMTI3LFxuICAgICAgMTA4LFxuICAgICAgMTcwLFxuICAgICAgMTAwLFxuICAgICAgMTY4LFxuICAgICAgMTcxLFxuICAgICAgNjksXG4gICAgICAxNjAsXG4gICAgICAxOTQsXG4gICAgICAxODgsXG4gICAgICAyMCxcbiAgICAgIDk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MixcbiAgICAgIDEsXG4gICAgICAyNDYsXG4gICAgICAxMzgsXG4gICAgICAzMCxcbiAgICAgIDUzLFxuICAgICAgMTQ0LFxuICAgICAgMTMxLFxuICAgICAgMjMzLFxuICAgICAgMTA3LFxuICAgICAgMTUzLFxuICAgICAgNzgsXG4gICAgICAxNzMsXG4gICAgICAxMzYsXG4gICAgICAwLFxuICAgICAgMzksXG4gICAgICA2OCxcbiAgICAgIDIyOSxcbiAgICAgIDExMyxcbiAgICAgIDI1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3QjZQQUpFMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE4NDY3MDIyOTo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTg2NzQxMjg1NzUzMDQ1Ojc5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmoLwnZqW8J2akvCdmpXwnZqOXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGJlc0dNUW92Mnd0QVlZQlNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2Z2pqMFFXS3BKVkZ3dUxVYm1IUFcyM2VBSUpsSDA5WGM2UWZ5alQwUEYwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImI4K0NsaFRtYk04VnR2ZGtvS3d5KzlkSkYyRWcyUm9OUWJLeCtaN01tSDdQOTNUT1hBR2NFUnIwUHZRMnlOLy9kdnEyRjRnbHdnN1Mrd244azdFMkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlHb1l6dnp0eTgyQVR2U2RhbVNjUXNVb1h0VUVlMUc2bWh6Z0Y4b1g4ZUVtSnZaVTBEUkpPUW83dURvQ2NvNW9lYVZxM3dOVGhhWE9mb3R3SUhiR0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxODQ2NzAyMjk6NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQ2NzExMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1ZZVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVllLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV2taNGg0QUEydzNMeWRxSTBqMEhaei9XL0pvenQxb0huYU5ibExHMXAxZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDg0MTY1NjYsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIxNzIwNDYzMjMzMjE0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "jujutsu",
  packname: process.env.PACK_NAME || "sticker by",
  botname : process.env.BOT_NAME  || "𝚓𝚞𝚓𝚞𝚝𝚜𝚞 𝚖𝚍",
  ownername:process.env.OWNER_NAME|| "𝚓𝚞𝚓𝚞𝚝𝚜𝚞",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
