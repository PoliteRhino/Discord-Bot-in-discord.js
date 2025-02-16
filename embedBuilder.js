const { EmbedBuilder } = require('discord.js');

/**
 * Creates a new embed with a default color and other settings.
 * @param {string} title - The title of the embed.
 * @param {string} description - The description of the embed.
 * @param {string} color - The color of the embed (default is blue).
 * @returns {EmbedBuilder} - The configured EmbedBuilder instance.
 */
function createEmbed(title, description, color = '#0099ff') {
    return new EmbedBuilder()
        .setColor(color)
        .setTitle(title)
        .setDescription(description);
}

module.exports = { createEmbed };