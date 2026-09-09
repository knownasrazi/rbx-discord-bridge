# rbx-discord-bridge

**Chat, bridged.**

> Discord bridge for Roblox - chat sync between Discord and in-game.

## Flow

- Player.Chatted -> Discord webhook
- Discord !say -> TextChatService

## Hand-crafted JS

\\\js
client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith("!say")) return;
  const text = msg.content.slice(4).trim();
  fetch(ROBLOX_WEBHOOK, { method: "POST", body: JSON.stringify({ content: "[Discord] " + msg.author.username + ": " + text }) });
});
\\\

## Run

\\\ash
git clone https://github.com/knownasrazi/rbx-discord-bridge.git
cd rbx-discord-bridge
bun install
bun run start
\\\

## License

MIT