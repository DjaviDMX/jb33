(function() {
    const quotes = [
      {
        quote:
          "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
        author: " Life"
      },
      {
        quote:
          "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
        author: "John Kenneth Galbraith"
      },
      

      {
        quote:
          "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
        author: "Charles Lindbergh"
      },
      {
        quote:
          "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
        author: " Tyne Daly"
      },
      {
        quote:
          "In the sky there are always answers and explanations for everything- every pain, every suffering, joy and confusion.",
        author: "Ishmael Bean"
      },
      {
        quote:
          "If aggression is inevitable, you need to be able to enjoy it. Otherwise you will suffer and it is dangerous for your life.", 
        author: "Javid Babayev #JB33"
      }
    ];
  
    

    const btn = document.getElementById("generate-btn");

    btn.addEventListener("click", function() {
      let random = Math.floor(Math.random() * quotes.length);
      console.log(random);
  
      document.getElementById("quote").textContent = quotes[random].quote;
      document.querySelector(".author").textContent = quotes[random].author;
    });
  })();
