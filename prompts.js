(function() {
  const BUILT_IN_PROMPTS = {
    prompt1: "reply this tweet in 10 words",
    prompt2: "reply this post in 6 simple words",
    prompt3: `reply this tweet in 10 simple casual words.`
  };

  // Expose globally for other scripts
  window.BUILT_IN_PROMPTS = BUILT_IN_PROMPTS;
})();