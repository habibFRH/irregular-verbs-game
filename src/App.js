import React, { useState } from "react";

const irregularVerbs = [
  { base: "awake", past: "awoke", participle: "awoken" },
  { base: "beat", past: "beat", participle: "beaten" },
  { base: "become", past: "became", participle: "become" },
  { base: "begin", past: "began", participle: "begun" },
  { base: "bend", past: "bent", participle: "bent" },
  { base: "bet", past: "bet", participle: "bet" },
  { base: "bid", past: "bid", participle: "bid" },
  { base: "bite", past: "bit", participle: "bitten" },
  { base: "blow", past: "blew", participle: "blown" },
  { base: "break", past: "broke", participle: "broken" },
  { base: "bring", past: "brought", participle: "brought" },
  { base: "broadcast", past: "broadcast", participle: "broadcast" },
  { base: "build", past: "built", participle: "built" },
  { base: "buy", past: "bought", participle: "bought" },
  { base: "catch", past: "caught", participle: "caught" },
  { base: "choose", past: "chose", participle: "chosen" },
  { base: "come", past: "came", participle: "come" },
  { base: "cost", past: "cost", participle: "cost" },
  { base: "cut", past: "cut", participle: "cut" },
  { base: "dig", past: "dug", participle: "dug" },
  { base: "do", past: "did", participle: "done" },
  { base: "draw", past: "drew", participle: "drawn" },
  { base: "drive", past: "drove", participle: "driven" },
  { base: "drink", past: "drank", participle: "drunk" },
  { base: "eat", past: "ate", participle: "eaten" },
  { base: "fall", past: "fell", participle: "fallen" },
  { base: "feel", past: "felt", participle: "felt" },
  { base: "fight", past: "fought", participle: "fought" },
  { base: "find", past: "found", participle: "found" },
  { base: "fly", past: "flew", participle: "flown" },
  { base: "forget", past: "forgot", participle: "forgotten" },
  { base: "forgive", past: "forgave", participle: "forgiven" },
  { base: "get", past: "got", participle: "got (gotten)" },
  { base: "give", past: "gave", participle: "given" },
  { base: "go", past: "went", participle: "gone" },
  { base: "grow", past: "grew", participle: "grown" },
  { base: "hang", past: "hung", participle: "hung" },
  { base: "have", past: "had", participle: "had" },
  { base: "hear", past: "heard", participle: "heard" },
  { base: "hit", past: "hit", participle: "hit" },
  { base: "hold", past: "held", participle: "held" },
  { base: "keep", past: "kept", participle: "kept" },
  { base: "know", past: "knew", participle: "known" },
  { base: "lay", past: "laid", participle: "laid" },
  { base: "lead", past: "led", participle: "led" },
  { base: "leave", past: "left", participle: "left" },
  { base: "lend", past: "lent", participle: "lent" },
  { base: "let", past: "let", participle: "let" },
  { base: "lie", past: "lay", participle: "lain" },
  { base: "lose", past: "lost", participle: "lost" },
  { base: "make", past: "made", participle: "made" },
  { base: "mean", past: "meant", participle: "meant" },
  { base: "meet", past: "met", participle: "met" },
  { base: "pay", past: "paid", participle: "paid" },
  { base: "put", past: "put", participle: "put" },
  { base: "read", past: "read", participle: "read" },
  { base: "ride", past: "rode", participle: "ridden" },
  { base: "ring", past: "rang", participle: "rung" },
  { base: "rise", past: "rose", participle: "risen" },
  { base: "run", past: "ran", participle: "run" },
  { base: "say", past: "said", participle: "said" },
  { base: "see", past: "saw", participle: "seen" },
  { base: "sell", past: "sold", participle: "sold" },
  { base: "send", past: "sent", participle: "sent" },
  { base: "sing", past: "sang", participle: "sung" },
  { base: "sit", past: "sat", participle: "sat" },
  { base: "sleep", past: "slept", participle: "slept" },
  { base: "speak", past: "spoke", participle: "spoken" },
  { base: "spend", past: "spent", participle: "spent" },
  { base: "stand", past: "stood", participle: "stood" },
  { base: "swim", past: "swam", participle: "swum" },
  { base: "take", past: "took", participle: "taken" },
  { base: "teach", past: "taught", participle: "taught" },
  { base: "tear", past: "tore", participle: "torn" },
  { base: "tell", past: "told", participle: "told" },
  { base: "think", past: "thought", participle: "thought" },
  { base: "throw", past: "threw", participle: "thrown" },
  { base: "understand", past: "understood", participle: "understood" },
  { base: "wake", past: "woke", participle: "woken" },
  { base: "win", past: "won", participle: "won" },
  { base: "write", past: "wrote", participle: "written" }
];

const App = () => {
  const [currentVerbIndex, setCurrentVerbIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState(null); // null, "success", "error", or "warning"
  const [tense, setTense] = useState("past"); // Toggle between 'past' and 'participle'

  const currentVerb = irregularVerbs[currentVerbIndex];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() === "") {
      setFeedback("warning");
      return;
    }

    const correctAnswer =
      tense === "past" ? currentVerb.past : currentVerb.participle;
    if (userInput.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setFeedback("success");
      setTimeout(() => {
        setFeedback(null);
        setUserInput("");
        setCurrentVerbIndex(
          (prevIndex) => (prevIndex + 1) % irregularVerbs.length
        );
      }, 2000);
    } else {
      setFeedback("error");
      setTimeout(() => {
        setFeedback(null);
      }, 4000);
    }
  };

  const toggleTense = () => {
    setTense((prevTense) => (prevTense === "past" ? "participle" : "past"));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Irregular Verbs Game</h1>
        <p className="text-lg">
          What is the {tense} form of "{currentVerb.base}"?
        </p>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Your answer"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        {feedback === "error" && (
          <div role="alert" className="mt-4">
            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              RAK GHALET !
            </div>
            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p>
                L ijaba s7i7a hya :"{" "}
                {tense === "past" ? currentVerb.past : currentVerb.participle}"
                sa7a7ha!
              </p>
            </div>
          </div>
        )}
        {feedback === "success" && (
          <div role="alert" className="mt-4">
            <div className="bg-green-500 text-white font-bold rounded-t px-4 py-2">
              Sa7it
            </div>
            <div className="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
              <p>Correct! Ya3tik Sa7a!</p>
            </div>
          </div>
        )}
        {feedback === "warning" && (
          <div role="alert" className="mt-4">
            <div className="bg-orange-500 text-white font-bold rounded-t px-4 py-2">
              Warning
            </div>
            <div className="border border-t-0 border-orange-400 rounded-b bg-orange-100 px-4 py-3 text-orange-700">
              <p>Awdi oktob l'ijaba (rakz hna mach f7aja khlef !) .</p>
            </div>
          </div>
        )}
        <button
          onClick={toggleTense}
          className="mt-6 text-blue-500 underline focus:outline-none"
        >
          Switch to {tense === "past" ? "Past Participle" : "Past Simple"}
        </button>
      </div>
      <p class="absolute bottom-2 w-full text-center text-gray-500">
        made by ferhi mohamed habib ellah
      </p>
    </div>
  );
};

export default App;
