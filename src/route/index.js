// Підключаємо технологію express для back-end сервера
const express = require('express')

// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
//=================================================================
var header = {
  name: {
    firstname: 'Vladimir',
    lastname: 'Vladimirov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: 'Expected salary 7000usd per month',
  address: 'Arsenalna 4 street 02010 Kyiv Ukraine',
}
var footer = {
  social: {
    email: {
      text: 'gmbvlad@ukr.net',
      href: 'mailto:gmbvlad@ukr.net',
    },
    phone: {
      text: '+380934416631',
      href: 'tel:+38093441663',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/vladimir-test',
      text: 'linkedIn',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },
    header,
    main: {
      skills: [
        {
          name: 'HTML5',
          point: 9,
          isTop: true,
        },
        {
          name: 'CSS3',
          point: 0,
        },
        {
          name: 'Handlebars',
          point: 8,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 7,
        },
        {
          name: 'Git & Terminal',
          point: 6,
          isTop: false,
        },
        {
          name: 'React.js',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Traveling',
          isMain: true,
        },
        {
          name: 'Swimming',
        },
        {
          name: 'Fishing',
        },
        {
          name: 'Watch TV:)',
          isMain: false,
        },
      ],
    },
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },
    header,
    main: {
      educations: [
        {
          name: 'European University of Finance',
          isEnd: true,
        },
        {
          name: 'IT Systems Management and Business',
          isEnd: true,
        },
        {
          name: 'IT-BRAINS Course',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'Diploma EUFIMB',
          id: 121,
          isNew: false,
        },
        {
          name: 'British council: English course',
          id: 212,
          isNew: true,
        },
        {
          name: 'Time management',
          id: 323,
          isNew: false,
        },
      ],
    },
    footer,
  })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },
    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://www.it-brains.com.ua/',
          },
          duration: {
            from: '10.01.2023',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://work.ua',
              about:
                'Write script to automate scheduled system patching',
              stackAmount: 3,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML_CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awardAmount: 2,
              awards: [
                {
                  name: 'IT-company and providing comprehensive customer support',
                },
                {
                  name: 'Create the b2b system for the companys clients',
                },
              ],
            },
          ],
        },
        // {
        //   position: 'Manager',
        //   company: {
        //     name: 'Gembird',
        //     url: 'https://www.gmb.nl/default.aspx',
        //   },
        //   duration: {
        //     from: '10.01.2014',
        //     to: '01.12.2018',
        //   },
        // },
      ],
    },

    footer,
  })
})
// Підключаємо роутер до бек-енду
module.exports = router
