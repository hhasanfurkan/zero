module.exports = {
name:"sunucu-bilgi",
code:`
 $thumbnail[$serverIcon]
$title[Sunucu Bilgileri]
$description[
✏**Sunucu Adı:** \`$serverName[$guildID]\`

👑**Sunucu Sahibi:** \`$username[$ownerID]\`

🔰**Sunucu Bölgesi:** \`$serverRegion\`

📜**Toplam Kategori Sayısı:** \`$channelCount[category]\`

❇**Toplam Kanal Sayısı:** \`$channelCount\`

💬**Toplam Yazı Kanalı:** \`$channelCount[text]\`

📣**Toplam Ses Kanalı:** \`$channelCount[voice]\`

👤**Toplam Üye Sayısı:** \`$membersCount\`

🎃**Toplam Bot Sayısı:** \`$botCount\`]

$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]

`}
