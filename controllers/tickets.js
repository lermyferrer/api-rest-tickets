const { response } = require("express");

const { getConnection } = require("./../database/dbConfig");

const getTickets = async (req, res = response) => {
  try {
    const connection = await getConnection();
    const { page = 1, pageSize = 10 } = req.query;
    const offset = (page - 1) * pageSize;

    const totalValue = await connection.query(
      "SELECT count(*) as total FROM usuarios"
    );

    const totalRecords = totalValue[0].total;
    const totalPages = Math.ceil(totalRecords / pageSize);

    const result = await connection.query(
      "SELECT id, usuario, fecha_creacion, fecha_actualizacion, estatus FROM usuarios",
      [offset, parseInt(pageSize)]
    );

    res.status(200).json({
      page,
      pageSize,
      totalPages,
      totalRecords,
      data: result,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getTicket = async (req, res = response) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();

    const result = await connection.query(
      "SELECT id, usuario, fecha_creacion, fecha_actualizacion, estatus FROM usuarios WHERE id = ?",
      [id]
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const postTicket = async (req, res) => {
  try {
    const { usuario, fecha_creacion, fecha_actualizacion, estatus } = req.body;

    if (
      usuario === undefined ||
      fecha_creacion === undefined ||
      fecha_actualizacion === undefined ||
      estatus === undefined
    ) {
      res.status(400).json({ message: "Bad Request" });
      return;
    }

    const user = { usuario, fecha_creacion, fecha_actualizacion, estatus };
    const connection = await getConnection();
    await connection.query("INSERT INTO usuarios SET ?", [user]);
    res.json({ message: "Ticket creado exitosamente." });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updateTicket = async (req, res = response) => {
  try {
    const { id } = req.params;
    const { usuario, fecha_creacion, fecha_actualizacion, estatus } = req.body;

    if (
      id === undefined ||
      usuario === undefined ||
      fecha_creacion === undefined ||
      fecha_actualizacion === undefined ||
      estatus === undefined
    ) {
      res.status(400).json({ message: "Bad Request" });
      return;
    }

    const connection = await getConnection();

    const updateQuery = `
        UPDATE usuarios 
        SET usuario = ?, fecha_creacion = ?, fecha_actualizacion = ?, estatus = ? 
        WHERE id = ?
      `;

    await connection.query(updateQuery, [
      usuario,
      fecha_creacion,
      fecha_actualizacion,
      estatus,
      id,
    ]);

    res.json({ message: "Ticket actualizado exitosamente." });
  } catch (error) {
    console.error("Error al actualizar el ticket:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const deleteTicket = async (req, res = response) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();

    await connection.query("DELETE FROM usuarios WHERE id = ?", [id]);

    res.json({ message: "Ticket eliminado exitosamente." });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  getTickets,
  getTicket,
  postTicket,
  updateTicket,
  deleteTicket,
};
