export const siteConfigs = {
  metadata: {
    title: "Welcome home ISA",
    description: "It is not important part here cose it is my own app NOT for searching by bots",
  },

  navBarItems: [
    { href: '/about', content: 'about' },
    { href: '/skills', content: 'skills' },
    { href: '/tasks', content: 'tasks' },
    { href: '/businesses', content: 'businesses' },
  ],

  pagesContent: {
    '/': {
      content: 'тут будет цветной график пицца с данными из skills.'
    },
    
    '/skills': {
      content: `тут будет форма для выбора скила за которым хочется наблюдать.
       1 - сам скилл, 2 - его предел в 100%, 3 - кол-во % на текущий момент`
    },

    '/tasks': {
      content: `долгосрочный todo лист`
    },

    '/about': {
      content: `Hey! 🎉 I’m really happy you’ve joined this awesome app!
            Big congrats on taking the next step and growing yourself alongside a huge community
            of people who love tracking their own progress—whether it’s new skills 📈, habits, 
            or little reminders to not forget the important stuff. 🔔
            We all enjoy hanging out here because of the clean, modern, super user-friendly 
            design and the fast, responsive interface that just feels smooth. 
            Go ahead—click on every button you see and explore, it’s fun, I promise haha! 😄
            Plus, we’ve got those cool pizza charts 🍕 for a more pleasant experience
            and a quick glance at the things that matter most to you. 💪
            Welcome aboard—can’t wait to see you crush your goals! 🚀`
    }
  },
}

