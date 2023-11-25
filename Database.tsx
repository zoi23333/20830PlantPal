//Create an struct to store the plant Data

export const plantData = [
  {
    name: "Snake Plant",
    description:
      "With its upright, sword-like leaves, the Snake Plant is a resilient and visually striking choice. Known for air-purifying qualities, it effortlessly adds elegance to any space. Its low-maintenance nature and adaptability make it a perfect companion, thriving in various light conditions. Whether you're a seasoned plant enthusiast or a beginner, the Snake Plant's timeless appeal will enhance your indoor oasis.",
    wateringDays: 14, //Written a snumber and not string so we can calculate the last water/Status
    fertilizingDays: 28, //Include in future work REPORT that we will remind user to fertilize
    temperature: "15-27°C",
    humidity: "40-70%",
    light: "Low to Bright Indirect",
    repotting: "Every 1-2 years",
  },
  {
    name: "Spider Plant",
    description:
      "The Spider Plant, with its arching green and white striped leaves, is a captivating addition to indoor spaces. Recognized for producing spiderettes, it brings a touch of nature's artistry to your home. This low-maintenance plant adapts well to different light conditions, making it an ideal choice for both beginners and experienced plant lovers. Embrace the beauty and simplicity of the Spider Plant in your indoor haven.",
    wateringDays: 8,
    fertilizingDays: 14,
    temperature: "15-26°C",
    humidity: "40-60%",
    light: "Moderate to Bright",
    repotting: "Every 1-2 years",
  },
  {
    name: "Pothos",
    description:
      "Pothos, also known as Devil's Ivy, is a versatile and lush trailing plant. Its heart-shaped leaves and easy-going nature make it a favorite among plant enthusiasts. With the ability to thrive in low to bright indirect light, Pothos adds a touch of greenery to any corner. Whether you're a seasoned gardener or just starting, the Pothos' cascading beauty and adaptability will effortlessly elevate your indoor decor.",
    wateringDays: 8,
    fertilizingDays: 14,
    temperature: "15-30°C",
    humidity: "40-60%",
    light: "Low to Bright Indirect",
    repotting: "Every 1-2 years",
  },
  {
    name: "Peace Lily",
    description:
      "The Peace Lily, with its elegant white blooms, is a symbol of tranquility and grace. Recognized for its air-purifying qualities, it brings a sense of calm to any space. Ideal for low to bright indirect light, the Peace Lily is a captivating choice for both experienced plant lovers and beginners. Embrace the timeless beauty of the Peace Lily as it enhances the atmosphere of your indoor sanctuary.",
    wateringDays: 8,
    fertilizingDays: 14,
    temperature: "18-24°C",
    humidity: "40-60%",
    light: "Low to Bright Indirect",
    repotting: "Every 1-2 years",
  },
  {
    name: "Aloe Vera",
    description:
      "Aloe Vera, known for its soothing gel, is a sun-loving succulent that adds a touch of natural healing to your indoor oasis. With fleshy leaves that store water, it thrives in bright light conditions. Whether you're an experienced plant enthusiast or just starting your indoor gardening journey, the Aloe Vera's unique charm and healing properties will bring a refreshing energy to your home.",
    wateringDays: 18,
    fertilizingDays: 30,
    temperature: "21-26°C",
    humidity: "30-40%",
    light: "Bright",
    repotting: "Every 2-3 years",
  },
  {
    name: "ZZ Plant",
    description:
      "The ZZ Plant, with its glossy, dark green leaves, is a hardy and stylish choice for indoor spaces. Known for its resilience in low to moderate light, it effortlessly complements any decor style. Whether you're an experienced plant enthusiast or a beginner, the ZZ Plant's timeless appeal and low-maintenance nature make it a perfect addition to your indoor haven, enhancing the aesthetic of your living space.",
    wateringDays: 19,
    fertilizingDays: 30,
    temperature: "16-24°C",
    humidity: "40-50%",
    light: "Low to Moderate",
    repotting: "Every 2-3 years",
  },
  {
    name: "Rubber Plant",
    description:
      "The Rubber Plant, with its broad, glossy leaves, is a classic choice that adds a touch of sophistication to indoor spaces. Recognized for its air-purifying qualities, it thrives in moderate to bright light conditions. Whether you're a seasoned plant enthusiast or a novice, the Rubber Plant's enduring beauty and easy care make it an excellent choice for enhancing the ambiance of your indoor sanctuary.",
    wateringDays: 9,
    fertilizingDays: 30,
    temperature: "18-24°C",
    humidity: "40-60%",
    light: "Moderate to Bright",
  },
  {
    name: "Jade Plant",
    description:
      "The Jade Plant, a resilient succulent with thick, fleshy leaves, is a symbol of prosperity and longevity. Known for its adaptability and bright green foliage, it effortlessly adds a touch of nature's elegance to any space. Whether you're an experienced gardener or just starting your indoor gardening journey, the Jade Plant's unique charm and positive energy will create a harmonious atmosphere in your home.",
    wateringDays: 17,
    fertilizingDays: 30,
    temperature: "18-24°C",
    humidity: "30-40%",
    light: "Bright",
    repotting: "Every 2-3 years",
  },
  {
    name: "Boston Fern",
    description:
      "The Boston Fern, with its lush and feathery fronds, brings a touch of nature's freshness to indoor spaces. Recognized for its love of humidity, it thrives in bright, indirect light. Whether you're a seasoned plant enthusiast or a beginner, the Boston Fern's captivating greenery and air-purifying qualities make it an excellent choice for enhancing the ambiance of your indoor sanctuary.",
    wateringDays: 3,
    fertilizingDays: 30,
    temperature: "18-24°C",
    humidity: "50-80%",
    light: "Moderate to Bright",
    repotting: "Every 1-2 years",
  },
  {
    name: "Orchid",
    description:
      "Orchids, with their elegant and exotic flowers, bring a touch of sophistication and beauty to any indoor garden. Recognized for their unique blooms, they thrive in bright indirect light. Whether you're a seasoned orchid enthusiast or just starting, the Orchid's captivating presence and graceful charm will elevate the aesthetics of your indoor oasis, creating a serene and visually appealing atmosphere.",
    wateringDays: 8,
    fertilizingDays: 5,
    temperature: "18-24°C",
    humidity: "40-60%",
    light: "Bright Indirect",
    repotting: "Repot when crowded",
  },
  {
    name: "Imaginary Fern",
    description:
      "The Imaginary Fern, celestial marvel, boasts otherworldly charm with delicate fronds resembling celestial constellations. Place it in bright indirect light to unveil its mystical allure. Embrace the celestial beauty of this imaginative fern, a unique addition to your indoor sanctuary.",
    wateringDays: 1,
    fertilizingDays: 3,
    temperature: "20-25°C",
    humidity: "50-60%",
    light: "Bright Indirect",
    repotting: "Every 1-2 years",
  },
];

//Recieve the Plattype string and search for it
export function getPlantDescription(plantType: string) {
  const plant = plantData.find((p) => p.name === plantType);
  return plant ? plant.description : "Description not found";
}

//Recieve the Plattype string and search for all plant data
export function getPlantInfo(plantType: string) {
  return plantData.find((p) => p.name === plantType) || null;
}
