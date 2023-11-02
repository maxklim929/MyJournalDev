quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
          "The way to get started is to quit talking and begin doing. -Walt Disney",
          "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma " +
          "– which is living with the results of other people's thinking. \n -Steve Jobs",
          "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
          "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
          "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
          "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
          "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
          "Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin",
          "It is during our darkest moments that we must focus to see the light. -Aristotle",
          "Whoever is happy will make others happy too. -Anne Frank",
          "We walk by faith, not by sight. -Paul the Apostle",
          "Bad company ruins good morals. -Paul the Apostle",
          "When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt",
          "Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin",
          "In the end, it's not the years in your life that count. It's the life in your years. -Abraham Lincoln",
          "If life were predictable it would cease to be life and be without flavor. -Eleanor Roosevelt",
          "The only fence against the world is a thorough knowledge of it -John Locke",
          "May you live all the days of your life. -Jonathan Swift",
          "Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison"]

for elem in quotes:
    name = elem + ".txt"
    f = open(name, "a")
    f.write(elem)
    f.close()
