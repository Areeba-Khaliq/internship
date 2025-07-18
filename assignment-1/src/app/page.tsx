"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Quotes categorized by topic
const topicQuotes: { [key: string]: string[] } = {
  success: [
    "Success is not for the lazy.",
    "Dream it. Wish it. Do it.",
    "Push yourself, because no one else is going to do it for you.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don’t be afraid to give up the good to go for the great.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "The harder you work, the luckier you get.",
    "Success is not in what you have, but who you are.",
    "The way to get started is to quit talking and begin doing.",
    "Opportunities don't happen. You create them."
  ],
  failure: [
    "Failure is simply the opportunity to begin again, this time more intelligently.",
    "Don't fear failure. Fear being in the exact same place next year as you are today.",
    "Failure is a part of the process. You just learn to pick yourself back up.",
    "Mistakes are the portals of discovery.",
    "Our greatest glory is not in never failing, but in rising every time we fail.",
    "Failure is success in progress.",
    "Failure is the condiment that gives success its flavor.",
    "Do not be embarrassed by your failures, learn from them and start again.",
    "Every failure is a step to success.",
    "A failure is not a loss. It’s a gain. You learn. You change. You grow."
  ],
  happy: [
    "Happiness is not by chance, but by choice.",
    "Be so happy that when others look at you, they become happy too.",
    "Happiness is a journey, not a destination.",
    "The purpose of our lives is to be happy.",
    "Happiness depends upon ourselves.",
    "The most important thing is to enjoy your life — to be happy.",
    "Happiness is when what you think, what you say, and what you do are in harmony.",
    "Happiness is the best makeup.",
    "The secret of happiness is freedom.",
    "Do more of what makes you happy."
  ],
  sad: [
    "Tough times never last, but tough people do.",
    "Stars can't shine without darkness.",
    "Every day may not be good, but there is something good in every day.",
    "Out of difficulties grow miracles.",
    "Sadness flies away on the wings of time.",
    "The pain you feel today is the strength you feel tomorrow.",
    "Even the darkest night will end and the sun will rise.",
    "Sometimes you have to know sadness to know happiness.",
    "You are stronger than you think.",
    "This too shall pass."
  ],
  anxious: [
    "You don't have to control your thoughts. You just have to stop letting them control you.",
    "Anxiety does not empty tomorrow of its sorrows, but only empties today of its strength.",
    "Take a deep breath. You're going to be okay.",
    "Worrying is like paying a debt you don’t owe.",
    "You are stronger than your anxiety.",
    "Your mind will believe everything you tell it. Feed it hope. Feed it truth. Feed it with love.",
    "Anxiety happens when you think you have to figure everything out at once. Breathe. You’re strong.",
    "Don’t let your difficulties fill you with anxiety, after all it is only in the darkest nights that stars shine.",
    "Slow breathing is like an anchor in the midst of an emotional storm.",
    "You don't have to be perfect to be amazing."
  ],
  joy: [
    "Find joy in the journey.",
    "Joy is the simplest form of gratitude.",
    "Choose joy, even when you don't feel like it.",
    "Joy does not simply happen to us. We have to choose joy and keep choosing it every day.",
    "Let your joy be in your journey, not in some distant goal.",
    "Where there is love, there is joy.",
    "Joy is a net of love by which you can catch souls.",
    "Joy is the infallible sign of the presence of God.",
    "The pain passes, but the beauty remains.",
    "Joy comes from appreciating the small moments."
  ],
  adventure: [
    "Life is an adventure, not a package tour.",
    "Jobs fill your pocket, but adventures fill your soul.",
    "Adventure may hurt you, but monotony will kill you.",
    "The biggest adventure you can take is to live the life of your dreams.",
    "Adventure is worthwhile in itself.",
    "Fill your life with adventures, not things.",
    "Say yes to new adventures.",
    "Adventure is out there.",
    "Life is either a daring adventure or nothing at all.",
    "Travel far enough, you meet yourself."
  ],
  general: [
    "Believe in yourself and all that you are.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Don't watch the clock; do what it does. Keep going.",
    "Great things never come from comfort zones.",
    "Push yourself, because no one else is going to do it for you.",
    "Success is not for the lazy.",
    "Dream it. Wish it. Do it.",
    "Your limitation—it’s only your imagination.",
    "Do something today that your future self will thank you for.",
    "Don’t stop until you’re proud."
  ]
};

// Fisher-Yates shuffle to ensure consistent randomness
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function QuoteGenerator() {
  const [topic, setTopic] = useState("");
  const [selectedQuotes, setSelectedQuotes] = useState<string[]>([]);

  const generateQuotes = () => {
    const lowerTopic = topic.trim().toLowerCase();
    const quotes =
      lowerTopic && topicQuotes[lowerTopic]
        ? topicQuotes[lowerTopic]
        : topicQuotes["general"];
    const shuffled = shuffleArray(quotes);
    setSelectedQuotes(shuffled.slice(0, 3));
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4 text-center text-purple-700">
        🌟 Motivational Quote Generator
      </h1>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
      <select 
          title="Select a topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="rounded-lg border-2 border-purple-400 p-2 w-full focus:ring-2 focus:ring-purple-500 focus:outline-none">

          <option value="">Select a topic (optional)</option>
          {Object.keys(topicQuotes).map((t) => (
            <option key={t} value={t}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </option>
          ))}
        </select>
        <Button onClick={generateQuotes} className="bg-purple-600 hover:bg-purple-700">
          Generate Quotes
        </Button>
      </div>

      <div className="grid gap-3 mt-6 w-full max-w-sm">
        {selectedQuotes.map((quote, index) => (
          <Card key={index} className="bg-white shadow rounded">
            <CardContent className="p-4 text-center text-gray-700">
              "{quote}"
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
