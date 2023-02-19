const cohere = require('cohere-ai');

cohere.init(process.env.COHERE_API_KEY);

const detectToxicity = async() => {
  await cohere.classify(
  model = 'large',
  inputs = ["this game sucks, you suck",  "stop being a dumbass", "Let's do this once and for all", "This is coming along nicely"],
  examples = ("you are hot trash", "Toxic"), ("go to hell", "Toxic"), ("get rekt moron", "Toxic"), ("get a brain and use it", "Toxic"), ("say what you mean, you jerk.", "Toxic"), ("Are you really this stupid", "Toxic"), ("I will honestly kill you", "Toxic"), ("yo how are you", "Benign"), ("I'm curious, how did that happen", "Benign"), ("Try that again", "Benign"),  ("Hello everyone, excited to be here", "Benign"), ("I think I saw it first", "Benign"), ("That is an interesting point", "Benign"), ("I love this", "Benign"), ("We should try that sometime", "Benign"), ("You should go for it", "Benign"),
  )
}

module.exports = detectToxicity;