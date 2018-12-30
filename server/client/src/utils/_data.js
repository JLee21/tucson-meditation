export let retreats = {
  abc: {
    title: "Mindfulness Meditation Intensive Residential Retreat",
    timestampBegin: 1549706085,
    timestampEnd: 1550397386,
    residential: true,
    hostedBy: "Tucson Community Meditation Center",
    classDescription:
      "A non-sectarian, non-denominational practice that develops concentration, insight and compassion. Mindfulness Meditation (Vipassana) increases one’s moment-by-moment awareness of the ordinary mind-body processes. As this awareness is cultivated, blockages and limiting forces become conscious, are observed with detachment and are released. Everyone can develop skill in this simple technique, and it is a practice that can create profound changes in how we live. This retreat is suitable for those wishing an introduction to meditation, as well as for experienced meditators. This retreat is for persons of all levels of meditation experience who are interested in deepening and intensifying their meditation practice. This is a silent retreat with sitting and walking meditation, as well as sessions of mindful movement, i.e. Yoga or Qi Gong. Instruction is through lecture, guided meditation, private and group interviews, and ‘online meditation support’. Special instructions will be available for newcomers during the retreat.",
    backdropImageUrl: "http://lorempixel.com/400/200/nature/1",
    _teachers: ["shinzenyoung"],
    _location: "codranch",
    _fees: "abc"
  },
  def: {
    title: "Awakening Through the Wisdom of Our Bodies",
    timestampBegin: 1578729221,
    timestampEnd: 1578902021,
    residential: false,
    hostedBy: "Tucson Community Meditation Center",
    classDescription:
      "This retreat will focus on cultivating an embodied quality of presence as a way of bringing a deeper sense of freedom and contentment into our lives. Join us for this opportunity to explore the power of mindfulness through silent sitting and walking meditation, as well as optional times to engage in the embodied practice of chanting. The retreat is designed for beginners and experienced practitioners alike, and most of it will be held in silence. ",
    backdropImageUrl:
      "https://cdn.shopify.com/s/files/1/1155/3572/articles/listenbody_1400x.progressive.jpg?v=1486176405",
    _teachers: ["brainlesage"],
    _location: "codranch",
    _fees: "abc"
  }
};

export let teachers = {
  shinzenyoung: {
    firstName: "Shinzen",
    lastName: "Young",
    fullName: "Shinzen Young",
    pictureUrls: [
      "https://prod-ecom-media.soundstrue.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/h/shinzen-young.jpg"
    ],
    description:
      "Shinzen Young is a Westerner who has trained extensively in Asian monasteries. His deep understanding of Eastern philosophy and Western science gives him the ability to teach meditation using an approach that is accessible to the modern mind. He has been conducting retreats in Tucson since 1980. ",
    personalUrl: "https://www.shinzen.org"
  },
  brainlesage: {
    firstName: "Brian",
    lastName: "Lesage",
    fullName: "Brain Lesage",
    pictureUrls: [
      "https://s3.us-west-2.amazonaws.com/prod.retreat.guru/images/164801/medium/BrianLesage2018200.jpg"
    ],
    description:
      "Brian Lesage has practiced Buddhist meditation since 1988 and has taught meditation since 2000. He has studied in the Zen, Theravada and Tibetan schools of Buddhism. He was ordained in the Rinzai Zen tradition in 1996. His training in Vipassana Meditation includes doing extended meditation retreats in Myanmar (Burma), Nepal, and India as well as numerous retreats in the U.S. He leads retreats and teaches meditation courses nationwide. In teaching the Dharma, Brian is interested in maintaining a close tie with this 2,600 year old tradition and conveying it in a way that speaks to our current situation.",
    personalUrl: "https://liberatingawareness.com"
  }
};

export let locations = {
  codranch: {
    name: "C.O.D. Ranch",
    city: "Oracle",
    state: "Arizona",
    address: "37 South COD Ranch Rd",
    zipcode: 85623,
    url: "www.codranch.com",
    pictureUrls: [
      "https://www.codranch.com/wp-content/uploads/2016/03/LOGO6.png"
    ],
    description:
      "For twenty years the Historic C.O. D. Ranch has been a natural sanctuary for a diverse number of groups in the southwest Arizona area looking for a special place in a beautiful natural setting with delicious meals, warm comfortable accommodations and a caring spirit. Enjoy hiking trails, a stunning view, authentic fire pit, and perfect inside accommodations for meetings or parties. The COD Ranch truly is the perfect Tucson ranch event venue and retreat center for any special occasion.",
    drivingDescription: "37 miles North of Tucson"
  }
};

export let fees = {
  abc: {
    lastUpdate: 1547014263,
    earlyBirdDeadline: 1547014263,
    deadline: 1549580400,
    options: [
      {
        title: "Single Occupancy",
        description: "",
        earlyBirdFee: "1275",
        fee: "1325",
        capacity: "20",
        available: "5",
        waitlist: "0"
      },
      {
        title: "Double Occupancy",
        description: "",
        earlyBirdFee: "1140",
        fee: "1190",
        capacity: "10",
        available: "3",
        waitlist: "0"
      },
      {
        title: "Triple/Quad Occupancy",
        description: "",
        earlyBirdFee: "1030",
        fee: "1080",
        capacity: "20",
        available: "0",
        waitlist: "5"
      },
      {
        title: 'Triple/Quad Occupancy with "Online Phone Discount"',
        description:
          "An online host offers her room to be used for ‘Online Support’ which utilizes the teacher's time efficiently by providing personal and confidential guidance for 3 students at a time, via a phone system.  An online host will have a normal retreat experience except that she agrees to vacate her room during the online periods.  Sessions are three times a day and are usually scheduled at 7-8:30 am; 3-4:30 pm and 9-10:30 pm.  There are typically sits going on in the meditation hall during these time periods. If you choose this option you will receive a $150 discount on the retreat. Please contact the registrar before choosing this option.",
        earlyBirdFee: "880",
        fee: "930",
        capacity: "20",
        available: "0",
        waitlist: "5"
      },
      {
        title: "Camping",
        description: "",
        earlyBirdFee: "870",
        fee: "920",
        capacity: "20",
        available: "0",
        waitlist: "5"
      }
    ],
    optionalOptions: [
      {
        title: "Sweat Lodge (optional)",
        description: "",
        fee: "20"
      }
    ]
  }
};

export function _getRetreats() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...retreats }), 200);
  });
}

export function _getTeachers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...teachers }), 200);
  });
}

export function _getLocations() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...locations }), 200);
  });
}

export function _getFees() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...fees }), 200);
  });
}
