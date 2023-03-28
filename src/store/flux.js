//const apiUrl = process.env.BACKEND_URL;

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      carousel: [
        {
          img: "https://keen-paletas-aff15f.netlify.app/images/women/zapatillas.jpg",
          title: "Zapatos",
          text: "Los mejores descuentos en zapatos de vestir",
        },
        {
          img: "https://keen-paletas-aff15f.netlify.app/images/women/zapatos-de-mujer.jpg",
          title: "Botas",
          text: "Zapatos casuales para todas las edades",
        },
        {
          img: "https://keen-paletas-aff15f.netlify.app/images/women/chica-pelo-azul-lentes.jpg",
          title: "Casual",
          text: "Viste bien para todas las temporadas",
        },
      ],
      productos: [
        {
          id: 1,
          img: "https://johanacano.co/17061-large_default/zapatos-oxford.jpg",
          description:
            "free from repetition, injected humour, or non-characteristic words etc.",
        },
        {
          id: 2,
          img: "https://www.dfvleather.com/wp-content/uploads/2021/11/MG_5138WEB.jpg",
          description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have.",
        },
        {
          id: 3,
          img: "https://img01.ztat.net/article/spp-media-p1/d96544d0aa4737a9962ef0785463a30b/33fe342f90cc467fb05f83fb7f1b43c3.jpg",
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          id: 4,
          img: "https://i.pinimg.com/236x/6f/7c/6e/6f7c6e11d2a69371a7b43e8dbf7dc4c7--mustangs-mirrors.jpg",
          description:
            "accompanied by English versions from the 1914 translation by H. Rackham.",
        },
      ],
    },
    actions: {},
  };
};

export default getState;
