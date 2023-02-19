const cohere = require('cohere-ai');

cohere.init(process.env.COHERE_API_KEY);

const generatePostTitle = async(caption) => {
  await cohere.generate(
    model ='xlarge',
    prompt = `This program generates a short title given a short paragraph. -- Paragraph: After weeks of waiting, my sunflowers have finally bloomed! They're so bright and cheerful, and they've attracted a bunch of bees to the garden. Love it! Title: Beautiful Sunflowers -- Paragraph: Just harvested my first tomato of the season, and it was so juicy and flavorful. I can't wait to make a salad with it later today. Title: Tomato Harvest -- Paragraph: It's been raining nonstop for days, and my garden is looking a little waterlogged. But the good news is that my herbs are thriving - they love all this moisture! Title: The Power of Herbs -- Paragraph: Woke up this morning to find that a family of bunnies had taken up residence in my garden. They're so cute, but I hope they don't eat all my plants! Title: The Bunnies Have Arrived -- Paragraph: ${caption} Title:`,
  )
};

module.exports = generatePostTitle;
