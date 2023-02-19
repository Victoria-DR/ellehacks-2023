const cohere = require('cohere-ai');

cohere.init(process.env.COHERE_API_KEY);

const generatePostTitle = async(caption) => {
  const response = await cohere.generate({
    model: 'xlarge',
    prompt: `This program generates a short title given a short paragraph.\n--\nParagraph: After weeks of waiting, my sunflowers have finally bloomed! They\'re so bright and cheerful, and they\'ve attracted a bunch of bees to the garden. Love it!\nTitle: Beautiful Sunflowers\n--\nParagraph: Just harvested my first tomato of the season, and it was so juicy and flavorful. I can\'t wait to make a salad with it later today.\nTitle: Tomato Harvest\n--\nParagraph: It\'s been raining nonstop for days, and my garden is looking a little waterlogged. But the good news is that my herbs are thriving - they love all this moisture!\nTitle: The Power of Herbs\n--\nParagraph: Woke up this morning to find that a family of bunnies had taken up residence in my garden. They\'re so cute, but I hope they don\'t eat all my plants!\nTitle: The Bunnies Have Arrived\n--\nParagraph: ${caption}\nTitle: `,
    max_tokens: 18,
    temperature: 1.5,
    k: 0,
    p: 0.75,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ['--'],
    return_likelihoods: 'NONE'
  });
  return response;
};

module.exports = generatePostTitle;
