export const siteConfigs = {
  metadata: {
    title: "Welcome home ISA",
    description: "It is not important part here cose it is my own app NOT for searching by bots",
  },
  
  authorizedOnlyPages:['tasks'],

  quotes: [
    "You’ve got this!",
    "Small managed steps, make a big difference",
    "That to which you respond calmly does not control you.",
    "Progress, not perfection.",
    "Success is the sum of small efforts.",
    "Do it scared.",
    "Keep going. Everything you need will come to you at the right time.",
    "Your only limit is your mind.",
    "Small steps every day lead to big results.",
    "Believe you can and you’re halfway there."
  ],
  quotesDuration: 10000,

  navBarItems: [
    { href: '/about', content: 'about' },
    { href: '/skills', content: 'skills' },
    { href: '/tasks', content: 'tasks' },
    { href: '/businesses', content: 'businesses' },
  ],

  pagesContent: {

    '/': {
      title: 'home',
      content: 'тут будет цветной график пицца с данными из skills.'
    },

    '/skills': {
      title: 'skills',
      progressInitialState: 33,
      content: `тут будет форма для выбора скила за которым хочется наблюдать.
       1 - сам скилл, 2 - его предел в 100%, 3 - кол-во % на текущий момент`
    },

    '/tasks': {
      title: 'tasks',
      content: `долгосрочный todo лист`
    },

    '/about': {
      title: 'about',
      content: `<article>
                    <p>  Hey!  🎉 <br /> I’m really happy you’ve joined this awesome <strong><em> Portal </em></strong>😌  </p>
                    <br />
                    <p>
                      Big congrats on taking the next step and growing yourself alongside a 
                      <strong>huge community</strong> of people who love tracking their 
                      own progress - whether it’s <em>new skills</em> 📈, habits, or little reminders 
                      to not forget the important stuff 🔔, 
                    </p>
                    <br />            
                    <blockquote>
                            
                      <ul>
                          <li>
                            <strong> We </strong> all enjoy hanging out here because 
                              of the clean, modern, super user-friendly design and the fast, responsive
                              interface that just feels smooth.
                          </li>
                          <li>
                            <strong> Plus  </strong> , we’ve got those cool pizza charts 🍕,
                              for a more pleasant experience and a quick 
                              glance at the things that matter most to you.
                          </li>
                      </ul>

                      <p>
                          <strong> Go ahead </strong> — click on every button you see and explore, it’s fun,
                          <em> I promise haha!</em> 😄 <br /> 
                          <strong> Welcome aboard </strong> — can’t wait to see you <strong>crush your goals!</strong> 🚀 
                          <br /><br />
                          <strong><em> Start Exploring </em> </strong> ...
                      </p>
                  </blockquote>
              </article>`
    },
    '/businesses': {
      title: `businesses`,
      content: `your content like a gym or youtube...`
    }
  },

  notFound: {
    PageContent: `Oops! Content not found… or maybe it’s still in the works 😅`
  }
}

