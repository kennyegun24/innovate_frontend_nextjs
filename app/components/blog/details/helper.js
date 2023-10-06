export const wrapLinksWithHeaderTag = (text) => {
  const regex = /`([^`]+)`/g;
  const textWithLinks = text.replace(regex, (word) => {
    const finalWord = word.replace(/`/g, "");
    return `<span class="fontW600 white-black font16">${finalWord}</span>`;
  });

  return { __html: textWithLinks };
};
