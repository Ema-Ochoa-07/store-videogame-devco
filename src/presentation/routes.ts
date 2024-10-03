import { Request, Response, Router } from "express";
import { VidegamesRoutes } from "./videogames/router";
import { UsersRoutes } from "./users/router";
import { PurchasesRoutes } from "./purchases/router";

export class AppRoutes {
  static get routes(): Router {

/**************USER **********/

//*** USER ALL ***
   /**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve all users from the database.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: A user object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Enmanuel"
 *                 lastname:
 *                   type: string
 *                   example: "Ochoa"
 *                 amount:
 *                   type: number
 *                   example: 400000
 *             examples:  # Agregando un ejemplo de array de usuarios
 *               example:
 *                 value:
 *                   - id: 1
 *                     name: "Enmanuel"
 *                     lastname: "Ochoa"
 *                     amount: 400000
 *                   - id: 2
 *                     name: "Ema"
 *                     lastname: "Cedeño"
 *                     amount: 100000
 *                   - id: 3
 *                     name: "Cristhian"
 *                     lastname: "Ochoa"
 *                     amount: 200000
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */


//*** USER BY ID ***
/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     description: Retrieve a specific user from the database using their ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A user object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Enmanuel"
 *                 lastname:
 *                   type: string
 *                   example: "Ochoa"
 *                 amount:
 *                   type: number
 *                   example: 400000
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

    //*** CREATE USER ***
    /**
     * @swagger
     * /api/v1/users:
     *   post:
     *     summary: Create a user
     *     description: Add a new user to the database.
     *     tags:
     *       - Users
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 example: "Daniela"
     *               lastname:
     *                 type: string
     *                 example: "Paz"
     *               amount:
     *                 type: number
     *                 example: 150000
     *             required:
     *               - name
     *               - lastname
     *               - amount
     *     responses:
     *       201:
     *         description: User created
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: integer
     *                   example: 4
     *                 name:
     *                   type: string
     *                   example: "Daniela"
     *                 lastname:
     *                   type: string
     *                   example: "Paz"
     *                 amount:
     *                   type: number
     *                   example: 150000
     *       404:
     *         description: User not found
     *       400:
     *         description: Invalid input
     *       500:
     *         description: Internal server error
     */

    //*** UPDATE USER ***
    /**
     * @swagger
     * /api/v1/users/{id}:
     *   patch:
     *     summary: Update a user
     *     description: Update an existing user in the database.
     *     tags:
     *       - Users
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: Numeric ID of the user to update
     *         schema:
     *           type: integer
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 example: "Daniel"
     *               lastname:
     *                 type: string
     *                 example: "Ochoa"
     *               amount:
     *                 type: number
     *                 example: 500000 
     *     responses:
     *       200:
     *         description: User updated
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: integer
     *                   example: 1
     *                 name:
     *                   type: string
     *                   example: "Enmanuel"
     *                 lastname:
     *                   type: string
     *                   example: "Ochoa"
     *                 amount:
     *                   type: number
     *                   example: 450000
     *       404:
     *         description: User not found
     *       400:
     *         description: Invalid input
     *       500:
     *         description: Internal server error
     */

    //*** DELETE USER ***
    /**
     * @swagger
     * /api/v1/users/{id}:
     *   delete:
     *     summary: Delete a user
     *     description: Remove a user from the database.
     *     tags:
     *       - Users
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: Numeric ID of the user to delete
     *         schema:
     *           type: integer
     *     responses:
     *       204:
     *         description: User deleted
     *       404:
     *         description: User not found
     *       500:
     *         description: Internal server error
     */

/**************VIDEOGAME **********/



//*** GET ALL VIDEOGAMES ***
    /**
     * @swagger
     * /api/v1/videogames:
     *   get:
     *     summary: Get all videogames
     *     description: Retrieve all videogames from the database.
     *     tags:
     *       - Videogames
     *     responses:
     *       200:
     *         description: A videogame object
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: integer
     *                   example: 1
     *                 name:
     *                   type: string
     *                   example: "The Legend of Zelda"
     *                 console:
     *                   type: string
     *                   example: "Nintendo Switch"
     *                 quantity:
     *                   type: integer
     *                   example: 10
     *                 cost:
     *                   type: number
     *                   format: float
     *                   example: 59.99
     *                 userId:
     *                   type: integer
     *                   example: 2
     *       404:
     *         description: Videogame not found
     *       500:
     *         description: Internal server error
     */

    //*** GET VIDEOGAME BY ID ***
    /**
     * @swagger
     * /api/v1/videogames/{id}:
     *   get:
     *     summary: Get a videogame by ID
     *     description: Retrieve a specific videogame from the database using its ID.
     *     tags:
     *       - Videogames
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: Numeric ID of the videogame to retrieve
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: A videogame object
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: integer
     *                   example: 1
     *                 name:
     *                   type: string
     *                   example: "The Legend of Zelda"
     *                 console:
     *                   type: string
     *                   example: "Nintendo Switch"
     *                 quantity:
     *                   type: integer
     *                   example: 10
     *                 cost:
     *                   type: number
     *                   format: float
     *                   example: 59.99
     *                 userId:
     *                   type: integer
     *                   example: 2
     *       404:
     *         description: Videogame not found
     *       500:
     *         description: Internal server error
     */

    //*** CREATE VIDEOGAME ***
    /**
     * @swagger
     * /api/v1/videogames:
     *   post:
     *     summary: Create a videogame
     *     description: Add a new videogame to the database.
     *     tags:
     *       - Videogames
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 example: "Super Mario Odyssey"
     *               console:
     *                 type: string
     *                 example: "Nintendo Switch"
     *               quantity:
     *                 type: integer
     *                 example: 15
     *               cost:
     *                 type: number
     *                 format: float
     *                 example: 59.99
     *               userId:
     *                 type: integer
     *                 example: 1
     *             required:
     *               - name
     *               - console
     *               - quantity
     *               - cost
     *               - userId
     *     responses:
     *       201:
     *         description: Videogame created
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: integer
     *                   example: 5
     *                 name:
     *                   type: string
     *                   example: "Super Mario Odyssey"
     *                 console:
     *                   type: string
     *                   example: "Nintendo Switch"
     *                 quantity:
     *                   type: integer
     *                   example: 15
     *                 cost:
     *                   type: number
     *                   format: float
     *                   example: 59.99
     *                 userId:
     *                   type: integer
     *                   example: 1
     *       400:
     *         description: Invalid input
     *       500:
     *         description: Internal server error
     */

    //*** UPDATE VIDEOGAME ***
    /**
     * @swagger
     * /api/v1/videogames/{id}:
     *   patch:
     *     summary: Update a videogame
     *     description: Update an existing videogame in the database.
     *     tags:
     *       - Videogames
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: Numeric ID of the videogame to update
     *         schema:
     *           type: integer
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 example: "Super Mario Odyssey"
     *               console:
     *                 type: string
     *                 example: "Nintendo Switch"
     *               quantity:
     *                 type: integer
     *                 example: 20
     *               cost:
     *                 type: number
     *                 format: float
     *                 example: 49.99
     *               userId:
     *                 type: integer
     *                 example: 1
     *     responses:
     *       200:
     *         description: Videogame updated
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: integer
     *                   example: 1
     *                 name:
     *                   type: string
     *                   example: "Super Mario Odyssey"
     *                 console:
     *                   type: string
     *                   example: "Nintendo Switch"
     *                 quantity:
     *                   type: integer
     *                   example: 20
     *                 cost:
     *                   type: number
     *                   format: float
     *                   example: 49.99
     *                 userId:
     *                   type: integer
     *                   example: 1
     *       404:
     *         description: Videogame not found
     *       400:
     *         description: Invalid input
     *       500:
     *         description: Internal server error
     */

    //*** DELETE VIDEOGAME ***
    /**
     * @swagger
     * /api/v1/videogames/{id}:
     *   delete:
     *     summary: Delete a videogame
     *     description: Remove a videogame from the database.
     *     tags:
     *       - Videogames
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: Numeric ID of the videogame to delete
     *         schema:
     *           type: integer
     *     responses:
     *       204:
     *         description: Videogame deleted
     *       404:
     *         description: Videogame not found
     *       500:
     *         description: Internal server error
     */


    const router = Router();

    const users = [
      {
        id: 1,
        name: "Enmanuel",
        lastname: "Ochoa",
        amount: 400000,
      },
      {
        id: 2,
        name: "Ema",
        lastname: "Cedeño",
        amount: 100000,
      },
      {
        id: 3,
        name: "Cristhian",
        lastname: "Ochoa",
        amount: 200000,
      },
    ];

    const videogames = [
        {
          id: 1,
          name: "The Legend of Zelda",
          console: "Nintendo Switch",
          quantity: 10,
          cost: 59.99,
          userId: 2,
        },
        {
          id: 2,
          name: "Super Mario Odyssey",
          console: "Nintendo Switch",
          quantity: 15,
          cost: 49.99,
          userId: 1,
        },
      ];
  

    //*** USER ALL ***
    router.get('/users', (req: Request, res: Response) => {
      res.json(users);
    });


    //*** USER ID ***
    router.get('/users/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        const user = users.find((user) => user.id === parseInt(id));
  
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
  
        res.json(user);
    });  

    //*** CREATE USER ***
    router.post('/users', (req: Request, res: Response) => {
      const { name, lastname, amount } = req.body;
      const newUser = {
        id: users.length + 1,
        name,
        lastname,
        amount,
      };
      users.push(newUser);
      res.status(201).json(newUser);
    });

    //*** UPDATE USER ***
    router.patch('/users/:id', (req: Request, res: Response) => {
      const { id } = req.params;
      const userIndex = users.findIndex((user) => user.id === parseInt(id));

      if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
      }

      const updatedUser = {
        ...users[userIndex],
        ...req.body,
      };

      users[userIndex] = updatedUser;
      res.json(updatedUser);
    });

    //*** DELETE USER ***
    router.delete('/users/:id', (req: Request, res: Response) => {
      const { id } = req.params;
      const userIndex = users.findIndex((user) => user.id === parseInt(id));

      if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
      }

      users.splice(userIndex, 1);
      res.status(204).send(); 
    });


        //*** GET VIDEOGAME BY ID ***
        router.get('/videogames/:id', (req: Request, res: Response) => {
            const { id } = req.params;
            const videogame = videogames.find((vg) => vg.id === parseInt(id));
      
            if (!videogame) {
              return res.status(404).json({ message: "Videogame not found" });
            }
      
            res.json(videogame);
          });
      
          //*** CREATE VIDEOGAME ***
          router.post('/videogames', (req: Request, res: Response) => {
            const { name, console, quantity, cost, userId } = req.body;
            const newVideogame = {
              id: videogames.length + 1,
              name,
              console,
              quantity,
              cost,
              userId,
            };
            videogames.push(newVideogame);
            res.status(201).json(newVideogame);
          });
      
          //*** UPDATE VIDEOGAME ***
          router.patch('/videogames/:id', (req: Request, res: Response) => {
            const { id } = req.params;
            const videogameIndex = videogames.findIndex((vg) => vg.id === parseInt(id));
      
            if (videogameIndex === -1) {
              return res.status(404).json({ message: "Videogame not found" });
            }
      
            const updatedVideogame = {
              ...videogames[videogameIndex],
              ...req.body,
            };
      
            videogames[videogameIndex] = updatedVideogame;
            res.json(updatedVideogame);
          });
      
          //*** DELETE VIDEOGAME ***
          router.delete('/videogames/:id', (req: Request, res: Response) => {
            const { id } = req.params;
            const videogameIndex = videogames.findIndex((vg) => vg.id === parseInt(id));
      
            if (videogameIndex === -1) {
              return res.status(404).json({ message: "Videogame not found" });
            }
      
            videogames.splice(videogameIndex, 1);
            res.status(204).send();
          });

    router.use('/api/v1/users', UsersRoutes.routes);
    router.use('/api/v1/videogames', VidegamesRoutes.routes);
    router.use('/api/v1/purchases', PurchasesRoutes.routes);

    return router;
  }
}
