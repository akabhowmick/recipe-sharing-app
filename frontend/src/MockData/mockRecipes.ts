import { Recipe } from "../types/interfaces";
import { generateRandomImage } from "./RandomImage";

export const RecipesData: Recipe[] = [
  {
    id: 1,
    title: "Braised Pork Belly (Hong Shao Rou)",
    ingredients:
      "500g pork belly, 1/4 cup soy sauce, 2 tbsp sugar, 3 slices ginger, 3 cloves garlic, 2 star anise, 1 cinnamon stick, 1/4 cup Shaoxing wine",
    instructions:
      "Blanch the pork belly in boiling water for 5 minutes. Drain and set aside. In a pot, caramelize the sugar until golden brown. Add the ginger, garlic, star anise, and cinnamon stick, and stir for 1 minute. Add the pork belly, soy sauce, and Shaoxing wine. Add water to cover the pork. Bring to a boil, then reduce to a simmer and cook for 1.5 hours until the pork is tender and the sauce has thickened.",
    image: generateRandomImage(),
    cuisine_type: "Chinese",
    description:
      "A classic Chinese dish, Hong Shao Rou is known for its rich, savory flavor and melt-in-your-mouth texture.",
    fun_fact: "This dish was a favorite of Chairman Mao, who hailed from Hunan province.",
  },
  {
    id: 2,
    title: "Chicken Adobo",
    ingredients:
      "1 kg chicken thighs, 1/2 cup soy sauce, 1/4 cup vinegar, 5 cloves garlic, 3 bay leaves, 1 tsp black peppercorns, 1 onion",
    instructions:
      "Marinate the chicken in soy sauce and vinegar for at least 30 minutes. In a pot, sauté the garlic and onion until fragrant. Add the chicken along with the marinade, bay leaves, and black peppercorns. Bring to a boil, then reduce the heat and simmer for 30-40 minutes until the chicken is cooked through and the sauce has reduced.",
    image: generateRandomImage(),
    cuisine_type: "Filipino",
    description:
      "Adobo is considered the unofficial national dish of the Philippines, known for its tangy, savory flavor.",
    fun_fact: "The name 'adobo' comes from the Spanish word 'adobar,' which means 'to marinate.'",
  },
  {
    id: 3,
    title: "Beef Rendang",
    ingredients:
      "1 kg beef, 400 ml coconut milk, 2 stalks lemongrass, 5 cloves garlic, 1 thumb ginger, 1 thumb turmeric, 3 red chilies, 3 kaffir lime leaves",
    instructions:
      "Cut the beef into cubes and set aside. Blend the garlic, ginger, turmeric, and chilies into a paste. In a pot, fry the paste until fragrant. Add the lemongrass and kaffir lime leaves, then the beef. Pour in the coconut milk and bring to a boil. Reduce the heat and simmer for 2-3 hours, stirring occasionally, until the beef is tender and the sauce has thickened.",
    image: generateRandomImage(),
    cuisine_type: "Indonesian",
    description:
      "A traditional Indonesian dish, Rendang is a dry curry with complex flavors from slow-cooking spices and coconut milk.",
    fun_fact: "Rendang was named the 'World's Most Delicious Food' by CNN in 2011.",
  },
  {
    id: 4,
    title: "Sushi Rolls (Maki)",
    ingredients:
      "2 cups sushi rice, 4 sheets nori, 200g raw fish (tuna or salmon), 1 cucumber, 1 avocado, soy sauce, wasabi",
    instructions:
      "Cook the sushi rice according to package instructions and let it cool. Slice the fish, cucumber, and avocado into thin strips. Place a sheet of nori on a bamboo mat, spread a layer of rice over it, and add the fish, cucumber, and avocado in the center. Roll the sushi tightly and slice into pieces. Serve with soy sauce and wasabi.",
    image: generateRandomImage(),
    cuisine_type: "Japanese",
    description:
      "Maki sushi are rolled sushi pieces, made by wrapping rice and fillings in nori seaweed.",
    fun_fact: "The word 'sushi' actually refers to the vinegared rice, not the fish!",
  },
  {
    id: 5,
    title: "Bibimbap",
    ingredients:
      "2 cups cooked rice, 1 cup mixed vegetables (carrot, spinach, bean sprouts), 100g beef, 1 egg, 2 tbsp gochujang, 1 tbsp sesame oil, 1 tbsp soy sauce, 2 cloves garlic",
    instructions:
      "Cook the beef in a pan with soy sauce and garlic until browned. Sauté the vegetables separately. In a bowl, arrange the rice, vegetables, beef, and fried egg on top. Serve with a dollop of gochujang and a drizzle of sesame oil.",
    image: generateRandomImage(),
    cuisine_type: "Korean",
    description: "Bibimbap is a popular Korean mixed rice dish, often served in a hot stone bowl.",
    fun_fact: "The word 'bibimbap' means 'mixed rice' in Korean.",
  },
  {
    id: 6,
    title: "Tom Yum Soup",
    ingredients:
      "200g shrimp, 2 stalks lemongrass, 3 kaffir lime leaves, 1 thumb galangal, 2 red chilies, 2 tbsp fish sauce, 1 lime",
    instructions:
      "In a pot, bring water to a boil with lemongrass, kaffir lime leaves, galangal, and chilies. Add the shrimp and cook until done. Season with fish sauce and lime juice. Garnish with fresh herbs and serve hot.",
    image: generateRandomImage(),
    cuisine_type: "Thai",
    description:
      "Tom Yum is a hot and sour Thai soup known for its fragrant spices and fresh herbs.",
    fun_fact:
      "Tom Yum soup is often considered a natural remedy for colds due to its spicy, warming ingredients.",
  },
  {
    id: 7,
    title: "Pad Thai",
    ingredients:
      "200g rice noodles, 150g shrimp or chicken, 100g tofu, 1/4 cup peanuts, 1 cup bean sprouts, 1 egg, 3 tbsp tamarind paste, 2 tbsp fish sauce",
    instructions:
      "Soak the rice noodles in hot water until soft. In a pan, stir-fry the protein, tofu, and egg. Add the noodles, tamarind paste, fish sauce, and a little water. Stir until well combined. Garnish with peanuts and lime wedges.",
    image: generateRandomImage(),
    cuisine_type: "Thai",
    description:
      "Pad Thai is a stir-fried noodle dish that is one of Thailand's most famous exports.",
    fun_fact:
      "Pad Thai was promoted in the 1930s as part of a campaign to reduce rice consumption in Thailand.",
  },
  {
    id: 8,
    title: "Pho",
    ingredients:
      "1.5 liters beef broth, 200g rice noodles, 100g beef slices, 2 star anise, 1 cinnamon stick, 1 onion, 1 thumb ginger, fresh basil, 1 lime",
    instructions:
      "Simmer the broth with star anise, cinnamon, onion, and ginger for 1 hour. Cook the rice noodles according to package instructions. Assemble the soup by placing noodles in a bowl, adding beef slices, and pouring hot broth over them. Garnish with fresh herbs and lime wedges.",
    image: generateRandomImage(),
    cuisine_type: "Vietnamese",
    description: "Pho is a Vietnamese noodle soup, typically made with beef broth and herbs.",
    fun_fact:
      "Pho is often eaten for breakfast in Vietnam, where it is considered a hearty start to the day.",
  },
  {
    id: 9,
    title: "Satay Chicken",
    ingredients:
      "500g chicken, 1/4 cup peanuts, 200ml coconut milk, 1 tbsp curry powder, 2 tbsp soy sauce, 3 cloves garlic, 1 tsp turmeric",
    instructions:
      "Marinate the chicken in coconut milk, curry powder, soy sauce, garlic, and turmeric for at least 1 hour. Skewer the chicken and grill until cooked through. Serve with peanut sauce made by blending peanuts with coconut milk and spices.",
    image: generateRandomImage(),
    cuisine_type: "Malaysian",
    description:
      "Satay is a dish of seasoned, skewered, and grilled meat, served with a peanut sauce.",
    fun_fact:
      "Satay is believed to have been inspired by Indian kebabs, brought to Southeast Asia by Muslim traders.",
  },
  {
    id: 10,
    title: "Dumplings (Jiaozi)",
    ingredients:
      "200g ground pork, 100g cabbage, 1 thumb ginger, 2 cloves garlic, 2 tbsp soy sauce, dumpling wrappers",
    instructions:
      "Mix the ground pork with finely chopped cabbage, ginger, garlic, and soy sauce. Place a small amount of filling in the center of each wrapper, fold and seal the edges. Steam or pan-fry the dumplings until cooked through.",
    image: generateRandomImage(),
    cuisine_type: "Chinese",
    description:
      "Jiaozi are traditional Chinese dumplings, often enjoyed during the Lunar New Year.",
    fun_fact:
      "Dumplings symbolize wealth in Chinese culture because they resemble ancient Chinese money.",
  },
];
