const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "%"

client.on('ready', () => {
    console.log("Logged in!")


 
        



client.user.setActivity('%help | by xeis', { type: 'PLAYING' });


    
		        client.on("message", message => {
  if (message.content.toLowerCase() === "lamao")
      message.delete({ timeout: 1
      })
    })
    client.on("message", message => {
      if (message.content.toLowerCase() === "lmao")
          message.delete({ timeout: 1
          })
        })
        client.on("message", message => {
          if (message.content.toLowerCase() === "lal")
              message.delete({ timeout: 1
              })
            })

        client.on("message", message => {
          if (message.content.toLowerCase() === "laamaaooooo")
              message.delete({ timeout: 1
              })
            })
		




        client.on("message", message => {
  if (message.content.toLowerCase() === "Scam")
      message.delete({ timeout: 1
      })
    })
	        client.on("message", message => {
  if (message.content.toLowerCase() === "skem")
      message.delete({ timeout: 1
      })
    })
	        client.on("message", message => {
  if (message.content.toLowerCase() === "scammeri")
      message.delete({ timeout: 1
      })
    })
		        client.on("message", message => {
  if (message.content.toLowerCase() === "skemeri")
      message.delete({ timeout: 1
      })
    })
})

client.on('message', async (message) => {
  if (
    message.content.toLowerCase().startsWith(prefix + 'clear') ||
    message.content.toLowerCase().startsWith(prefix + 'c ')
  ) {
    if (!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.channel.send("Nemas `permisije` za koriscenje ove komande");
    if (!isNaN(message.content.split(' ')[1])) {
      let amount = 0;
      if (message.content.split(' ')[1] === '1' || message.content.split(' ')[1] === '0') {
        amount = 1;
      } else {
        amount = message.content.split(' ')[1];
        if (amount > 1000) {
          amount = 1000;
        }
      }
      await message.channel.bulkDelete(amount, true).then((_message) => {
        message.channel.send(`Racket je obrisao \`${_message.size}\` poruka! :broom:`).then((sent) => {
          setTimeout(function () {
            sent.delete();
          }, 2500);
        });
      });
    } else {
      message.channel.send('Ukucaj koliko poruka zelis obrisati!!').then((sent) => {
        setTimeout(function () {
          sent.delete();
        }, 2500);
      });
    }
  } else {
    if (message.content.toLowerCase() === prefix + 'avatar') {
      const newEmbed = new Discord.MessageEmbed().setColor('#00B2B2').setTitle('**AVATAR**');
      newEmbed
        .setImage((message.author.displayAvatarURL({dynamic:true})))
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
      message.channel.send(newEmbed);
    }
	    if (message.content.toLowerCase() === prefix + 'help') {
      const newEmbed = new Discord.MessageEmbed().setColor('#00B2B2').setTitle('**HELP**');
      newEmbed
	        .setURL("https://discord.com/api/oauth2/authorize?client_id=819286678690594816&permissions=0&scope=bot")
      .setTitle(`INVITE BOT`)
	  	  .addField('**%help 1**', ` - Bot Fun Komande`)
        .addField('**%help 2**', ` - Bot Utilty Komande`)
        .setDescription('**-------BOT KOMANDE-------**')
		
		

        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
      message.channel.send(newEmbed);
    }
	
		    if (message.content.toLowerCase() === prefix + 'botinfo') {
      const newEmbed = new Discord.MessageEmbed().setColor('#00B2B2').setTitle('**INFO**');
      newEmbed
	  	        .setURL("https://discord.com/api/oauth2/authorize?client_id=819286678690594816&permissions=0&scope=bot")
      .setTitle(`INVITE BOT`)
	  	.addField('**DEVELOPER** : ', ` - <@536539796189741106>`)
        .addField('**Bot je napravljen** : ', ` - 1/3/2021`)
        .addField('**BOT ID** : ', ` - 8192866786905948163`)
        .addField('**BOT DISCRIMINATOR** : ', ` - #2929`)
        .addField('**TOTAL MEMBER COUNT** : ', `- ${client.users.cache.size}`)    
        .addField('**TOTAL SERVER COUNT** : ', `- ${client.guilds.cache.size}`) 		
        .setDescription('**-------INFORMACIJE O BOTU-------**')
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
      message.channel.send(newEmbed);
    }
	
  }
});
	      client.on("message", message => {
      if (message.content.toLowerCase() === prefix + 'help 1') {
		   if (!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.channel.send("Nemas `permisije` za koriscenje ove komande");
      const newEmbed = new Discord.MessageEmbed().setColor('#00B2B2').setTitle('**HELP FUN**');
      newEmbed
	        .setURL("https://discord.com/api/oauth2/authorize?client_id=819286678690594816&permissions=0&scope=bot")
      .setTitle(`INVITE BOT`)
	  	  .addField('**%avatar**', ` - prikazuje tvoj avatar.`)
        .addField('**%botsmembers**', ` - broj ukupnih membera na svim serverima.`)
        .addField('**%invite**', ` - invite link bota.`)
        .addField('**%ping**', ` - prikazuje botov ping.`)
        .addField('**%botinfo**', ` - prikazuje informacije o botu.`)
        .addField('**%rock** - **%paper**', ` - igra sa botom.`)
        .addField('**%server**', ` - informacije o serveru.`)
        .addField('**%myinfo**', ` - informacije o vama.`)
        .addField('**%zservers**', ` - prikazuje broj servera u kojima je bot.`)
		.addField('**%clear**', ` - brise odredjeni broj poruka.`)
		.addField('**%araid1/2**', ` - 1 = anti raid zastita ukljucena, 2 = anti raid zastita iskljucena.`)
        .setDescription('**-------BOT KOMANDE-------**')
		
		

        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
      message.channel.send(newEmbed);
    }
      })

	      client.on("message", message => {
      if (message.content.toLowerCase() === prefix + 'help 2') {
		   if (!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.channel.send("Nemas `permisije` za koriscenje ove komande");
      const newEmbed = new Discord.MessageEmbed().setColor('#00B2B2').setTitle('**HELP UTILTY**');
      newEmbed
	        .setURL("https://discord.com/api/oauth2/authorize?client_id=819286678690594816&permissions=0&scope=bot")
      .setTitle(`INVITE BOT`)
	  	  .addField('**%avatar**', ` - prikazuje tvoj avatar.`)
        .addField('**%botsmembers**', ` - broj ukupnih membera na svim serverima.`)
        .addField('**%invite**', ` - invite link bota.`)
        .addField('**%ping**', ` - prikazuje botov ping.`)
        .addField('**%botinfo**', ` - prikazuje informacije o botu.`)
        .addField('**%rock** - **%paper**', ` - igra sa botom.`)
        .addField('**%server**', ` - informacije o serveru.`)
        .addField('**%myinfo**', ` - informacije o vama.`)
        .addField('**%zservers**', ` - prikazuje broj servera u kojima je bot.`)
		.addField('**%clear**', ` - brise odredjeni broj poruka.`)
		.addField('**%araid1/2**', ` - 1 = anti raid zastita ukljucena, 2 = anti raid zastita iskljucena.`)
        .setDescription('**-------BOT KOMANDE-------**')
		
		

        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
      message.channel.send(newEmbed);
    }
      })



//	    .addField('Ova komanda brise poruke poruke. %clear 5 or %c 5.')
//%rock - %paper - igra sa botom
client.on('message', function(message) {
 if (message.author.bot) return;
 if (!message.content.startsWith(prefix)) return;
 const commandBody = message.content.slice(prefix.length);
 const args = commandBody.split(' ');
 const command = args.shift().toLowerCase();
 if (command === 'ping') {
  const timeTaken = Date.now() - message.createdTimestamp;
  message.channel.send(`Trenutni ping je 150ms. :earth_americas:`);
 }
 if (command === 'cat') {
  message.channel.send(`https://media.giphy.com/media/ExN8bEghwc8Ced5Yss/giphy.gif`);
  
}
 if (command === 'trashcan') {
  message.channel.send(
   `https://www.trashcanswarehouse.com/assets/images/product-photos/witt/wcd24cl.jpg`
  );
 }




 
 if (command === 'rock') {
  var rockpaperscissors = ['Rock', 'Paper', 'Scissors'];
  var rps = Math.floor(Math.random() * rockpaperscissors.length);
  message.channel.send(rockpaperscissors[rps]);
 }
 if (command === 'paper') {
  var rockpaperscissors = ['Rock', 'Paper', 'Scissors'];
  var rps = Math.floor(Math.random() * rockpaperscissors.length);
  message.channel.send(rockpaperscissors[rps]);
 }
 if (command === 'scissors') {
  var rockpaperscissors = ['Rock', 'Paper', 'Scissors'];
  var rps = Math.floor(Math.random() * rockpaperscissors.length);
  message.channel.send(rockpaperscissors[rps]);
 }

 client.on('message', (message) => {
  // If message is i win
  if (message.content === 'i win') {
   // Send no you dont back
   message.channel.send('no you dont');
  }
 });
});


client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'botsmembers') {
    const newEmbed = new Discord.MessageEmbed().setColor('#0000FF').setAuthor('Members');
    newEmbed
    .setDescription(`${client.users.cache.size}`)
      .setTimestamp();
    message.channel.send(newEmbed);
    }
  })

    client.on("message", message => {
      if (message.content.toLowerCase() === prefix + 'myinfo') {
        const newEmbed = new Discord.MessageEmbed().setColor('#0000FF').setAuthor('Members');
        newEmbed
        .setDescription(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`)
          .setTimestamp();
        message.channel.send(newEmbed);
        }
      })
	      client.on("message", message => {
      if (message.content.toLowerCase() === prefix + 'araid1') {
		   if (!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.channel.send("Nemas `permisije` za koriscenje ove komande");
        const newEmbed = new Discord.MessageEmbed().setColor('#0000FF').setAuthor('Members');
        newEmbed
        .setDescription(`Anti RAID Protencion is ON.`)
          .setTimestamp();
        message.channel.send(newEmbed);
        }
      })

	  	      client.on("message", message => {               
      if (message.content.toLowerCase() === prefix + 'araid2') {
		   if (!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.channel.send("Nemas `permisije` za koriscenje ove komande");
        const newEmbed = new Discord.MessageEmbed().setColor('#0000FF').setAuthor('Members');
        newEmbed
        .setDescription(`Anti RAID Protencion is OFF.`)
          .setTimestamp();
        }
      })
  client.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'invite') {
      const newEmbed = new Discord.MessageEmbed();
      newEmbed
      .setURL("https://discord.com/api/oauth2/authorize?client_id=819286678690594816&permissions=0&scope=bot")
      .setTitle(`Click here if you want to add me to your server`)
      message.channel.send(newEmbed);
      }
    })

    client.on('message', (receivedMessage) => {
      // Prevent bot from responding to its own messages
      if (receivedMessage.author == client.user) {
          return
      }
      
      // Check if the bot's user was tagged in the message
      if (receivedMessage.content.includes(client.user.toString())) {
          // Send acknowledgement message
          receivedMessage.channel.send("Message received from " +
              receivedMessage.author.toString() + ": " + receivedMessage.content)
      }
  })

  client.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'zservers') {
      const newEmbed = new Discord.MessageEmbed().setColor('#0000FF').setAuthor('Members');
      newEmbed
      .setDescription(`Bot is in ${client.guilds.cache.size} servers.`)
        .setTimestamp();
      message.channel.send(newEmbed);
      }
    })
	



client.login("ODE5Mjg2Njc4NjkwNTk0ODE2.YEkaLQ.sj-PwtLRJYu63a68ixiKw1k-ZmQ")
