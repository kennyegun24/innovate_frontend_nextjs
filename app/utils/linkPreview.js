import axios from "axios";

// Function to fetch and parse metadata from a URL
export async function getURLMetadata(websiteData) {
  const BASE_URL = "/api";

  const publicRequest = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
  });
  try {
    const response = await publicRequest.post("/github", { websiteData });
    const data = await response.data;

    const html = await data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const title = doc.querySelector(
      'meta[property="og:title"], meta[name="twitter:title"]'
    );
    const description = doc.querySelector(
      'meta[property="og:description"], meta[name="twitter:description"]'
    );
    const image = doc.querySelector(
      'meta[property="og:image"], meta[name="twitter:image"]'
    );

    const titleContent = title ? title.getAttribute("content") : "";
    const descriptionContent = description
      ? description.getAttribute("content")
      : "";
    const imageContent = image ? image.getAttribute("content") : "";

    return { titleContent, imageContent, descriptionContent };
  } catch (error) {
    console.error(`Error fetching URL: ${error.message}`);
  }
}
