/* =====================================================================
   FEATURED PROJECTS  —  edit this list and BOTH pages update:
     • index.html    -> the scrolling pills under the hero
     • library.html  -> the 3D fly-through at the top

   Add, remove or reorder entries freely (2–12 works best).
   The order here is the order of the pills and the fly-through.

   Required fields
     title  name shown on the card / pill
     href   where it links
     icon   small square image (same paths you use elsewhere)
     tag    short label, e.g. 'Arcade'
     desc   one or two sentences for the fly-through card

   Optional fields (sensible defaults are used if you leave them out)
     card   card background color                 default '#eceff1'
     text   card text color                       default '#4F5D75'
     bg     [top-left, bottom-right] page colors  default: cycles through a built-in palette
            behind the fly-through, any CSS color, e.g. ['#e8793b', '#a23b2a']

   Example of a minimal entry:
     { title: 'Notes', href: '/notes', icon: '/notes/icon.png',
       tag: 'App', desc: 'A note taking app. Note takers are world changers!' },
   ===================================================================== */
window.FEATURED = [
    { title: 'Selah', href: 'https://chatselah.netlify.app', icon: 'https://chatselah.netlify.app/apple-touch-icon.png', tag: 'App',
      desc: 'A journal that pauses with you. Write freely, or talk it through with a friend who notices and gets to know you.',
      card: '#788580', text: '#EEF2EF', bg: ['#121614', '#3E8F66'] },

    { title: '2048', href: '/2048/', icon: '/2048/icon.png', tag: 'Game',
      desc: 'Merge the tiles. A remake with new themes and dark mode support.',
      card: '#EEE4DA', bg: ['hsl(30,46%,58%)', 'hsl(14,42%,40%)'] },

    { title: 'Hextris', href: '/hextris/', icon: '/hextris/favicon.png', tag: 'Game',
      desc: 'Tetris with a twist. Rotate the hexagon and match 3+ blocks of a color.',
      bg: ['hsl(204,42%,52%)', 'hsl(228,36%,36%)'] },

    { title: 'Flappy Bird', href: '/flappybird/', icon: '/flappybird/icon.jpg', tag: 'Game',
      desc: 'Click or tap to fly between the pipes. Harder than it looks.',
      bg: ['hsl(190,50%,52%)', 'hsl(160,40%,34%)'] },

    { title: 'Sequence', href: '/sequence/', icon: '/sequence/icon.svg', tag: 'Game',
      desc: 'A simple pattern-following game. Pay attention!',
      card: '#4F5D75', text: '#eceff1', bg: ['hsl(224,28%,50%)', 'hsl(232,32%,28%)'] },

    { title: 'Crossy Road', href: '/crossyroad/', icon: '/crossyroad/icon.jpeg', tag: 'Game',
      desc: "Cross the streets with arrow keys or swipes. Don't get hit!",
      card: '#f2bda5', bg: ['hsl(14,62%,60%)', 'hsl(346,42%,40%)'] },

    { title: 'Color Swirl', href: '/colorswirl/', icon: '/colorswirl/icon.jpg', tag: 'Game',
      desc: 'Swirl colors around and make beautiful designs in this relaxing app.',
      bg: ['hsl(292,38%,58%)', 'hsl(256,36%,38%)'] },

    { title: 'Stack', href: '/stack', icon: '/images/stack-icon.PNG', tag: 'Game',
      desc: 'Click/tap to stack the blocks as high as you can. But line it up, because everything hanging off the edge gets chopped off!',
      bg: ['hsl(30,46%,58%)', 'hsl(14,42%,40%)'] }
];