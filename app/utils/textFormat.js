export const _anchorBoldItalics = (text) => {
  const _underScoreRegex = /`([^`]+)`/g;
  const _italics = /_([^_]+)_/g;
  const _urlRegex = /(?:https?:\/\/|www\.)\S+/gi;

  const textWithBold = text.replace(_underScoreRegex, (word) => {
    const finalWord = word.replace(/`/g, "");
    return `<span class="fontW600 white-black font14">${finalWord}</span>`;
  });

  const textWithItalics = textWithBold.replace(_italics, (word) => {
    const finalWord = word.replace(/_/g, "");
    return `<span class="italics white-black font14">${finalWord}</span>`;
  });

  const textWithLinks = textWithItalics.replace(_urlRegex, (url) => {
    const linkName = url
      .replace(/^(https?:\/\/)?(www\.)?/, "")
      .replace(/\/+/g, ".");
    return `<a class="blue" href="${url}" target="_blank">${linkName}</a>`;
  });

  return { __html: textWithLinks };
};
