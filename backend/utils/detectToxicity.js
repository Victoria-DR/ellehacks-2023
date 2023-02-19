const cohere = require('cohere-ai');

cohere.init(process.env.COHERE_API_KEY);

const detectToxicity = async(caption) => {
  const response = await cohere.classify({
    model: 'large',
    inputs: [caption],
    examples: [{"text": "you are hot trash", "label": "Toxic"}, {"text": "go to hell", "label": "Toxic"}, {"text": "We should try that sometime", "label": "Benign"}, {"text": "I love this", "label": "Benign"}]
  });
  return response;
};

module.exports = detectToxicity;
