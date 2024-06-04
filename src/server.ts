import fastify from "fastify";
import fastifyCors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(fastifyCors, {
  origin: "*",
})



const teams = [
  {
    id: 1,
    name: "McLLaren",
    base: "Woking, United Kingdom",
  },
  {
    id: 2,
    name: "Mercedes",
    base: "Brackley, United Kingdom",
  },
  {
    id: 3,
    name: "Red Bull Racing",
    base: "Milton Keynes, United Kingdom",
  },
  {
    id: 4,
    name: "Ferrari",
    base: "Maranello, Italy",
  },
  {
    id: 5,
    name: "Alpine F1 Team",
    base: "Enstone, United Kingdom",
  },
  {
    id: 6,
    name: "Alfa Romeo F1 Team ORLEN",
    base: "Hinwil, Switzerland",
  },
  {
    id: 7,
    name: "AlphaTauri",
    base: "Faenza, Italy",
  },
  {
    id: 8,
    name: "Aston Martin Aramco Cognizant F1 Team",
    base: "Silverstone, United Kingdom",
  },
  {
    id: 9,
    name: "Haas F1 Team",
    base: "Kannapolis, United States",
  },
  {
    id: 10,
    name: "Williams Racing",
    base: "Grove, United Kingdom",
  },
];

const drivers = [
  {
    id: 1,
    name: "Max Verstappen",
    team: "Red Bull Racing",
  },
  {
    id: 2,
    name: "Lewis Hamilton",
    team: "Mercedes", 
  },
  {
    id: 3,
    name: "Lando Norris",
    team: "McLaren",
  },
  {
    id: 4,
    name: "Sergio Perez",
    team: "Red Bull Racing",
  },
  {
    id: 5,
    name: "George Russell",
    team: "Mercedes",
  },
  {
    id: 6,
    name: "Charles Leclerc",
    team: "Ferrari",
  },
  {
    id: 7,
    name: "Carlos Sainz Jr.",
    team: "Ferrari",
  },
  {
    id: 8,
    name: "Fernando Alonso",
    team: "Alpine F1 Team",
  },
  {
    id: 9,
    name: "Esteban Ocon",
    team: "Alpine F1 Team",
  },
  {
    id: 10,
    name: "Pierre Gasly",
    team: "AlphaTauri",
  },
  {
    id: 11,
    name: "Yuki Tsunoda",
    team: "AlphaTauri",
  },
  {
    id: 12,
    name: "Valtteri Bottas",
    team: "Alfa Romeo F1 Team ORLEN",
  },
  {
    id: 13,
    name: "Zhou Guanyu",
    team: "Alfa Romeo F1 Team ORLEN",
  },
  {
    id: 14,
    name: "Sebastian Vettel",
    team: "Aston Martin Aramco Cognizant F1 Team",
  },
  {
    id: 15,
    name: "Lance Stroll",
    team: "Aston Martin Aramco Cognizant F1 Team",
  },
  {
    id: 16,
    name: "Kevin Magnussen",
    team: "Haas F1 Team",
  },
  {
    id: 17,
    name: "Nico Hulkenberg",
    team: "Haas F1 Team",
  },
  {
    id: 18,
    name: "Alex Albon",
    team: "Williams Racing",
  },
  {
    id: 19,
    name: "Logan Sargeant",
    team: "Williams Racing",
  },
];

server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);

  return { teams };
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);

  return { drivers };
});

interface DriverParams {
  id: string;
}

server.get<{ Params: DriverParams }>(
  "/drivers/:id",
  async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if (!driver) {
      response.type("application/json").code(404);
      return { message: "Driver Not Found" };
    } else {
      response.type("application/json").code(200);
      return { driver };
    }
  }
);

server.listen({ port: 3333 }, () => {
  console.log("Server Init");
});
