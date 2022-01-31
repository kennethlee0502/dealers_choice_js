const data = [
  {
    id: "spiderman",
    boxoffice: 825,
    title: "Spider-Man",
    content:
      "Spider-Man is a 2002 American superhero film based on the Marvel Comics character of the same name. Directed by Sam Raimi from a screenplay by David Koepp, it is the first installment in the Spider-Man trilogy, and stars Tobey Maguire as the titular character, alongside Willem Dafoe, Kirsten Dunst, James Franco, Cliff Robertson, and Rosemary Harris. The film tells the origin when outcast teen genius Peter Parker develops spider-like superhuman abilities after a genetically-altered spider bites him and decides to use his newfound powers to fight crime as Spider-Man, facing the villainous Green Goblin in the process.",
    date: new Date(Date.now() - 15000000),
  },
  {
    id: "amazing",
    boxoffice: 758,
    title: "The Amazing Spider-Man",
    content:
      "The Amazing Spider-Man is a 2012 American superhero film based on the Marvel Comics character Spider-Man and sharing the title of the character's longest-running comic book series of the same name. It is the fourth theatrical Spider-Man film produced by Columbia Pictures and Marvel Entertainment, a reboot of the series following Sam Raimi's 2002–2007 Spider-Man trilogy, and the first of the two The Amazing Spider-Man films. The film was directed by Marc Webb and written by James Vanderbilt, Alvin Sargent and Steve Kloves from a story by Vanderbilt, and stars Andrew Garfield as Peter Parker / Spider-Man alongside Emma Stone, Rhys Ifans, Denis Leary, Campbell Scott, Irrfan Khan, Martin Sheen, and Sally Field. In the film, after Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    date: new Date(Date.now() - 90000000),
  },
  {
    id: "homecoming",
    boxoffice: 880.2,
    title: "Spider-Man: Homecoming",
    content:
      "Spider-Man: Homecoming is a 2017 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing. It is the second Spider-Man film reboot and the 16th film in the Marvel Cinematic Universe (MCU). The film was directed by Jon Watts, from a screenplay by the writing teams of Jonathan Goldstein and John Francis Daley, Watts and Christopher Ford, and Chris McKenna and Erik Sommers. Tom Holland stars as Peter Parker / Spider-Man, alongside Michael Keaton, Jon Favreau, Gwyneth Paltrow, Zendaya, Donald Glover, Jacob Batalon, Laura Harrier, Tony Revolori, Bokeem Woodbine, Tyne Daly, Marisa Tomei, and Robert Downey Jr. In Spider-Man: Homecoming, Peter Parker tries to balance high school life with being Spider-Man while facing the Vulture (Keaton).",
    name: "Hetty",
    date: new Date(Date.now() - 900000),
  },
];

const list = () => {
  return [...data];
};
const find = (id) => {
  const post = data.find((post) => post.id === id);
  return { ...post };
};

module.exports = { list: list, find: find };
