import soongif from "../../Assets/soon.gif";

const movieReviews = [
 // {
//     id: 1,
//     title: "Interstellar",
//     author: "Kaustubh",
//     review: ( 
    
//       <div className="review-container">
//       <div className="centered-para">
//         <p>By Kaus:</p>
//       <p>Interstellar is a science fiction movie directed by Christopher Nolan, who is known for his complex and ambitious movies that often deal with topics such as time, memory, 
// and reality. The movie was released in 2014, and stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, and Michael Caine, among others.</p>

// <p>The movie follows a group of astronauts and scientists who embark on a mission to find a new home for humanity, as Earth is becoming uninhabitable due to climate change. 
// The movie explores the themes of love, sacrifice, survival, and destiny, in a way that is both realistic and imaginative.</p>

// <p>One of the most impressive aspects of the movie is its cinematography, which creates a stunning visual experience for the viewers. The movie uses practical effects 
// and minimal CGI to create realistic and immersive scenes of space travel and exploration. The movie also uses IMAX cameras to capture the vastness and beauty of the 
// outer space and the alien planets. The movie also pays attention to the scientific accuracy and plausibility of its scenarios, such as the effects of gravity, relativity, 
// and wormholes on the characters and the story.</p>

// <p>Another remarkable aspect of the movie is its music, which is composed by Hans Zimmer. The music creates a contrast between the vastness and emptiness of space, and 
// the intimacy and emotion of the characters. The music also plays with the concept of time dilation, which is a phenomenon that occurs when gravity affects the passage 
// of time. The music uses organic and minimalist sounds, such as the organ and the piano, to create a sense of urgency and danger. The music also matches the rhythm and
//  movement of the spacecraft and the space station, creating a harmony between sound and vision. A piece of music that stands out to me is the track “Mountains”, 
//  which plays during the scene where the crew visits Miller’s planet. This track is composed of a single note that gradually increases in volume and pitch, creating 
//  a sense of anticipation and dread. The track also features a ticking sound that represents the passage of time on Earth, as one hour on Miller’s planet is equivalent 
//  to seven years on Earth. Each 'tick' you hear in the soundtrack is equivalent to an entire day passing on Earth. The track reaches its climax when the crew encounters 
//  a massive wave that threatens to destroy their spacecraft. The track then fades away as the crew escapes from the planet, leaving behind 23 years of Earth time. 
//  This track is a brilliant example of how Hans Zimmer uses music to convey the emotions and themes of the movie.</p>


//  <p>The movie features excellent performances from its cast, especially from Matthew McConaughey, who plays Cooper, the protagonist of the movie. McConaughey portrays 
// Cooper as a brave and adventurous man who loves his family and his planet. He also shows Cooper’s struggle and pain as he faces difficult choices and sacrifices during 
// his mission. McConaughey’s chemistry with Anne Hathaway, who plays Amelia Brand, his fellow astronaut, is also convincing and touching. Hathaway plays
//  Amelia as a scientist who is a smart and passionate woman who believes in love and hope. She also shows Amelia’s vulnerability and courage as she deals with loss and 
//  loneliness during her journey.</p>

//  <p>Interstellar features two robots, TARS and CASE, who are voiced by Bill Irwin and Josh Stewart, respectively. These robots are designed to be practical and efficient. 
// On first look, they appear to be emotionless and cold. However, as the movie progresses, they show their human side, as they develop a sense of humor and compassion.
// Initially, they have a box-like appearance that Cooper humorously refers to as a "grunt" that he'll turn into a vacuum cleaner. However, as the movie unfolds, 
// they demonstrate their versatility and the ability to transform into different shapes and forms. One particularly notable scene where they show their versatility is 
// when CASE transforms into a wheel like structure to save Amelia from the large tidal waves by carrying her back to the spacecraft. </p>

// <p>The movie also has a strong emotional core, which is the relationship between Cooper and his daughter Murph. The movie shows how Cooper’s decision to leave Earth affects
//  Murph’s life and personality. The movie also shows how Cooper tries to communicate with Murph through gravity and time. The movie shows how Murph grows up to be a
//   brilliant scientist who follows her father’s footsteps and tries to save humanity. The movie also shows how Cooper and Murph reunite after decades of separation, in a
//    touching scene that brings tears to the eyes.</p>

//    <p>While Interstellar has its flaws, including questionable logic in some scenes and limited character development for secondary roles, its strengths in visual spectacle, 
// musical score, acting performances, and emotional impact far outweigh these shortcomings.</p>

// <p>Interstellar is a movie that will make you think, feel, and wonder about the mysteries of the universe. I would highly recommend it to anyone who enjoys science fiction
// movies that are not only visually stunning but also intellectually stimulating and emotionally moving. Interstellar is a movie that explores the themes of love,
//  sacrifice, survival, and destiny in a way that is both realistic and imaginative. Interstellar is a movie that will stay with you long after you watch it.</p>
//       Let me know what you think of this review at <a href="https://www.kaustubh.live/messages">kaustubh.live/messages</a>
//         </div>
//         </div>
//         ),
    
    
    
//      imageUrl: "https://i.imgur.com/WbbcYqo.jpeg",
//   },

//   {
//     id: 2,
//     title: "Pride and Prejudice",
//     author: "K",
//     review: (
//       <div className="review-container">
//         <div className="centered-para">
          
//           <p>Pride and Prejudice, well, what can I say? It is an experience to be had, be it the original book or the movie adaptation; it is bewitching. The movie is a visual treat, 
// and the book is a treat for the mind. I will begin this 'review' or whatever this is by stating that 'Pride and Prejudice' is one of my most favorite pieces of 
// literature ever written, and the movie is one of my absolute favorites too. If you know me closely enough, this won't be news to you. Hence, whatever I write here 
// will be full of prejudice, so be warned.</p>

// <p>The story revolves around the Bennet family, consisting of five daughters and their parents. The daughters are Jane, Elizabeth, Mary, Kitty, and Lydia. Each of them has 
// their own distinct personalities. Jane is the eldest and the most beautiful of them all. She is also the most sensible and the most mature. Elizabeth is the second 
// eldest and the most intelligent of them all, which is why she is her father's favorite. Mary is the third daughter and the most studious of them all. Some may call her 
// boring; however, that would not be true, in my uneducated opinion; she just seems to be the most introverted of them all and perhaps finds it difficult to fit in. Lydia 
// and Kitty are the youngest and perhaps the most immature of them all. They are also the most frivolous, and you'll often find them giggling and gossiping about everything.</p>

// <p>I will try to write mostly about the movie and not the book. I want to write something else about the book. The movie's primary focus is on the relationship between 
// Elizabeth and Mr. Darcy. I do not have the words to describe him, so I will quote Wikipedia to do the work for me: 'Mr. Darcy is a wealthy young gentleman with an 
// income exceeding £10,000 a year (equivalent to over £13,000,000 a year in relative income) and the proprietor of Pemberley, a large estate in Derbyshire, England.' 
// The key takeaways from this are that he is rich and famous. Elizabeth or 'Lizzy,' as she is called by her family, and Mr. Darcy meet at a ball where Darcy makes rather
//  rude remarks about Lizzy. It is at this very ball where Jane and Mr. Bingley meet and fall in love. Mr. Bingley is Darcy's best friend and, as it happens, is also 
//  rich and famous. Surprise, surprise. It is after this ball that Jane and Lizzy discuss marriage and love. Jane is a hopeless romantic and believes in love at first 
//  sight. Lizzy, on the other hand, is a realist who believes only the deepest love can make a marriage work, which is why she believes she will end up as an old maid 
// unmarried. Little did she know what fate had in store for her.</p>

// <p>Keira Knightley and Matthew Macfayden play their roles a little too well. Watching them swoon over each other is a treat. Makes one wonder what they are missing out 
// on in their lives. Their on screen chemistry is palpable and makes you want to fall in love. It is a joy to see these iconic characters brought to life so convincingly.
// What sets "Pride and Prejudice" apart, whether you're experiencing it through the pages of Jane Austen's novel or on the screen, is its timeless exploration of themes 
// like love, class, and societal expectations. The story resonates just as powerfully today as it did when it was first published.The film adaptation, with its 
// breathtaking cinematography and strong performances, complements the novel beautifully. It captures the essence of the characters and the Regency era's manners 
// and customs while making it accessible to modern audiences. </p>

// <p>Now, I'm an absolute connoisseur of cinematography, and this movie surpassed my expectations and swept me away.The film's cinematography is a masterclass in 
// visual storytelling. The lush, picturesque landscapes and opulent settings transport you to the Regency era, immersing you in a world of refinement and elegance. 
// The director's choice of angles and framing brings out the subtleties of the characters' emotions, allowing us to delve deeper into their inner lives.
// </p>

// <p>What's truly captivating is how the film's art direction and costume design capture the essence of the time. The elaborate period costumes, grand estates, 
// and meticulously detailed interiors all contribute to the film's authenticity. It's like stepping into a time machine and experiencing the world of Jane Austen 
// firsthand.</p>

// <p>And then there's the music, which enhances the overall experience. The classical score perfectly complements the film, adding emotional depth to pivotal moments. 
// It's almost as if the music becomes another character in the story, guiding our emotions and underlining the tension and romance. What I love most about the movie is
// it's emphasis on piano music. The piano is a recurring motif throughout the film, and it's used to great effect. It is timeless and melancholic, yet soothing. \
// </p>
// <p>Silence is yet another object which most movies fail to use to their advantage. Not this one. The movie cleverly uses silence to convey the characters' emotions 
// according to the scenes. Music along with silence at appropriate times is a powerful tool. It is extremely apparent in my beloved rain scene. The music that leads to
// the scene is a crescendo, and then it stops. The music leads way to the sound of raindrops falling on the ground. This is where Darcy confesses his love for Lizzy 
// without much elegance much to our dismay. Even though the outcome of the confession is not what we or even Darcy expected, we see the extreme vulnerability of both
// the characters as they stand in the rain, drenched, trying to get close to each other and yet pushing each other away since the circumstances are not in their favor.
// </p>
// <p>
// Uff this is my favourite scene ever. 
// I have just realized I can get sorta informal writing this since no one is ever going to read this. Profit!</p>

// <p>It is after this scene that Darcy makes his motives clear through a letter to Lizzy and goes away to make amends. Lizzy, on the other hand, is left to deal with her
// pride and her own prejudice that she was unaware of.</p>

// This writing is so bad and incomplete. I shall perhaps finish this later. 
// I wish I could write better. But noooooo I am doomed to mediocrity.
//         </div>
//       </div>
//     ),
//     imageUrl: "https://i.imgur.com/nlNarv4.jpeg",
//   },


  {
    id: 3,
    title: "More coming soon!",
    author: "👻",
    review: (
      <div className="review-container">
        <div className="centered-para">
          
          <p>I'll add more reviews as soon as I finish writing them! (which may be never...)</p>
        </div>
      </div>
    ),
    imageUrl: soongif,
  },

  // {
  //   id: 4,
  //   title: "About Time",
  //   author: "K",
  //   review: (
  //     <div className="review-container">
  //       <div className="centered-para">
          
  //         <p>Another one of my most favourite movies. The genre is Romance/Sci-Fi. It really is difficult to imagine romance with science fiction
  //           and truthfully speaking this movie is not really scifi apart from basis which is time travel. Which is not even explored that well. 
  //           The rules for time travel in this movie are not well developed and that is not an issue at all. The movie excels at other things that
  //           matter much more. It is a heart warming and heart breaking movie at the same time. Time and again, being reminded of the
  //           surreal but intrepid nature of life. 

  //           The movie is about Tim, who is played by Domhnall Gleeson, who is a young man who discovers that he can travel in time. He uses this
  //           ability to change his past and make his future better. He uses this ability to find love, and to make his life perfect. However, he soon
  //           realizes that changing the past has consequences, and that he cannot control everything. The movie explores themes of love, family, and
  //           the passage of time in a way that is both heartwarming and heartbreaking, that time is inevitable and that we must cherish every moment
  //           we have.

  //           The ability to relive moments and make them perfect is something that we all wish for. This also makes me think about how
  //           underprivileged I am to not have this ability. There are so many moments in my life that I wish I could relive and make them perfect.
  //           Or just relive some really good moments time and again. The lost moments in my life. This city makes me want to take a 
  //           loaded gun to my head and pull the trigger 


  //         </p>
  //       </div>
  //     </div>
  //   ),
    
  // },
  // Add more movie reviews here
];

export default movieReviews;