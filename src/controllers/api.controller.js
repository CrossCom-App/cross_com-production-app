//importaciones
import pool from "../pool.js";
//controladores
export const getPong = async (req, res) => {
  const [data] = await pool.query("SELECT 1+1 AS pong");
  console.log(data);

  res.json(data);
};

export const postResenia = async (req, res) => {
  try {
    const { title, description } = req.body;
    console.log(req.body)

    if (!title || !description)
      throw res.status(400).json({
        message: "Title/description are required",
      });

    const data = await pool.query(
      "INSERT INTO resenias (title, description) VALUES (?, ?)",
      [title, description]
    );

    console.log(data);
    res.json(data);
  } catch (error) {
    throw new Error(`Something goes wrong, error message: ${error.message}`);
  }
};
